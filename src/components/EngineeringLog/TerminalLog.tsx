"use client";

import { Terminal } from "lucide-react";

const LOG_CONTENT = `
[2023-10-24 09:15:22] INFO: Initializing migration from PyTorch to ONNX Runtime...
[2023-10-24 09:15:23] WARN: Model size (ResNet50) is 102MB. Too large for client-side caching.
[2023-10-24 09:16:45] ACTION: Switching to MobileNetV3-Small.
[2023-10-24 09:16:48] SUCCESS: Model size reduced to 12MB.
[2023-10-25 14:20:11] ERROR: WASM backend initialization failed on iOS Safari (Memory limit exceeded).
[2023-10-25 14:35:00] DEBUG: Profiling memory usage... Peak usage: 450MB.
[2023-10-25 16:10:22] FIX: Applied INT8 Quantization.
[2023-10-25 16:10:25] RESULT: Model size: 3.5MB. Memory footprint: 85MB.
[2023-10-26 11:05:33] INFO: Enabling WebGL backend for GPU acceleration.
[2023-10-26 11:05:35] WARN: WebGL operator support limited. Fallback to WASM for 'NonMaxSuppression'.
[2023-10-27 08:00:00] DEPLOY: Production build successful.
[2023-10-27 08:00:01] STATUS: Serving inference at 45ms/frame on iPhone 13.
`;

export default function TerminalLog() {
    return (
        <div className="w-full border border-zinc-800 rounded-xl bg-black overflow-hidden font-mono text-sm shadow-2xl">
            <div className="flex items-center justify-between px-4 py-2 bg-zinc-900 border-b border-zinc-800">
                <div className="flex items-center gap-2">
                    <Terminal className="w-4 h-4 text-zinc-400" />
                    <span className="text-zinc-400">engineering_log.txt</span>
                </div>
                <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50" />
                    <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50" />
                </div>
            </div>
            <div className="p-6 text-zinc-300 overflow-x-auto">
                <pre className="whitespace-pre-wrap">
                    {LOG_CONTENT.trim().split('\n').map((line, i) => {
                        const colorClass =
                            line.includes("ERROR") ? "text-red-400" :
                                line.includes("WARN") ? "text-yellow-400" :
                                    line.includes("SUCCESS") ? "text-green-400" :
                                        line.includes("FIX") ? "text-blue-400" :
                                            "text-zinc-300";

                        return (
                            <div key={i} className={`${colorClass} mb-1`}>
                                {line}
                            </div>
                        );
                    })}
                    <div className="animate-pulse mt-2">_</div>
                </pre>
            </div>
        </div>
    );
}
