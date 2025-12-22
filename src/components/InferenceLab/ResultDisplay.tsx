import { InferenceResult } from "./InferenceEngine";
import { Zap, Cpu, Activity } from "lucide-react";

interface ResultDisplayProps {
    result: InferenceResult | null;
    loading: boolean;
}

export default function ResultDisplay({ result, loading }: ResultDisplayProps) {
    if (loading) {
        return (
            <div className="w-full h-full flex flex-col items-center justify-center space-y-4 animate-pulse">
                <div className="w-12 h-12 rounded-full border-4 border-blue-500 border-t-transparent animate-spin" />
                <p className="text-blue-400 font-mono text-sm">Running ONNX Runtime (WASM)...</p>
            </div>
        );
    }

    if (!result) return null;

    return (
        <div className="w-full space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="flex items-center justify-between p-4 rounded-lg bg-zinc-900 border border-zinc-800">
                <div className="flex items-center gap-3">
                    <div className="p-2 rounded-md bg-green-500/10 text-green-500">
                        <Zap className="w-5 h-5" />
                    </div>
                    <div>
                        <p className="text-xs text-zinc-500 uppercase tracking-wider">Prediction</p>
                        <p className="text-xl font-bold text-white">{result.label}</p>
                    </div>
                </div>
                <div className="text-right">
                    <p className="text-2xl font-bold text-green-400">
                        {(result.confidence * 100).toFixed(1)}%
                    </p>
                    <p className="text-xs text-zinc-500">Confidence</p>
                </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
                <div className="p-3 rounded-lg bg-zinc-900/50 border border-zinc-800 flex items-center gap-3">
                    <Activity className="w-4 h-4 text-blue-400" />
                    <div>
                        <p className="text-xs text-zinc-500">Inference Time</p>
                        <p className="font-mono text-blue-400">{result.inferenceTime}ms</p>
                    </div>
                </div>
                <div className="p-3 rounded-lg bg-zinc-900/50 border border-zinc-800 flex items-center gap-3">
                    <Cpu className="w-4 h-4 text-purple-400" />
                    <div>
                        <p className="text-xs text-zinc-500">Backend</p>
                        <p className="font-mono text-purple-400">{result.device} (INT8)</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
