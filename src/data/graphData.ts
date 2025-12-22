export const graphData = {
    nodes: [
        // Languages
        { id: "Python", group: 1, val: 20 },
        { id: "C++", group: 1, val: 15 },
        { id: "Java", group: 1, val: 10 },
        { id: "JavaScript", group: 1, val: 15 },

        // Core Domains
        { id: "Machine Learning", group: 2, val: 20 },
        { id: "Neural Networks", group: 2, val: 15 },
        { id: "Web Development", group: 3, val: 15 },
        { id: "Computer Vision", group: 2, val: 15 },

        // Frameworks & Tools
        { id: "PyTorch", group: 2, val: 12 },
        { id: "React", group: 3, val: 12 },
        { id: "Next.js", group: 3, val: 10 },

        // Project Specifics (FaViT & Informers)
        { id: "FaViT", group: 4, val: 25 },
        { id: "Informers", group: 4, val: 20 },
        { id: "ProbSparse", group: 4, val: 15 },
        { id: "Vision Transformers", group: 4, val: 15 },
        { id: "Attention Mech", group: 4, val: 10 },
    ],
    links: [
        // Language Connections
        { source: "Python", target: "Machine Learning" },
        { source: "Python", target: "Web Development" },
        { source: "JavaScript", target: "Web Development" },
        { source: "JavaScript", target: "React" },
        { source: "C++", target: "Machine Learning" },
        { source: "Java", target: "Web Development" },

        // Domain Connections
        { source: "Machine Learning", target: "Neural Networks" },
        { source: "Machine Learning", target: "Computer Vision" },
        { source: "Web Development", target: "React" },
        { source: "Web Development", target: "Next.js" },

        // Project Concept Map
        { source: "Neural Networks", target: "Vision Transformers" },
        { source: "Neural Networks", target: "Informers" },

        // FaViT Cluster
        { source: "Vision Transformers", target: "FaViT" },
        { source: "PyTorch", target: "FaViT" },
        { source: "Computer Vision", target: "FaViT" },
        { source: "FaViT", target: "ProbSparse" },

        // Informer Cluster
        { source: "Informers", target: "ProbSparse" },
        { source: "Informers", target: "Attention Mech" },
        { source: "Attention Mech", target: "ProbSparse" },
    ],
};
