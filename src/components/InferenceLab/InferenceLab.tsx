"use client";

import { useState } from "react";
import DropZone from "./DropZone";
import ResultDisplay from "./ResultDisplay";
import { runInference, InferenceResult } from "./InferenceEngine";

export default function InferenceLab() {
    const [result, setResult] = useState<InferenceResult | null>(null);
    const [loading, setLoading] = useState(false);

    const handleImageSelect = async (file: File) => {
        setLoading(true);
        setResult(null);
        try {
            const inferenceResult = await runInference(file);
            setResult(inferenceResult);
        } catch (error) {
            console.error("Inference failed:", error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6 border border-zinc-800 rounded-xl bg-zinc-900/30 backdrop-blur-sm">
            <div className="space-y-4">
                <h3 className="text-lg font-medium text-zinc-200">Input Image</h3>
                <DropZone onImageSelect={handleImageSelect} />
                <p className="text-xs text-zinc-500">
                    *Images are processed locally via ONNX Runtime Web. No data leaves your device.
                </p>
            </div>

            <div className="space-y-4">
                <h3 className="text-lg font-medium text-zinc-200">Inference Results</h3>
                <div className="h-64 flex flex-col justify-center">
                    {!result && !loading ? (
                        <div className="text-center text-zinc-500">
                            <p>Waiting for input...</p>
                            <p className="text-xs mt-2">Model: MobileNetV2 (Quantized INT8)</p>
                        </div>
                    ) : (
                        <ResultDisplay result={result} loading={loading} />
                    )}
                </div>
            </div>
        </div>
    );
}
