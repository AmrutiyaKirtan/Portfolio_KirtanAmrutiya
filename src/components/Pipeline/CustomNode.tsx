"use client";

import { Handle, Position, NodeProps } from "reactflow";
import { Database, Cpu, Layers, FileOutput } from "lucide-react";

const icons = {
    database: Database,
    cpu: Cpu,
    layers: Layers,
    file: FileOutput,
};

export default function CustomNode({ data }: NodeProps) {
    const Icon = icons[data.icon as keyof typeof icons] || Layers;

    return (
        <div className="px-4 py-3 shadow-lg rounded-lg bg-zinc-900 border-2 border-zinc-700 hover:border-blue-500 transition-colors min-w-[150px]">
            <Handle type="target" position={Position.Left} className="w-3 h-3 !bg-zinc-500" />

            <div className="flex items-center gap-3">
                <div className="p-2 rounded-md bg-zinc-800 text-blue-400">
                    <Icon className="w-4 h-4" />
                </div>
                <div>
                    <div className="text-sm font-bold text-zinc-200">{data.label}</div>
                    <div className="text-[10px] text-zinc-500">{data.subLabel}</div>
                </div>
            </div>

            <Handle type="source" position={Position.Right} className="w-3 h-3 !bg-blue-500" />
        </div>
    );
}
