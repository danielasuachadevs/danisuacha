"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { scrollTo } from '@/lib/scrollTo';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('inicio');

  const navLinks = [
    { name: 'Inicio', href: '#inicio', id: 'inicio' },
    { name: 'Servicios', href: '#servicios', id: 'servicios' },
    { name: 'Dani Suachá', href: '#sobre-mi', id: 'sobre-mi' },
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
    <header className="fixed top-4 left-1/2 -translate-x-1/2 w-[calc(100%-2rem)] max-w-7xl z-50 rounded-[12px] bg-white/90 backdrop-blur-md border border-green-light shadow-lg px-6 py-4 lg:px-20">
      <div className="flex items-center justify-between mx-auto max-w-7xl">
        <Link href="/" className="relative h-12 w-48 group">
          <Image 
            src="/multimedia/logo.png" 
            alt="Logo Daniela Suacha" 
            fill 
            className="object-cover group-hover:scale-110 transition-transform duration-500"
            priority
          />
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
            className="hidden lg:flex min-h-[2.5rem] h-auto py-2 px-6 items-center justify-center text-center rounded-[12px] bg-primary text-white text-sm font-bold shadow-lg shadow-primary/20 hover:bg-primary/90 hover:scale-[1.05] active:scale-95 transition-all"
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
        <div className="lg:hidden absolute top-[calc(100%+0.5rem)] left-0 w-full bg-white border border-green-light rounded-[12px] py-4 px-6 flex flex-col gap-4 animate-in slide-in-from-top-2 duration-300 shadow-xl">
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
