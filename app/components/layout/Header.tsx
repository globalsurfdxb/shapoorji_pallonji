'use client';

import React, { useEffect, useState } from "react";

const sections = [
  { id: "section1", label: "Home" },
  { id: "section2", label: "About" },
  { id: "section3", label: "Contact" },
];

const Header: React.FC = () => {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Trigger on mount

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow z-50">
      <nav className="flex justify-center space-x-8 p-4">
        {sections.map((section) => (
          <a
            key={section.id}
            href={`#${section.id}`}
            className={`font-medium transition-colors ${
              activeSection === section.id ? "text-blue-500" : "hover:text-blue-500"
            }`}
          >
            {section.label}
          </a>
        ))}
      </nav>
    </header>
  );
};

export default Header;
