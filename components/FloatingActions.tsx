"use client";

import { useState, useEffect } from 'react';

export default function FloatingActions() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className="fixed bottom-6 right-6 z-[100] flex flex-col gap-4 items-end">
      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="group flex size-12 items-center justify-center rounded-full bg-[#E65F4A] hover:bg-[#D44E3B] text-white shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 animate-in fade-in zoom-in slide-in-from-bottom-4 border-2 border-white/20"
          aria-label="Volver arriba"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24"
            viewBox="0 -960 960 960"
            width="24"
            fill="currentColor"
            className="group-hover:scale-110 transition-transform"
          >
            <path d="M440-160v-487L216-423l-56-57 320-320 320 320-56 57-224-224v487h-80Z" />
          </svg>
        </button>
      )}

      {/* WhatsApp Button */}
      <a
        href="https://wa.me/524777657492"
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex size-14 items-center justify-center rounded-full bg-white text-[#25D366] shadow-xl hover:shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300 cursor-pointer border-2 border-[#25D366]/10"
        aria-label="Contactar por WhatsApp"
      >
        <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-10 animate-ping group-hover:animate-none"></span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="relative z-10 scale-110"
        >
          <path d="M12.012 2c-5.508 0-9.987 4.479-9.987 9.988 0 1.757.455 3.405 1.25 4.846L2 22l5.304-1.391c1.401.764 3.001 1.2 4.708 1.2 5.508 0 9.988-4.479 9.988-9.988 0-5.509-4.48-9.989-9.988-9.989zm5.333 14.122c-.22.618-1.077 1.139-1.486 1.192-.408.053-.805.086-2.583-.623-2.144-.852-3.486-3.044-3.593-3.189-.107-.144-.863-1.144-.863-2.186 0-1.042.545-1.554.738-1.766.191-.213.418-.266.557-.266.139 0 .278.001.397.006.126.006.297-.048.466.368.17.417.58 1.413.63 1.516.05.103.084.223.013.36-.071.136-.107.22-.213.344-.107.125-.224.278-.32.374-.108.106-.221.222-.095.438.127.215.561.925 1.205 1.5.83.74 1.531.97 1.745 1.077.214.107.34.09.467-.056.126-.146.541-.63.686-.844.145-.215.291-.182.49-.108.199.073 1.264.596 1.482.705.217.11.363.163.416.257.054.094.054.544-.166 1.162z" />
        </svg>
      </a>
    </div>
  );
}
