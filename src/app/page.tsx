import Image from "next/image";
import InferenceLab from "@/components/InferenceLab/InferenceLab";
import PipelineFlow from "@/components/Pipeline/PipelineFlow";
import Graph3D from "@/components/KnowledgeGraph/Graph3D";
import TerminalLog from "@/components/EngineeringLog/TerminalLog";
import Experience from "@/components/Portfolio/Experience";
import Projects from "@/components/Portfolio/Projects";

export default function Home() {
  return (
    <main className="min-h-screen p-8 md:p-24 space-y-24">
      <header className="mb-12 space-y-6">
        <div className="flex flex-col-reverse md:flex-row gap-8 items-start md:items-center">
          <div className="flex-1">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
              Kirtan's <span className="text-blue-500">Research Lab</span>
            </h1>
            <p className="mt-4 text-xl text-zinc-300 max-w-2xl">
              Full-Stack Engineer & AI Researcher specializing in Edge AI and High-Performance Web Graphics.
            </p>
            <p className="mt-2 text-lg text-zinc-400 max-w-2xl">
              Building the future of client-side inference. Passionate about bringing large models to small devices.
            </p>
          </div>
          <div className="relative w-32 h-32 md:w-48 md:h-48 shrink-0">
            <div className="absolute inset-0 rounded-full bg-blue-500/20 blur-2xl" />
            <Image
              src="/profile-v5.jpg"
              alt="profile"
              fill
              className="object-cover rounded-full border-2 border-zinc-800"
              priority
            />
          </div>
        </div>

        <div className="flex gap-4">
          <a href="https://github.com/AmrutiyaKirtan" className="px-4 py-2 rounded-full bg-zinc-800 text-zinc-300 hover:bg-zinc-700 hover:text-white transition-colors text-sm font-medium">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/kirtanamrutiya/" className="px-4 py-2 rounded-full bg-zinc-800 text-zinc-300 hover:bg-zinc-700 hover:text-white transition-colors text-sm font-medium">
            LinkedIn
          </a>

          <a href="https://drive.google.com/file/d/1cyHTwL46pEzUFU5e5dW76rZZVOACF9VJ/view?usp=drive_link" target="_blank" rel="noopener noreferrer" className="px-4 py-2 rounded-full bg-blue-600/10 text-blue-400 hover:bg-blue-600/20 transition-colors text-sm font-medium border border-blue-600/20">
            Download CV
          </a>
        </div>
      </header>

      {/* Experience Section */}
      <section id="experience" className="space-y-6">
        <h2 className="text-2xl font-semibold border-b border-zinc-800 pb-2">Experience</h2>
        <Experience />
      </section>

      {/* Projects Section */}
      <section id="projects" className="space-y-6">
        <h2 className="text-2xl font-semibold border-b border-zinc-800 pb-2">Selected Projects</h2>
        <Projects />
      </section>

      <div className="py-12 border-t border-zinc-800">
        <h2 className="text-3xl font-bold mb-8 text-center text-zinc-200">Kirtan's Research Lab</h2>
        <p className="text-center text-zinc-500 mb-12 max-w-2xl mx-auto">
          Explore my latest experiments in client-side AI, distributed systems, and 3D visualization.
        </p>

        <div className="space-y-24">
          {/* Section 1: Edge Inference Lab */}
          <section id="inference-lab" className="space-y-6">
            <h2 className="text-2xl font-semibold border-b border-zinc-800 pb-2">01. Edge Inference Lab</h2>
            <InferenceLab />
          </section>

          {/* Section 2: Interactive Training Pipeline */}
          <section id="training-pipeline" className="space-y-6">
            <h2 className="text-2xl font-semibold border-b border-zinc-800 pb-2">02. Interactive Training Pipeline</h2>
            <PipelineFlow />
          </section>

          {/* Section 3: 3D Knowledge Graph */}
          <section id="knowledge-graph" className="space-y-6">
            <h2 className="text-2xl font-semibold border-b border-zinc-800 pb-2">03. Interactive 3D Knowledge Graph</h2>
            <Graph3D />
          </section>

          {/* Section 4: Engineering Log */}
          <section id="engineering-log" className="space-y-6">
            <h2 className="text-2xl font-semibold border-b border-zinc-800 pb-2">04. Engineering Log</h2>
            <TerminalLog />
          </section>
        </div>
      </div>
    </main>
  );
}
