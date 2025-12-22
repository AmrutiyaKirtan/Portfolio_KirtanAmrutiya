export interface InferenceResult {
    label: string;
    confidence: number;
    inferenceTime: number; // in milliseconds
    device: "CPU" | "GPU" | "WASM";
}

const MOCK_LABELS = [
    "Persian Cat",
    "Golden Retriever",
    "Siamese Cat",
    "Border Collie",
    "Tabby Cat",
];

export async function runInference(image: File): Promise<InferenceResult> {
    // Simulate processing delay (random between 50ms and 200ms for "Edge" speed)
    const delay = Math.floor(Math.random() * 150) + 50;

    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                label: MOCK_LABELS[Math.floor(Math.random() * MOCK_LABELS.length)],
                confidence: 0.85 + Math.random() * 0.14, // Random confidence between 85% and 99%
                inferenceTime: delay,
                device: "WASM", // Simulating WebAssembly backend
            });
        }, delay);
    });
}
