"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const navLinks = [
  { href: "/", label: "Αρχική" },
  { href: "/about", label: "Σχετικά" },
  { href: "/products", label: "Προϊόντα" },
  { href: "/contact", label: "Επικοινωνία" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/98 sm:backdrop-blur-md shadow-sm border-b border-[#1a3d1a]/10">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-[72px] lg:h-20">
          <Link
            href="/"
            className="flex items-center shrink-0 min-h-[44px] -ml-2 pl-2"
            aria-label="Boustras Farm - Αρχική"
          >
            <Image
              src="/logos/Boustras-Farm-Primary-Logo.png"
              alt="Boustras Farm"
              width={180}
              height={48}
              className="h-10 sm:h-12 w-auto object-contain"
              priority
            />
          </Link>

          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[#1a3d1a] hover:text-[#8bc34a] font-medium transition-smooth py-2 px-1 min-h-[44px] flex items-center"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <button
            type="button"
            className="md:hidden p-3 -mr-2 min-h-[44px] min-w-[44px] flex items-center justify-center rounded-lg hover:bg-[#1a3d1a]/5 active:bg-[#1a3d1a]/10 transition-smooth"
            onClick={() => setOpen(!open)}
            aria-label={open ? "Κλείσιμο μενού" : "Άνοιγμα μενού"}
            aria-expanded={open}
          >
            <svg className="w-6 h-6 text-[#1a3d1a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {open ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {open && (
          <div className="md:hidden py-4 border-t border-[#1a3d1a]/10">
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="text-[#1a3d1a] hover:text-[#8bc34a] hover:bg-[#1a3d1a]/5 font-medium py-4 px-4 rounded-lg transition-smooth min-h-[48px] flex items-center"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
