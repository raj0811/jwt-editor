import React from 'react';

export default function Navbar() {
  return (
    <nav className="bg-gray-800 text-white px-6 py-3 flex justify-between items-center shadow-md">
      <div className="text-xl font-semibold">JWT Editor</div>
      <ul className="flex space-x-6 text-sm">
        <li>
          <a href="/" className="hover:text-blue-400 transition duration-200">Home</a>
        </li>
        <li>
          <a href="/profile" className="hover:text-blue-400 transition duration-200">Profile</a>
        </li>
        <li>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition duration-200">
            GitHub
          </a>
        </li>
        <li>
          <a href="/about" className="hover:text-blue-400 transition duration-200">About</a>
        </li>
      </ul>
    </nav>
  );
}
