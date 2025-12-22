"use client";

import { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import { graphData } from "@/data/graphData";

// Dynamically import ForceGraph3D with no SSR to avoid window is not defined error
const ForceGraph3D = dynamic(() => import("react-force-graph-3d"), {
    ssr: false,
    loading: () => (
        <div className="flex items-center justify-center h-full text-zinc-500">
            Loading 3D Graph...
        </div>
    ),
});

interface GraphNode {
    id: string;
    group: number;
    val: number;
}

export default function Graph3D() {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const fgRef = useRef<any>(null);
    const [dimensions, setDimensions] = useState({ width: 800, height: 500 });
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // Update dimensions on window resize
        const handleResize = () => {
            if (containerRef.current) {
                setDimensions({
                    width: containerRef.current.clientWidth,
                    height: containerRef.current.clientHeight,
                });
            }
        };

        window.addEventListener("resize", handleResize);
        handleResize(); // Initial size

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    useEffect(() => {
        // Auto-rotate
        let angle = 0;
        const interval = setInterval(() => {
            if (fgRef.current) {
                angle += 0.003;
                fgRef.current.cameraPosition({
                    x: 200 * Math.sin(angle),
                    z: 200 * Math.cos(angle),
                });
            }
        }, 10);

        return () => clearInterval(interval);
    }, []);

    return (
        <div
            ref={containerRef}
            className="w-full h-[500px] border border-zinc-800 rounded-xl bg-zinc-900/30 backdrop-blur-sm overflow-hidden relative"
        >
            <ForceGraph3D
                ref={fgRef}
                graphData={graphData}
                width={dimensions.width}
                height={dimensions.height}
                backgroundColor="rgba(0,0,0,0)"
                nodeLabel="id"
                nodeColor={(node: object) => {
                    const n = node as GraphNode;
                    const colors = [
                        "#3b82f6", // Blue
                        "#8b5cf6", // Violet
                        "#10b981", // Emerald
                        "#f59e0b", // Amber
                        "#ef4444", // Red
                        "#ec4899", // Pink
                        "#06b6d4", // Cyan
                        "#84cc16", // Lime
                        "#6366f1", // Indigo
                        "#d946ef", // Fuchsia
                    ];
                    return colors[n.group % colors.length];
                }}
                nodeRelSize={6}
                linkColor={() => "#3f3f46"}
                linkOpacity={0.5}
                linkWidth={1}
            />

            <div className="absolute bottom-4 right-4 pointer-events-none">
                <div className="bg-black/50 p-2 rounded text-xs text-zinc-500">
                    <p>Drag to rotate • Scroll to zoom</p>
                </div>
            </div>
        </div>
    );
}
