"use client";

import { useState, useCallback } from "react";
import ReactFlow, {
    Background,
    Edge,
    Node,
    useNodesState,
    useEdgesState,
    ConnectionLineType,
} from "reactflow";
import "reactflow/dist/style.css";
import CustomNode from "./CustomNode";
import CodeModal from "./CodeModal";

const nodeTypes = {
    custom: CustomNode,
};

const initialNodes: Node[] = [
    {
        id: "1",
        type: "custom",
        position: { x: 0, y: 100 },
        data: { label: "Raw ImageNet", subLabel: "1.2M Images", icon: "database" },
    },
    {
        id: "2",
        type: "custom",
        position: { x: 250, y: 100 },
        data: { label: "Albumentations", subLabel: "MixUp / CutMix", icon: "layers" },
    },
    {
        id: "3",
        type: "custom",
        position: { x: 500, y: 100 },
        data: { label: "TPU v5e-1", subLabel: "Distributed Training", icon: "cpu" },
    },
    {
        id: "4",
        type: "custom",
        position: { x: 750, y: 100 },
        data: { label: "ONNX Export", subLabel: "INT8 Quantization", icon: "file" },
    },
];

const initialEdges: Edge[] = [
    { id: "e1-2", source: "1", target: "2", animated: true, style: { stroke: "#3b82f6" } },
    { id: "e2-3", source: "2", target: "3", animated: true, style: { stroke: "#3b82f6" } },
    { id: "e3-4", source: "3", target: "4", animated: true, style: { stroke: "#3b82f6" } },
];

const CODE_SNIPPETS = {
    "1": `
# PyTorch Dataset Loading
from torchvision import datasets, transforms

train_dataset = datasets.ImageNet(
    root='/data/imagenet',
    split='train',
    transform=transforms.Compose([
        transforms.Resize(256),
        transforms.CenterCrop(224),
        transforms.ToTensor(),
    ])
)
`,
    "2": `
# Albumentations Pipeline
import albumentations as A

transform = A.Compose([
    A.RandomRotate90(),
    A.Flip(),
    A.Transpose(),
    A.OneOf([
        A.GaussNoise(),
    ], p=0.2),
    A.OneOf([
        A.MotionBlur(p=.2),
        A.MedianBlur(blur_limit=3, p=0.1),
        A.Blur(blur_limit=3, p=0.1),
    ], p=0.2),
    A.ShiftScaleRotate(shift_limit=0.0625, scale_limit=0.2, rotate_limit=45, p=0.2),
    A.OneOf([
        A.OpticalDistortion(p=0.3),
        A.GridDistortion(p=.1),
        A.PiecewiseAffine(p=0.3),
    ], p=0.2),
    A.OneOf([
        A.CLAHE(clip_limit=2),
        A.Sharpen(),
        A.Emboss(),
        A.RandomBrightnessContrast(),
    ], p=0.3),
    A.HueSaturationValue(p=0.3),
])
`,
    "3": `
# TPU Distribution Strategy
import torch_xla.core.xla_model as xm
import torch_xla.distributed.parallel_loader as pl

device = xm.xla_device()
model = EfficientNetV2().to(device)
optimizer = torch.optim.Adam(model.parameters(), lr=1e-4)

def train_step(data, target):
    optimizer.zero_grad()
    output = model(data)
    loss = criterion(output, target)
    loss.backward()
    xm.optimizer_step(optimizer)
`,
    "4": `
# ONNX Export with Quantization
import torch.onnx
from onnxruntime.quantization import quantize_dynamic, QuantType

# 1. Export to ONNX
torch.onnx.export(
    model, 
    dummy_input, 
    "model.onnx", 
    input_names=['input'], 
    output_names=['output'],
    dynamic_axes={'input': {0: 'batch_size'}, 'output': {0: 'batch_size'}}
)

# 2. Apply INT8 Quantization
quantize_dynamic(
    "model.onnx",
    "model_int8.onnx",
    weight_type=QuantType.QUInt8
)
`,
};

export default function PipelineFlow() {
    const [nodes, , onNodesChange] = useNodesState(initialNodes);
    const [edges, , onEdgesChange] = useEdgesState(initialEdges);
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedNodeData, setSelectedNodeData] = useState<{ title: string; code: string } | null>(null);

    const onNodeClick = useCallback((event: React.MouseEvent, node: Node) => {
        const snippet = CODE_SNIPPETS[node.id as keyof typeof CODE_SNIPPETS];
        if (snippet) {
            setSelectedNodeData({
                title: node.data.label,
                code: snippet.trim(),
            });
            setModalOpen(true);
        }
    }, []);

    return (
        <div className="w-full h-[400px] border border-zinc-800 rounded-xl bg-zinc-900/30 backdrop-blur-sm overflow-hidden relative">
            <ReactFlow
                nodes={nodes}
                edges={edges}
                onNodesChange={onNodesChange}
                onEdgesChange={onEdgesChange}
                nodeTypes={nodeTypes}
                onNodeClick={onNodeClick}
                fitView
                attributionPosition="bottom-right"
                proOptions={{ hideAttribution: true }}
            >
                <Background color="#333" gap={20} />
            </ReactFlow>

            {selectedNodeData && (
                <CodeModal
                    isOpen={modalOpen}
                    onClose={() => setModalOpen(false)}
                    title={selectedNodeData.title}
                    code={selectedNodeData.code}
                />
            )}

            <div className="absolute top-4 left-4 pointer-events-none">
                <p className="text-xs text-zinc-500 bg-black/50 px-2 py-1 rounded">
                    Click nodes to view implementation details
                </p>
            </div>
        </div>
    );
}
