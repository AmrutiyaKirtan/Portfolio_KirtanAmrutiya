"use client";

import { useState, useCallback } from "react";
import { Upload, FileImage } from "lucide-react";

interface DropZoneProps {
    onImageSelect: (file: File) => void;
}

export default function DropZone({ onImageSelect }: DropZoneProps) {
    const [isDragging, setIsDragging] = useState(false);
    const [preview, setPreview] = useState<string | null>(null);

    const handleDragOver = useCallback((e: React.DragEvent) => {
        e.preventDefault();
        setIsDragging(true);
    }, []);

    const handleDragLeave = useCallback((e: React.DragEvent) => {
        e.preventDefault();
        setIsDragging(false);
    }, []);

    const handleDrop = useCallback(
        (e: React.DragEvent) => {
            e.preventDefault();
            setIsDragging(false);
            const file = e.dataTransfer.files[0];
            if (file && file.type.startsWith("image/")) {
                const reader = new FileReader();
                reader.onload = () => setPreview(reader.result as string);
                reader.readAsDataURL(file);
                onImageSelect(file);
            }
        },
        [onImageSelect]
    );

    const handleFileInput = useCallback(
        (e: React.ChangeEvent<HTMLInputElement>) => {
            const file = e.target.files?.[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = () => setPreview(reader.result as string);
                reader.readAsDataURL(file);
                onImageSelect(file);
            }
        },
        [onImageSelect]
    );

    return (
        <div
            className={`relative flex flex-col items-center justify-center w-full h-64 border-2 border-dashed rounded-xl transition-all duration-300 ${isDragging
                    ? "border-blue-500 bg-blue-500/10"
                    : "border-zinc-700 hover:border-zinc-500 bg-zinc-900/50"
                }`}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
        >
            <input
                type="file"
                accept="image/*"
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                onChange={handleFileInput}
            />

            {preview ? (
                <div className="relative w-full h-full p-2">
                    <img
                        src={preview}
                        alt="Preview"
                        className="w-full h-full object-contain rounded-lg"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 hover:opacity-100 transition-opacity rounded-lg">
                        <p className="text-white font-medium">Click or drop to replace</p>
                    </div>
                </div>
            ) : (
                <div className="flex flex-col items-center space-y-4 text-zinc-400">
                    <div className="p-4 rounded-full bg-zinc-800">
                        <Upload className="w-8 h-8" />
                    </div>
                    <div className="text-center">
                        <p className="text-lg font-medium text-zinc-200">
                            Drop image here
                        </p>
                        <p className="text-sm">or click to browse</p>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-zinc-500">
                        <FileImage className="w-4 h-4" />
                        <span>Supports JPG, PNG</span>
                    </div>
                </div>
            )}
        </div>
    );
}
