"use client";
import Image from 'next/image';
import Link from 'next/link';
import { scrollTo } from '@/lib/scrollTo';
import { useLanguage } from '@/context/LanguageContext';

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section className="relative w-full pt-12 pb-16 hero:pb-24 px-4 lg:px-12 xl:px-20 overflow-hidden" id="inicio">
      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="flex flex-col hero:flex-row items-center justify-between gap-12 hero:gap-20">
          <div className="flex-1 flex flex-col gap-6 text-center hero:text-left animate-fade-in-up relative px-4 sm:px-0" style={{ animationDelay: '300ms', animationFillMode: 'forwards' }}>
            <div className="absolute -top-10 -left-10 w-64 h-64 md:w-[400px] md:h-[400px] z-0 opacity-20 pointer-events-none">
              <Image 
                src="/multimedia/isotipo.png"
                alt="Isotipo Daniela Suacha - Biodesprogramación"
                fill
                sizes="(max-width: 768px) 256px, 400px"
                className="object-contain object-left-top opacity-100"
                priority
              />
            </div>

            <div className="relative z-10 space-y-6 flex flex-col hero:items-start items-center">
              <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold tracking-widest uppercase w-fit mx-auto hero:xl:mx-0 font-sans">
                {t('badge', 'hero')}
              </span>
              <h1 className="font-serif text-3xl sm:text-4xl lg:text-6xl font-bold leading-[1.1] text-gray-deep break-words w-full max-w-[90vw] sm:max-w-none">
                <span className="text-primary">{t('heading', 'hero')}</span>
              </h1>
              <p className="text-lg text-gray-deep max-w-xl mx-auto hero:mx-0 leading-relaxed font-sans font-light">
               {t('description', 'hero')} <span className="font-bold text-primary italic">{t('emphasis', 'hero')}</span>
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center hero:justify-start pt-4 relative z-10 w-full max-w-[320px] sm:max-w-none mx-auto hero:mx-0">
              <Link 
                href="#agendar" 
                onClick={(e) => {
                  e.preventDefault();
                  scrollTo('agendar');
                }}
                className="px-4 py-3 sm:px-[1.5rem] sm:py-[1rem] flex items-center justify-center text-center rounded-[12px] bg-primary text-white text-sm sm:text-base font-bold shadow-lg shadow-primary/20 hover:bg-primary/90 hover:scale-[1.05] active:scale-95 transition-all font-sans"
              >
                {t('cta1', 'hero')}
              </Link>
              <Link 
                href="https://wa.me/524777657492" 
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-3 sm:px-[1.5rem] sm:py-[1rem] flex items-center justify-center text-center rounded-[12px] bg-white dark:bg-surface-dark border border-green-light dark:border-slate-700 text-gray-deep dark:text-slate-200 text-sm sm:text-base font-medium hover:bg-primary hover:text-white hover:border-primary hover:scale-[1.05] active:scale-95 transition-all font-sans"
              >
                {t('cta2', 'hero')}
              </Link>
            </div>
          </div>

          <div className="w-full max-w-lg hero:w-[500px] flex-shrink-0 mx-auto hero:mx-0 animate-fade-in-up" style={{ animationDelay: '300ms', animationFillMode: 'forwards' }}>
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
              <Image 
                src="/multimedia/hero_freedom_green.png"
                alt="Paz y bienestar emocional"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-top sm:object-[46%_center] transform hover:scale-105 transition-transform duration-700 ease-in-out"
              />
              {/* Overlay: Upper Left Text */}
              <div className="absolute top-6 left-6 lg:top-8 lg:left-8 animate-fade-in" style={{ animationDelay: '600ms', animationFillMode: 'forwards' }}>
                <p className="text-white font-serif text-base lg:text-xl tracking-[0.3em] uppercase leading-tight drop-shadow-md">
                  {t('overlay', 'hero')}
                </p>
                <div className="h-[1px] w-full bg-primary/80 mt-2 shadow-lg"></div>
              </div>

              {/* Overlay: Bottom Center Logo */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-56 h-20 lg:w-96 lg:h-32 animate-fade-in" style={{ animationDelay: '800ms', animationFillMode: 'forwards' }}>
                <Image 
                  src="/multimedia/logo.png"
                  alt="Dani Suacha"
                  fill
                  className="object-contain drop-shadow-xl brightness-0 invert"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
