// app/components/Header.js
"use client";

import { useState } from "react";
import { siteInfo } from "@/constants/siteInfo";
import Icon from "./Icon";
import Image from "next/image";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-sm">
      <div className="container mx-auto flex items-center justify-between px-4 py-4">
        <div className="flex items-center">
          {/* Replace with actual church logo */}
          <Image
            src={siteInfo.logoUrl}
            alt="Church Logo"
            width={32}
            height={32}
          />
          <div className="font-display text-primary text-sm">
            Wesley Methodist Church Vasco
          </div>
        </div>
        <nav className="hidden space-x-8 md:flex">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="hover:text-primary font-medium text-gray-700 transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <button
          className="flex h-10 w-10 items-center justify-center text-gray-700 md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <Icon name="menu-line" className="ri-lg" />
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="w-full border-t bg-white md:hidden">
          <div className="container mx-auto flex flex-col space-y-3 px-4 py-2">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="hover:text-primary py-2 font-medium text-gray-700 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
