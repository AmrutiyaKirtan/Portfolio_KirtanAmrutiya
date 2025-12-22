"use client";

import { Briefcase, Calendar, ChevronDown, ChevronUp, BookOpen, FileText } from "lucide-react";
import { useState } from "react";

interface Role {
    id: string;
    title: string;
    company: string;
    period: string;
    description: string[];
    skills: string[];
    detailedExplanation?: {
        title: string;
        content: string[];
        diagram?: React.ReactNode;
        papers?: { title: string; link: string }[];
    };
}

const ROLES: Role[] = [
    {
        id: "1",
        title: "Research Intern",
        company: "ISRO (Physical Research Laboratory)",
        period: "Present",
        description: [
            "Developed 'FaViT[mine]', an enhanced Factorization Vision Transformer achieving +26% accuracy boost (70% → 96%) on CIFAR-10.",
            "Optimized training with RandAugment, Mixup, and Model EMA while maintaining O(N log N) efficiency using ProbSparse Attention.",
            "Scaled model capacity by 4x (3M to 13M params) to capture fine-grained patterns, achieving stable convergence with Cosine Warmup."
        ],
        skills: ["PyTorch", "Vision Transformers", "Optimization", "Research"],
        detailedExplanation: {
            title: "The Smart Neighborhood: Understanding FaViT",
            content: [
                "Imagine a city (the image) divided into neighborhoods (windows). Instead of visiting every house (pixel), we hire a detective (ProbSparse) to find the most important ones.",
                "1. **Patch Division**: We cut the image into small puzzle pieces.",
                "2. **Window Grouping**: We group these pieces into local neighborhoods.",
                "3. **ProbSparse Attention**: Our 'detective' finds the top-k most informative patches in each neighborhood.",
                "4. **Representative**: We create one spokesperson for each neighborhood, reducing complexity from O(N²) to O(N log N)."
            ],
            diagram: (
                <div className="my-6 p-4 bg-zinc-900/50 rounded-lg border border-zinc-800 font-mono text-xs overflow-x-auto">
                    <div className="flex justify-between items-center min-w-[500px]">
                        {/* Step 1: Input */}
                        <div className="flex flex-col items-center gap-2">
                            <span className="text-zinc-500">Input Image</span>
                            <div className="w-16 h-16 bg-zinc-800 rounded flex items-center justify-center text-2xl">🖼️</div>
                        </div>

                        <div className="text-zinc-600">➡️</div>

                        {/* Step 2: Patches */}
                        <div className="flex flex-col items-center gap-2">
                            <span className="text-zinc-500">Patches</span>
                            <div className="grid grid-cols-2 gap-1 w-16 h-16 p-1 bg-zinc-900/50 rounded border border-zinc-800">
                                <div className="bg-zinc-700 rounded"></div>
                                <div className="bg-zinc-700 rounded"></div>
                                <div className="bg-zinc-700 rounded"></div>
                                <div className="bg-zinc-700 rounded"></div>
                            </div>
                        </div>

                        <div className="text-zinc-600">➡️</div>

                        {/* Step 3: Windows */}
                        <div className="flex flex-col items-center gap-2">
                            <span className="text-zinc-500">Windows</span>
                            <div className="w-16 h-16 border-2 border-dashed border-blue-500/30 rounded flex items-center justify-center relative bg-blue-500/5">
                                <span className="text-[10px] text-blue-400 font-semibold">Window</span>
                            </div>
                        </div>

                        <div className="text-zinc-600">➡️</div>

                        {/* Step 4: Sparse Attn */}
                        <div className="flex flex-col items-center gap-2">
                            <span className="text-zinc-500">Sparse Attn</span>
                            <div className="w-16 h-16 bg-zinc-800 rounded flex flex-col items-center justify-center gap-1 border border-zinc-700">
                                <div className="w-2 h-2 bg-green-500 rounded-full shadow-[0_0_8px_rgba(34,197,94,0.5)]"></div>
                                <span className="text-[8px] text-green-400">Top-K</span>
                            </div>
                        </div>
                    </div>
                </div>
            ),
            papers: [
                { title: "Factorization Vision Transformer (FaViT)", link: "/papers/favit.pdf" },
                { title: "Informer: Beyond Efficient Transformer", link: "/papers/informer.pdf" },
            ]
        }
    },
    {
        id: "2",
        title: "Java and C++ Intern",
        company: "SLTL Group",
        period: "Jun 2022 - Sep 2022",
        description: [
            "Utilized natural language processing (NLP) to integrate chatbots, reducing customer query response time by 30%.",
            "Resolved over 150 critical bugs by collaborating with a team of 10 developers, reducing load times by 40% across platforms.",
            "Led the user interface redesign initiative, which increased user engagement by 35% and expanded daily active users to 6,750.",
            "Improved backend process speeds by 50% using C++ and Java, facilitating seamless navigation for over 20,000 monthly visitors."
        ],
        skills: ["Java", "C++", "NLP", "Backend Development", "UI/UX Design"]
    }
];

