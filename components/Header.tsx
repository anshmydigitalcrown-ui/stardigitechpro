"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/service", label: "Services" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  const isActive = (path: string) => pathname === path;

  return (
    <header className="bg-[#020617] shadow-lg sticky top-0 z-50 border-b border-slate-800">
      <nav className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary via-[#1d7ba8] to-primary rounded-full opacity-30 blur-sm group-hover:opacity-50 transition-opacity duration-300"></div>
              <Image
                src="/logo.webp.webp"
                alt="STAR DIGITECH PRO Logo"
                width={65}
                height={65}
                className="relative object-contain transition-transform duration-300 group-hover:scale-110 brightness-110"
              />
            </div>
            <span className="text-xl md:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-100 to-white hidden sm:block group-hover:from-primary group-hover:via-[#1d7ba8] group-hover:to-primary transition-all duration-300 tracking-wide">
              STAR DIGITECH PRO
            </span>
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`font-medium text-base transition-colors duration-300 ${
                    isActive(link.href)
                      ? "text-white border-b-2 border-white"
                      : "text-gray-400 hover:text-white"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* CTA Button */}
          <Link
            href="/contact"
            className="hidden md:block bg-white text-[#020617] font-semibold py-2.5 px-6 rounded-lg hover:bg-gray-100 transition-all duration-300 shadow-md"
          >
            Get Started
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden flex items-center justify-center w-11 h-11 text-white bg-white bg-opacity-10 rounded-lg hover:bg-opacity-20 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 border border-white border-opacity-20"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-slate-700">
            <ul className="flex flex-col space-y-3 pt-4">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={`block font-medium py-2 px-4 rounded-lg transition-all duration-300 ${
                      isActive(link.href)
                        ? "text-white bg-slate-800 border-l-4 border-primary"
                        : "text-gray-300 hover:text-white hover:bg-slate-800"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li className="pt-2">
                <Link
                  href="/contact"
                  onClick={() => setIsMenuOpen(false)}
                  className="block btn-primary text-center w-full"
                >
                  Get Started
                </Link>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
