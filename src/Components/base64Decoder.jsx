import React, { useState } from "react";
import { Copy, ImageIcon, FileText } from "lucide-react";

export default function Base64Decoder() {
    const [mode, setMode] = useState("text");
    const [input, setInput] = useState("");
    const [output, setOutput] = useState("");
    const [imagePreview, setImagePreview] = useState(null);

    const encodeBase64 = () => {
        try {
            const encoded = btoa(input);
            setOutput(encoded);
        } catch {
            setOutput("Invalid input");
        }
    };

    const decodeBase64 = () => {
        try {
            const decoded = atob(input);
            setOutput(decoded);
        } catch {
            setOutput("Invalid Base64");
        }
    };

    const copyText = (text) => {
        navigator.clipboard.writeText(text);
    };

    // Image to Base64
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

    // Base64 to Image
    const generateImage = () => {
        setImagePreview(input);
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
                    className={`px-4 py-2 rounded flex items-center gap-2 ${mode === "text"
                        ? "bg-blue-600"
                        : "bg-gray-700"
                        }`}
                >
                    <FileText size={16} />
                    Text
                </button>

                <button
                    onClick={() => setMode("image")}
                    className={`px-4 py-2 rounded flex items-center gap-2 ${mode === "image"
                        ? "bg-blue-600"
                        : "bg-gray-700"
                        }`}
                >
                    <ImageIcon size={16} />
                    Image
                </button>
            </div>

            {/* TEXT MODE */}
            {mode === "text" && (
                <>
                    {/* Input */}
                    <div className="mb-6">
                        <label className="block text-sm mb-2">
                            Input Text / Base64
                        </label>

                        <div className="relative">
                            <textarea
                                value={input}
                                onChange={(e) =>
                                    setInput(e.target.value)
                                }
                                rows={8}
                                className="w-full bg-gray-800 border border-gray-700 rounded p-3 text-green-300"
                            />

                            {input && (
                                <button
                                    onClick={() =>
                                        copyText(input)
                                    }
                                    className="absolute top-2 right-2 text-gray-400 hover:text-white"
                                >
                                    <Copy size={18} />
                                </button>
                            )}
                        </div>
                    </div>

                    {/* Buttons */}
                    <div className="flex gap-4 mb-6">
                        <button
                            onClick={encodeBase64}
                            className="bg-blue-600 px-6 py-2 rounded"
                        >
                            Encode
                        </button>

                        <button
                            onClick={decodeBase64}
                            className="bg-green-600 px-6 py-2 rounded"
                        >
                            Decode
                        </button>
                    </div>

                    {/* Output */}
                    <div>
                        <label className="block text-sm mb-2">
                            Output
                        </label>

                        <div className="relative">
                            <textarea
                                value={output}
                                readOnly
                                rows={8}
                                className="w-full bg-gray-800 border border-gray-700 rounded p-3 text-yellow-300"
                            />

                            {output && (
                                <button
                                    onClick={() =>
                                        copyText(output)
                                    }
                                    className="absolute top-2 right-2 text-gray-400 hover:text-white"
                                >
                                    <Copy size={18} />
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

                    {/* Base64 */}
                    <div className="mb-6">
                        <label className="block mb-2">
                            Base64 String
                        </label>

                        <div className="relative">
                            <textarea
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                rows={10}
                                className="w-full bg-gray-800 border border-gray-700 rounded text-green-300 custom-scrollbar p-10"
                            />

                            {input && (
                                <button
                                    onClick={() =>
                                        copyText(input)
                                    }
                                    className="absolute top-2 right-2"
                                >
                                    <Copy size={18} />
                                </button>
                            )}
                        </div>
                    </div>

                    <button
                        onClick={generateImage}
                        className="bg-blue-600 px-6 py-2 rounded mb-6"
                    >
                        Generate Image
                    </button>

                    {/* Preview */}
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