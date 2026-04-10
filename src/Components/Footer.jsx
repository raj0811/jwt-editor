import React from "react";

export default function Footer() {
    return (
        <footer className="bg-gray-800 text-gray-300 mt-10 border-t border-gray-700">
            <div className="max-w-6xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-4">

                {/* Left */}
                <div className="text-sm">
                    © {new Date().getFullYear()} CryptoPlayground. Built with ❤️ by{" "}
                    <span className="text-white font-semibold">Raj</span>
                </div>

                {/* Links */}
                <div className="flex gap-6 text-sm">

                    {/* LinkedIn */}
                    <a
                        href="https://www.linkedin.com/in/raj-barmaiya-40885221b/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-white transition"
                    >
                        LinkedIn
                    </a>

                    {/* GitHub */}
                    <a
                        href="https://github.com/raj0811"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-white transition"
                    >
                        GitHub
                    </a>

                    {/* Portfolio */}
                    <a
                        href="https://raj-b-portfolio.netlify.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-white transition"
                    >
                        Portfolio
                    </a>

                </div>
            </div>

            {/* Bottom */}
            <div className="text-center text-xs text-gray-500 pb-4">
                Developer Toolkit for JWT, Base64 & SHA-512 Encryption
            </div>
        </footer>
    );
}