export default function Experience() {
    const [expandedId, setExpandedId] = useState<string | null>(null);

    return (
        <div className="space-y-8 border-2 border-transparent">
            {ROLES.map((role) => (
                <div
                    key={role.id}
                    className="relative pl-8 border-l-2 border-zinc-800 hover:border-blue-500 transition-colors group"
                >
                    <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-zinc-900 border-2 border-zinc-600 group-hover:border-blue-500 group-hover:bg-blue-500/20 transition-all" />

                    <div className="space-y-2">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                            <h3 className="text-xl font-bold text-zinc-100">{role.title}</h3>
                            <div className="flex items-center gap-2 text-sm text-zinc-500">
                                <Calendar className="w-4 h-4" />
                                <span>{role.period}</span>
                            </div>
                        </div>

                        <div className="flex items-center gap-2 text-blue-400 font-medium">
                            <Briefcase className="w-4 h-4" />
                            <span>{role.company}</span>
                        </div>

                        <ul className="list-disc list-inside text-zinc-400 leading-relaxed max-w-3xl space-y-1">
                            {role.description.map((point, index) => (
                                <li key={index}>{point}</li>
                            ))}
                        </ul>

                        <div className="flex flex-wrap gap-2 pt-2">
                            {role.skills.map((skill) => (
                                <span
                                    key={skill}
                                    className="px-2 py-1 text-xs rounded-md bg-zinc-800/50 text-zinc-400 border border-zinc-800"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>

                        {role.detailedExplanation && (
                            <div className="pt-4">
                                <button
                                    onClick={() => setExpandedId(expandedId === role.id ? null : role.id)}
                                    className="flex items-center gap-2 text-sm font-medium text-blue-400 hover:text-blue-300 transition-colors"
                                >
                                    {expandedId === role.id ? (
                                        <>
                                            <ChevronUp className="w-4 h-4" />
                                            Hide Details
                                        </>
                                    ) : (
                                        <>
                                            <BookOpen className="w-4 h-4" />
                                            Learn Mode
                                        </>
                                    )}
                                </button>

                                {expandedId === role.id && (
                                    <div className="mt-4 p-6 rounded-xl bg-zinc-900/80 border border-zinc-800 animate-in slide-in-from-top-2 duration-200">
                                        <h4 className="text-lg font-semibold text-zinc-100 mb-4 flex items-center gap-2">
                                            <span className="text-2xl">🎓</span>
                                            {role.detailedExplanation.title}
                                        </h4>

                                        <div className="space-y-3 text-zinc-300">
                                            {role.detailedExplanation.content.map((paragraph, idx) => (
                                                <p key={idx} className="leading-relaxed">{paragraph}</p>
                                            ))}
                                        </div>

                                        {role.detailedExplanation.diagram}

                                        {role.detailedExplanation.papers && (
                                            <div className="mt-6 pt-4 border-t border-zinc-800">
                                                <h5 className="text-sm font-medium text-zinc-400 mb-3 flex items-center gap-2">
                                                    <FileText className="w-4 h-4" />
                                                    Related Research
                                                </h5>
                                                <div className="flex flex-col gap-2">
                                                    {role.detailedExplanation.papers.map((paper, idx) => (
                                                        <a
                                                            key={idx}
                                                            href={paper.link}
                                                            className="text-sm text-blue-400 hover:underline flex items-center gap-2"
                                                        >
                                                            • {paper.title}
                                                        </a>
                                                    ))}
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                )}
                            </div>
                        )}
                    </div>
                </div>
            ))}
        </div>
    );
}
