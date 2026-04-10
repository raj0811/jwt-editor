import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const navItem =
    "px-4 py-2 rounded-md transition duration-200 hover:text-blue-400";

  const activeNav =
    "px-4 py-2 rounded-md text-blue-400 border-b-2 border-blue-400";

  return (
    <nav className="bg-[#0b1b2b] text-white px-8 py-4 flex justify-between items-center shadow-md">
      
      {/* Logo */}
      <div className="text-xl font-semibold">
        CryptoPlayground
      </div>

      {/* Menu */}
      <ul className="flex space-x-6 text-sm items-center">
        
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? activeNav : navItem
            }
          >
            JWT Debugger
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/512-hash"
            className={({ isActive }) =>
              isActive ? activeNav : navItem
            }
          >
            512 Hash
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/base-64"
            className={({ isActive }) =>
              isActive ? activeNav : navItem
            }
          >
            Base64 Decoder
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? activeNav : navItem
            }
          >
            About
          </NavLink>
        </li>

        <li>
          <a
            href="https://github.com/raj0811/jwt-editor.git"
            target="_blank"
            rel="noopener noreferrer"
            className={navItem}
          >
            GitHub
          </a>
        </li>

        
      </ul>
    </nav>
  );
}