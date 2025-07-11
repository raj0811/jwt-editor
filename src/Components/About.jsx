import React from 'react';

export default function About() {
  return (
    <div className="bg-gray-900 text-white min-h-screen px-6 py-10 font-mono">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 border-b border-gray-700 pb-2">About This Project</h1>

        <p className="mb-4">
          <strong>JWT Editor</strong> is a browser-based tool for decoding, editing, and regenerating JSON Web Tokens (JWTs) in real-time. It mimics the core functionality of <code>jwt.io</code> — allowing users to paste a token, see its decoded header and payload, and optionally sign it using a secret key.
        </p>

        <p className="mb-4">
          The entire process happens in the browser — no tokens are sent over the network. You can also modify the payload or secret, and the tool will automatically regenerate a new, valid JWT using the HS256 algorithm.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Key Features</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Real-time JWT decoding and encoding</li>
          <li>Edit header, payload, and secret</li>
          <li>Uses <code>jose</code> library for secure, client-side signing</li>
          <li>Clean, responsive UI with Tailwind CSS</li>
          <li>No server or API usage — 100% local</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Tech Stack</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>React</li>
          <li>Tailwind CSS</li>
          <li><code>jose</code> (JWT signing/verification)</li>
        </ul>

        {/* <p className="mt-8 text-sm text-gray-400">
          Made with ❤️ by Raj
        </p> */}
      </div>
    </div>
  );
}
