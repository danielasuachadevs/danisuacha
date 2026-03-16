"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { scrollTo } from '@/lib/scrollTo';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('inicio');

  const navLinks = [
    { name: 'Inicio', href: '#inicio', id: 'inicio' },
    { name: 'Servicios', href: '#servicios', id: 'servicios' },
    { name: 'Sobre Mí', href: '#sobre-mi', id: 'sobre-mi' },
    { name: 'Testimonios', href: '#testimonios', id: 'testimonios' },
    { name: 'FAQ', href: '#faq', id: 'faq' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    scrollTo(id);
    setIsOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 150; // Offset for navbar height

      for (const link of navLinks) {
        const element = document.getElementById(link.id);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(link.id);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [navLinks]);

  return (
    <header className="fixed top-4 left-1/2 -translate-x-1/2 w-[calc(100%-2rem)] max-w-7xl z-50 rounded-[12px] bg-white border border-slate-200 shadow-lg px-6 py-4 lg:px-20">
      <div className="flex items-center justify-between mx-auto max-w-7xl">
        <Link href="/" className="flex items-center gap-3 text-slate-900 group">
          <div className="size-8 text-primary group-hover:scale-110 transition-transform">
            <svg xmlns="http://www.w3.org/2000/svg" height="32" viewBox="0 -960 960 960" width="32" fill="currentColor">
              <path d="M480-80q-137 0-240.5-85T121-391q0-94 53.5-171.5T316-670q6-20 12-40.5t16-40.5q18-45 52-77t84-32q50 0 84 32t52 77q10 20 16 40.5t12 40.5q88 30 141.5 107.5T839-391q0 141-103.5 226T480-80Zm0-60q111 0 195.5-67.5T779-391q0-74-41-135t-109-88q-7 30-16 57.5t-21 54.5q-12 27-28.5 50.5T527-251q-10 12-22.5 18t-24.5 6q-12 0-24.5-6T433-251q-20-24-36.5-47.5T368-349q-12-27-21-54.5T331-461q-68 27-109 88t-41 135q0 116 84.5 183.5T480-140Zm0-171q18-24 33-47.5t27-48.5q12-25 20-51t13-52q-23-9-46.5-14.5T480-531q-23 0-46.5 5.5T387-511q5 26 13 52t20 51q12 25 27 48.5t33 47.5Zm0-289q18 0 35 4.5t33 12.5q-6-26-14-52.5T532-689q-12-32-34.5-51.5T480-760q-25 0-47.5 19.5T398-689q-10 27-18 53.5t-14 52.5q16-8 33-12.5t35-4.5Z"/>
            </svg>
          </div>
          <h1 className="text-lg font-bold tracking-tight">Biodeprogramación Terapéutica</h1>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href} 
              onClick={(e) => handleLinkClick(e, link.id)}
              className={`relative text-sm font-medium transition-all duration-300 py-1 group hover:scale-105 ${
                activeSection === link.id ? 'text-primary' : 'text-slate-600 hover:text-primary'
              }`}
            >
              {link.name}
              <span className={`absolute bottom-0 left-0 h-0.5 bg-primary transition-all duration-300 ${
                activeSection === link.id ? 'w-full' : 'w-0 group-hover:w-full'
              }`}></span>
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4 lg:ml-8">
          <Link 
            href="#agendar" 
            onClick={(e) => handleLinkClick(e, 'agendar')}
            className="hidden sm:flex min-h-[2.5rem] h-auto py-2 px-6 items-center justify-center text-center rounded-[12px] bg-primary text-white text-sm font-bold shadow-lg shadow-primary/20 hover:bg-primary/90 hover:scale-[1.05] active:scale-95 transition-all"
          >
            Agendar Sesión
          </Link>
          <button 
            className="lg:hidden p-2 text-slate-600 dark:text-slate-300 hover:scale-110 transition-transform"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24" fill="currentColor">
              <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white border-b border-primary/10 py-4 px-6 flex flex-col gap-4 animate-in slide-in-from-top duration-300">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href} 
              onClick={(e) => handleLinkClick(e, link.id)}
              className={`text-sm font-medium py-2 transition-colors ${
                activeSection === link.id ? 'text-primary font-bold' : 'text-slate-600 hover:text-primary'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link 
            href="#agendar" 
            onClick={(e) => handleLinkClick(e, 'agendar')}
            className="flex h-12 px-6 items-center justify-center rounded-full bg-primary text-white text-sm font-bold shadow-lg shadow-primary/20"
          >
            Agendar Sesión
          </Link>
        </div>
      )}
    </header>
  );
}
