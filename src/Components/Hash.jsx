import React, { useState } from "react";
import { Copy } from "lucide-react";

const Hash = () => {
  const [text, setText] = useState("");
  const [hash, setHash] = useState("");

  const generateHash = async () => {
    if (!text) return;

    const encoder = new TextEncoder();
    const data = encoder.encode(text);

    const hashBuffer = await crypto.subtle.digest("SHA-512", data);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const hashHex = hashArray
      .map((b) => b.toString(16).padStart(2, "0"))
      .join("");

    setHash(hashHex);
  };

  const copyHash = () => {
    navigator.clipboard.writeText(hash);
  };

  return (
    <div className="min-h-screen bg-[#0b1b2b] text-white p-8">
      <h1 className="text-2xl font-semibold mb-6">
        SHA-512 Hash Generator
      </h1>

      {/* Input */}
      <div className="mb-6">
        <label className="text-sm text-gray-300">
          Enter String
        </label>

        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Write string here..."
          rows={4}
          className="w-full mt-2 bg-[#1e2b3c] border border-gray-600 rounded-lg p-4 text-green-400 focus:outline-none"
        />
      </div>

      {/* Button */}
      <button
        onClick={generateHash}
        className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-lg mb-6"
      >
        Generate Hash
      </button>

      {/* Output */}
      <div>
        <label className="text-sm text-gray-300">
          SHA-512 Output
        </label>

        <div className="relative mt-2">
          <textarea
            value={hash}
            readOnly
            rows={6}
            className="w-full bg-[#1e2b3c] border border-gray-600 rounded-lg p-4 text-green-400 focus:outline-none"
          />

          {hash && (
            <button
              onClick={copyHash}
              className="absolute top-3 right-3 text-gray-300 hover:text-white"
            >
              <Copy size={18} />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Hash;