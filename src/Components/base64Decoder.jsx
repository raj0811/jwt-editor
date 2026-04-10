import React, { useState } from "react";

export default function Base64Decoder() {
    const [mode, setMode] = useState("text");
    const [input, setInput] = useState("");
    const [output, setOutput] = useState("");
    const [imagePreview, setImagePreview] = useState(null);

    // Encode Text
    const encodeBase64 = () => {
        try {
            const encoded = btoa(input);
            setOutput(encoded);
        } catch {
            setOutput("Invalid Input");
        }
    };

    // Decode Text
    const decodeBase64 = () => {
        try {
            const decoded = atob(input);
            setOutput(decoded);
        } catch {
            setOutput("Invalid Base64");
        }
    };

    // Copy Function
    const copyText = (text) => {
        navigator.clipboard.writeText(text);
    };

    // Reset
    const resetAll = () => {
        setInput("");
        setOutput("");
        setImagePreview(null);
    };

    // Upload Image → Base64
    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        if (!file) return;

        const reader = new FileReader();

        reader.onloadend = () => {
            setInput(reader.result);
            setImagePreview(reader.result);
        };

        reader.readAsDataURL(file);
    };

    // Base64 → Image
    const generateImage = () => {
        let base64 = input.trim();

        if (!base64) return;

        // if already contains prefix
        if (base64.startsWith("data:image")) {
            setImagePreview(base64);
            return;
        }

        try {
            atob(base64);
            setImagePreview(`data:image/png;base64,${base64}`);
        } catch {
            alert("Invalid Base64 Image");
        }
    };

    return (
        <div className="min-h-screen bg-gray-900 text-white p-6 font-mono">

            <h2 className="text-2xl font-bold mb-6">
                Base64 Encoder & Decoder
            </h2>

            {/* Toggle */}
            <div className="flex gap-4 mb-6">
                <button
                    onClick={() => setMode("text")}
                    className={`px-4 py-2 rounded ${mode === "text"
                        ? "bg-blue-600"
                        : "bg-gray-700 hover:bg-gray-600"
                        }`}
                >
                    Text
                </button>

                <button
                    onClick={() => setMode("image")}
                    className={`px-4 py-2 rounded ${mode === "image"
                        ? "bg-blue-600"
                        : "bg-gray-700 hover:bg-gray-600"
                        }`}
                >
                    Image
                </button>
            </div>

            {/* TEXT MODE */}
            {mode === "text" && (
                <>
                    {/* Input */}
                    <div className="mb-6">
                        <label className="block mb-2">
                            Input Text / Base64
                        </label>

                        <div className="relative">
                            <textarea
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                rows={8}
                                className="w-full bg-gray-800 border border-gray-700 rounded p-3 text-green-300 custom-scrollbar"
                                placeholder="Enter text or base64..."
                            />

                            {input && (
                                <button
                                    onClick={() => copyText(input)}
                                    className="absolute top-2 right-2 text-gray-400 hover:text-white"
                                >
                                    Copy
                                </button>
                            )}
                        </div>
                    </div>

                    {/* Buttons */}
                    <div className="flex gap-4 mb-6">
                        <button
                            onClick={encodeBase64}
                            className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded"
                        >
                            Encode
                        </button>

                        <button
                            onClick={decodeBase64}
                            className="bg-green-600 hover:bg-green-700 px-6 py-2 rounded"
                        >
                            Decode
                        </button>

                        <button
                            onClick={resetAll}
                            className="bg-red-600 hover:bg-red-700 px-6 py-2 rounded"
                        >
                            Reset
                        </button>
                    </div>

                    {/* Output */}
                    <div>
                        <label className="block mb-2">
                            Output
                        </label>

                        <div className="relative">
                            <textarea
                                value={output}
                                readOnly
                                rows={8}
                                className="w-full bg-gray-800 border border-gray-700 rounded p-3 text-yellow-300 custom-scrollbar"
                            />

                            {output && (
                                <button
                                    onClick={() => copyText(output)}
                                    className="absolute top-2 right-2 text-gray-400 hover:text-white"
                                >
                                    Copy
                                </button>
                            )}
                        </div>
                    </div>
                </>
            )}

            {/* IMAGE MODE */}
            {mode === "image" && (
                <>
                    {/* Upload */}
                    <div className="mb-6">
                        <label className="block mb-2">
                            Upload Image
                        </label>

                        <input
                            type="file"
                            accept="image/*"
                            onChange={handleImageUpload}
                            className="bg-gray-800 p-2 rounded"
                        />
                    </div>

                    {/* Base64 Input */}
                    <div className="mb-6">
                        <label className="block mb-2">
                            Base64 String
                        </label>

                        <div className="relative">
                            <textarea
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                rows={10}
                                className="w-full bg-gray-800 border border-gray-700 rounded text-green-300 p-3 custom-scrollbar"
                                placeholder="Paste base64 or data:image/png;base64..."
                            />

                            {input && (
                                <button
                                    onClick={() => copyText(input)}
                                    className="absolute top-2 right-2 text-gray-400 hover:text-white"
                                >
                                    Copy
                                </button>
                            )}
                        </div>
                    </div>

                    {/* Buttons */}
                    <div className="flex gap-4 mb-6">
                        <button
                            onClick={generateImage}
                            className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded"
                        >
                            Generate Image
                        </button>

                        <button
                            onClick={resetAll}
                            className="bg-red-600 hover:bg-red-700 px-6 py-2 rounded"
                        >
                            Reset
                        </button>
                    </div>

                    {/* Image Preview */}
                    {imagePreview && (
                        <div>
                            <label className="block mb-2">
                                Image Preview
                            </label>

                            <img
                                src={imagePreview}
                                alt="preview"
                                className="max-w-md border border-gray-700 rounded"
                            />
                        </div>
                    )}
                </>
            )}
        </div>
    );
}