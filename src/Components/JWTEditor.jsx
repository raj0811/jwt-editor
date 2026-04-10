import React, { useState, useEffect } from "react";
import { SignJWT } from "jose";
import { Copy } from "lucide-react";

export default function JWTEditor() {
  const [token, setToken] = useState("");
  const [header, setHeader] = useState(
    JSON.stringify({ alg: "HS256", typ: "JWT" }, null, 2)
  );
  const [payload, setPayload] = useState(
    JSON.stringify(
      {
        name: "Raj",
        email: "rpbarmaiya@gmail.com",
        linkedin: "https://www.linkedin.com/in/raj-barmaiya-40885221b/",
        github: "https://github.com/raj0811",
      },
      null,
      2
    )
  );
  const [secret, setSecret] = useState("mysecret");
  const [signature, setSignature] = useState("");

  useEffect(() => {
    try {
      const parts = token.split(".");
      if (parts.length === 3) {
        const decodedHeader = JSON.stringify(
          JSON.parse(atob(parts[0])),
          null,
          2
        );
        const decodedPayload = JSON.stringify(
          JSON.parse(atob(parts[1])),
          null,
          2
        );
        setHeader(decodedHeader);
        setPayload(decodedPayload);
        setSignature(parts[2]);
      }
    } catch (err) {
      console.error("Invalid token:", err);
    }
  }, [token]);

  useEffect(() => {
    async function generateToken() {
      try {
        const headerObj = JSON.parse(header);
        const payloadObj = JSON.parse(payload);
        const secretKey = new TextEncoder().encode(secret || "secret");

        const jwt = await new SignJWT(payloadObj)
          .setProtectedHeader(headerObj)
          .sign(secretKey);

        setToken(jwt);
        setSignature(jwt.split(".")[2]);
      } catch (err) {
        console.error("Signing failed:", err);
      }
    }

    generateToken();
  }, [header, payload, secret]);

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <div className="w-full min-h-screen bg-gray-900 text-white p-6 font-mono">
      <h2 className="text-2xl font-bold mb-6">JWT Debugger</h2>

      {/* JWT Token */}
      <div className="mb-6">
        <label className="block text-sm mb-2">JWT Token:</label>

        <div className="relative">
          <textarea
            value={token}
            onChange={(e) => setToken(e.target.value)}
            className="w-full bg-gray-800 border border-gray-700 rounded  text-green-300 text-sm p-10"
            rows={10}
          />

          <button
            onClick={() => copyToClipboard(token)}
            className="absolute top-2 right-2 text-gray-400 hover:text-white"
          >
            <Copy size={18} />
          </button>
        </div>
      </div>

      {/* Header & Payload */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
          <label className="block text-sm mb-2">Decoded Header</label>
          <textarea
            value={header}
            onChange={(e) => setHeader(e.target.value)}
            className="w-full bg-gray-800 border border-gray-700 rounded p-3 text-sm"
            rows={8}
          />
        </div>

        <div>
          <label className="block text-sm mb-2">Decoded Payload</label>

          <div className="relative">
            <textarea
              value={payload}
              onChange={(e) => setPayload(e.target.value)}
              className="w-full bg-gray-800 border border-gray-700 rounded p-3 text-sm"
              rows={8}
            />

            <button
              onClick={() => copyToClipboard(payload)}
              className="absolute top-2 right-2 text-gray-400 hover:text-white"
            >
              <Copy size={18} />
            </button>
          </div>
        </div>
      </div>

      {/* Secret */}
      <div className="mb-6">
        <label className="block text-sm mb-2">
          JWT Secret (used to sign)
        </label>
        <input
          type="text"
          value={secret}
          onChange={(e) => setSecret(e.target.value)}
          className="w-full bg-gray-800 border border-gray-700 rounded p-2 text-sm"
        />
      </div>
    </div>
  );
}