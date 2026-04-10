import React from "react";

export default function About() {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-8 font-mono">
      <div className="max-w-4xl mx-auto">

        {/* Title */}
        <h1 className="text-3xl font-bold mb-6">
          About JWT Editor
        </h1>

        {/* Project Overview */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-md mb-6">
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">

            {/* Shield SVG */}
            <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2l7 4v6c0 5-3.5 9.7-7 10-3.5-.3-7-5-7-10V6l7-4z" />
            </svg>

            Project Overview
          </h2>

          <p className="text-gray-300 leading-relaxed">
            JWT Editor is a developer utility tool designed to simplify encoding,
            decoding, and encryption tasks used in modern web applications and
            payment gateway integrations.
          </p>

          <p className="text-gray-300 mt-4 leading-relaxed">
            This tool helps developers test JWT tokens, generate SHA-512 hashes,
            and encode/decode Base64 values quickly with a clean and simple UI.
            All operations run directly in the browser, ensuring speed and security.
          </p>
        </div>

        {/* Features */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-md mb-6">
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">

            {/* Code SVG */}
            <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5l-6 7 6 7 1.5-1.5L4.5 12l5-5L8 5zm8 0l-1.5 1.5 5 5-5 5L16 19l6-7-6-7z" />
            </svg>

            Features
          </h2>

          <ul className="space-y-2 text-gray-300">
            <li>• JWT Encode & Decode</li>
            <li>• SHA-512 Hash Generator</li>
            <li>• Base64 Text Encoder & Decoder</li>
            <li>• Base64 Image Encoder & Decoder</li>
            <li>• Copy & Reset Support</li>
            <li>• Developer Friendly UI</li>
            <li>• Fast Client-side Processing</li>
          </ul>
        </div>

        {/* Tech Stack */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-md mb-6">
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">

            {/* Lock SVG */}
            <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 1a5 5 0 00-5 5v3H6a2 2 0 00-2 2v9a2 2 0 002 2h12a2 2 0 002-2v-9a2 2 0 00-2-2h-1V6a5 5 0 00-5-5zm-3 8V6a3 3 0 016 0v3H9z" />
            </svg>

            Tech Stack
          </h2>

          <ul className="space-y-2 text-gray-300">
            <li>• React.js</li>
            <li>• Tailwind CSS</li>
            <li>• JavaScript</li>
            <li>• JWT & Base64 Utilities</li>
          </ul>
        </div>

        {/* Developer */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">
            Developer
          </h2>

          <p className="text-gray-300 mb-4">
            Built by Raj — Software Developer with 3+ years of experience in
            Node.js, NestJS, API integrations, and payment gateway systems.
          </p>

          {/* Links */}
          <div className="flex flex-wrap gap-4">

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/raj-barmaiya-40885221b/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded"
            >
              <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.851-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.352V9h3.414v1.561h.049c.476-.9 1.637-1.85 3.367-1.85 3.6 0 4.266 2.37 4.266 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.14.919-2.064 2.063-2.064 1.14 0 2.064.924 2.064 2.064 0 1.139-.925 2.065-2.064 2.065zM6.816 20.452H3.855V9h2.961v11.452z" />
              </svg>

              LinkedIn
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/raj0811"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded"
            >
              <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 .5C5.73.5.5 5.73.5 12a11.5 11.5 0 008 10.94c.58.1.79-.25.79-.56v-2.02c-3.26.7-3.95-1.57-3.95-1.57-.53-1.35-1.3-1.7-1.3-1.7-1.07-.74.08-.73.08-.73 1.18.08 1.8 1.22 1.8 1.22 1.05 1.8 2.75 1.28 3.42.98.11-.76.41-1.28.75-1.58-2.6-.3-5.34-1.3-5.34-5.8 0-1.28.46-2.33 1.22-3.15-.12-.3-.53-1.5.12-3.13 0 0 1-.32 3.3 1.2A11.5 11.5 0 0112 6.8c1.02.01 2.05.14 3.01.4 2.3-1.52 3.3-1.2 3.3-1.2.65 1.63.24 2.83.12 3.13.76.82 1.22 1.87 1.22 3.15 0 4.51-2.75 5.49-5.37 5.78.42.37.8 1.1.8 2.22v3.29c0 .31.21.66.8.55A11.5 11.5 0 0023.5 12C23.5 5.73 18.27.5 12 .5z" />
              </svg>

              GitHub
            </a>

            {/* Portfolio */}
            <a
              href="https://raj-b-portfolio.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-green-600 hover:bg-green-700 px-4 py-2 rounded"
            >
              <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm0 2a8 8 0 017.75 6H4.25A8 8 0 0112 4zm0 16a8 8 0 01-7.75-6h15.5A8 8 0 0112 20z" />
              </svg>

              Portfolio
            </a>

          </div>
        </div>

      </div>
    </div>
  );
}