"use client";

import { X, Code2 } from "lucide-react";

interface CodeModalProps {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    code: string;
}

export default function CodeModal({ isOpen, onClose, title, code }: CodeModalProps) {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
            <div className="w-full max-w-2xl bg-zinc-900 border border-zinc-800 rounded-xl shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200">
                <div className="flex items-center justify-between p-4 border-b border-zinc-800 bg-zinc-900/50">
                    <div className="flex items-center gap-2">
                        <Code2 className="w-5 h-5 text-blue-400" />
                        <h3 className="font-semibold text-zinc-200">{title}</h3>
                    </div>
                    <button
                        onClick={onClose}
                        className="p-1 rounded-lg hover:bg-zinc-800 text-zinc-400 hover:text-white transition-colors"
                    >
                        <X className="w-5 h-5" />
                    </button>
                </div>
                <div className="p-0 overflow-x-auto">
                    <pre className="p-4 text-sm font-mono text-zinc-300 bg-[#0d1117]">
                        <code>{code}</code>
                    </pre>
                </div>
                <div className="p-4 border-t border-zinc-800 bg-zinc-900/50 text-xs text-zinc-500 flex justify-between">
                    <span>Python 3.10</span>
                    <span>Read-only</span>
                </div>
            </div>
        </div>
    );
}
