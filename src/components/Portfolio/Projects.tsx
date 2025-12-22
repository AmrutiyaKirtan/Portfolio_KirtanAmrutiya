"use client";

import { ExternalLink, Github } from "lucide-react";

interface Project {
    id: string;
    title: string;
    description: string;
    tags: string[];
    link: string;
    github?: string;
}

const PROJECTS: Project[] = [
    {
        id: "1",
        title: "FaViT (Factorized Vision Transformer)",
        description: "A novel implementation of Factorized Vision Transformers integrating ProbSparse attention. Bridges the gap between global context and CNN efficiency, achieving competitive accuracy on CIFAR-10 with significantly reduced computational cost.",
        tags: ["Python", "PyTorch", "Vision Transformer", "Research"],
        link: "https://github.com/AmrutiyaKirtan/Factorized-vit-Probsparsing",
        github: "https://github.com/AmrutiyaKirtan/Factorized-vit-Probsparsing",
    },
    {
        id: "2",
        title: "VocalNavigator AI",
        description: "Hands-free desktop assistant enabling real-time OS control via voice. Features always-on hotword detection (Porcupine), efficient VAD, OpenAI Whisper for transcription, and a hybrid intent engine (Keyword + Gemini LLM) for complex commands.",
        tags: ["Python", "OpenAI Whisper", "Porcupine", "PyAutoGUI", "Gemini API"],
        link: "https://github.com/AmrutiyaKirtan/VocalNavigator_AI",
        github: "https://github.com/AmrutiyaKirtan/VocalNavigator_AI",
    },
    {
        id: "3",
        title: "One-for-all-AI",
        description: "Cross-platform AI assistant combining voice recognition, text-to-speech, and extensible command processing. Features a modular architecture for handling complex multi-layered tasks with a clean Tkinter GUI.",
        tags: ["Python", "Google Speech API", "Tkinter", "Automation"],
        link: "https://github.com/AmrutiyaKirtan/One-for-all-AI",
        github: "https://github.com/AmrutiyaKirtan/One-for-all-AI",
    },
    {
        id: "4",
        title: "CareerPathAI",
        description: "AI-driven platform for smarter career decisions. Analyzes market trends and personal skills to provide tailored recommendations, resume optimization, and strategic career growth plans.",
        tags: ["AI Recommendation", "Data Analysis", "Career Tech"],
        link: "https://github.com/AmrutiyaKirtan/CareerPathAI",
        github: "https://github.com/AmrutiyaKirtan/CareerPathAI",
    },
];

export default function Projects() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {PROJECTS.map((project) => (
                <a
                    key={project.id}
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block p-6 rounded-xl bg-zinc-900/50 border border-zinc-800 hover:border-blue-500/50 hover:bg-zinc-900 transition-all duration-300"
                >
                    <div className="flex justify-between items-start mb-4">
                        <h3 className="text-xl font-bold text-zinc-100 group-hover:text-blue-400 transition-colors">
                            {project.title}
                        </h3>
                        <div className="flex gap-3">
                            {project.github && (
                                <div className="text-zinc-500 group-hover:text-white transition-colors">
                                    <Github className="w-5 h-5" />
                                </div>
                            )}
                            <div className="text-zinc-500 group-hover:text-white transition-colors">
                                <ExternalLink className="w-5 h-5" />
                            </div>
                        </div>
                    </div>

                    <p className="text-zinc-400 text-sm mb-6 leading-relaxed group-hover:text-zinc-300 transition-colors">
                        {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                            <span
                                key={tag}
                                className="px-2.5 py-1 text-xs font-medium rounded-full bg-zinc-800 text-zinc-400 border border-zinc-700/50 group-hover:border-blue-500/30 group-hover:text-blue-200 transition-colors"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                </a>
            ))}
        </div>
    );
}
