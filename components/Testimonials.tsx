"use client";

import Image from 'next/image';
import { useState, useEffect } from 'react';
import { useLanguage } from '@/context/LanguageContext';

interface Testimonial {
  text: string;
  author: string;
  location: string;
  img: string;
}

export default function Testimonials() {
  const { t } = useLanguage();
  const [selectedTestimonial, setSelectedTestimonial] = useState<Testimonial | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      setIsTablet(window.innerWidth >= 768 && window.innerWidth < 1024);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const dataFromContext = t('data', 'testimonials') as any[];
  
  // Mapping images which are not in the dictionary to keep it clean
  const testimonialImages: Record<string, string> = {
    "Olga Celaya": "/multimedia/olga.jpeg",
    "Ruth Torres": "/multimedia/ruth.jpeg",
    "Annel Ramos": "/multimedia/annel.jpeg",
    "Jenny Lango": "/multimedia/jenny.jpeg",
    "Pancho Alvarado": "",
    "Ely Ortiz": "/multimedia/ely.jpeg",
    "Oscar López": "/multimedia/oscar.jpeg",
    "Ana Paulina Manrique": "/multimedia/ana.jpeg"
  };

  const testimonials: Testimonial[] = dataFromContext.map(item => ({
    ...item,
    img: testimonialImages[item.author] || ""
  }));

  const getInitials = (name: string) => {
    return name.split(' ').map(n => n[0]).join('').toUpperCase();
  };

  const extendedTestimonials = [...testimonials, ...testimonials, ...testimonials];
  const [currentIndex, setCurrentIndex] = useState(testimonials.length);
  const [isTransitioning, setIsTransitioning] = useState(true);

  const visibleItems = isMobile ? 1 : (isTablet ? 2 : 3);

  const nextSlide = () => {
    if (currentIndex >= testimonials.length * 2) {
      setIsTransitioning(false);
      setCurrentIndex(testimonials.length);
      setTimeout(() => {
        setIsTransitioning(true);
        setCurrentIndex(testimonials.length + 1);
      }, 20);
    } else {
      setIsTransitioning(true);
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex <= testimonials.length - visibleItems) {
      setIsTransitioning(false);
      setCurrentIndex(testimonials.length + testimonials.length - visibleItems);
      setTimeout(() => {
        setIsTransitioning(true);
        setCurrentIndex(testimonials.length + testimonials.length - visibleItems - 1);
      }, 20);
    } else {
      setIsTransitioning(true);
      setCurrentIndex((prev) => prev - 1);
    }
  };

  useEffect(() => {
    if (selectedTestimonial) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedTestimonial]);

  return (
    <section className="py-20 px-4 lg:px-20 bg-surface-light overflow-hidden scroll-mt-32" id="testimonios">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-center font-serif text-2xl sm:text-3xl text-gray-deep mb-12 break-words">{t('title', 'testimonials')}</h2>
        
        <div className="relative group px-12 sm:px-16">
          <div className="overflow-hidden">
            <div 
              className={`flex transition-transform ${isTransitioning ? 'duration-500 ease-out' : 'duration-0'}`}
              style={{ transform: `translateX(-${currentIndex * (100 / visibleItems)}%)` }}
            >
              {extendedTestimonials.map((t_item, i) => (
                <div 
                  key={i} 
                  className="w-full md:w-1/2 lg:w-1/3 flex-shrink-0 px-3"
                >
                  <div className="bg-white p-6 sm:p-8 rounded-xl shadow-sm border border-slate-100 relative group/card hover:shadow-md transition-shadow flex flex-col min-h-[380px] h-full">
                    <svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 -960 960 960" width="48" fill="currentColor" className="text-primary/10 absolute top-4 right-4 group-hover/card:text-primary/20 transition-colors">
                      <path d="M220-320q25 0 42.5-17.5T280-380q0-25-17.5-42.5T220-440q-11 0-21 4t-19 12q14-35 46.5-55.5T300-500v-80q-63 0-106.5 43.5T150-430q0 46 32 78t78 32Zm400 0q25 0 42.5-17.5T680-380q0-25-17.5-42.5T620-440q-11 0-21 4t-19 12q14-35 46.5-55.5T700-500v-80q-63 0-106.5 43.5T550-430q0 46 32 78t78 32Z"/>
                    </svg>
                    <div className="flex items-center gap-1 mb-4 text-yellow-500">
                      {[1, 2, 3, 4, 5].map((s) => (
                        <svg key={s} xmlns="http://www.w3.org/2000/svg" height="16" viewBox="0 -960 960 960" width="16" fill="currentColor">
                          <path d="m233-120 65-281L80-590l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z"/>
                        </svg>
                      ))}
                    </div>
                    <div className="overflow-hidden mb-4 min-h-[150px]">
                      <p className="text-black italic leading-relaxed font-sans line-clamp-5 text-sm md:text-base" style={{ display: '-webkit-box', WebkitBoxOrient: 'vertical', WebkitLineClamp: 5 }}>
                        {`"${t_item.text}"`}
                      </p>
                    </div>
                    
                    <button 
                      onClick={() => setSelectedTestimonial(t_item)}
                      className="text-primary font-bold text-sm mb-8 hover:underline text-left w-fit cursor-pointer decoration-2 underline-offset-4"
                    >
                      {t('viewBtn', 'testimonials')}
                    </button>

                    <div className="flex items-center gap-3 mt-auto">
                      <div className="size-10 rounded-full bg-primary/10 flex items-center justify-center overflow-hidden relative border border-primary/20">
                        {t_item.img ? (
                          <Image 
                            src={t_item.img}
                            alt={t_item.author}
                            fill
                            className="object-cover"
                          />
                        ) : (
                          <span className="text-primary font-bold text-xs">{getInitials(t_item.author)}</span>
                        )}
                      </div>
                      <div>
                        <p className="text-sm font-bold text-gray-deep font-sans">{t_item.author}</p>
                        <p className="text-xs text-black font-sans">{t_item.location}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button 
            onClick={prevSlide}
            className="absolute left-0 md:left-4 top-1/2 -translate-y-1/2 size-10 md:size-12 rounded-full bg-white shadow-lg flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all z-20 border border-slate-100"
            aria-label="Anterior"
          >
            <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24" fill="currentColor">
              <path d="M560-240 320-480l240-240 56 56-184 184 184 184-56 56Z"/>
            </svg>
          </button>
          <button 
            onClick={nextSlide}
            className="absolute right-0 md:right-4 top-1/2 -translate-y-1/2 size-10 md:size-12 rounded-full bg-white shadow-lg flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all z-20 border border-slate-100"
            aria-label="Siguiente"
          >
            <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24" fill="currentColor">
              <path d="M400-80 344-136l224-224-224-224 56-56 280 280L400-80Z"/>
            </svg>
          </button>
        </div>
      </div>

      {selectedTestimonial && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm transition-opacity duration-300"
          onClick={() => setSelectedTestimonial(null)}
        >
          <div 
            className="bg-white w-full max-w-2xl max-h-[90vh] rounded-3xl overflow-hidden shadow-2xl relative flex flex-col md:flex-row animate-in fade-in zoom-in duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              onClick={() => setSelectedTestimonial(null)}
              className="absolute top-4 right-4 z-10 size-10 flex items-center justify-center rounded-full bg-white/80 backdrop-blur-md shadow-sm border border-slate-100 hover:bg-red-500 hover:text-white transition-colors group/close"
            >
              <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24" fill="currentColor" className="text-black group-hover/close:text-white">
                <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/>
              </svg>
            </button>

            <div className="md:w-1/3 bg-primary p-6 md:p-8 flex flex-row md:flex-col items-center justify-center md:items-center gap-4 md:gap-0 text-left md:text-center border-b md:border-b-0 md:border-r border-white/10 shrink-0">
              <div className="size-20 md:size-40 rounded-full bg-white/10 flex items-center justify-center overflow-hidden relative md:mb-6 shadow-xl border-4 border-white/20 shrink-0">
                {selectedTestimonial.img ? (
                  <Image 
                    src={selectedTestimonial.img}
                    alt={selectedTestimonial.author}
                    fill
                    className="object-cover"
                  />
                ) : (
                  <span className="text-white font-bold text-2xl md:text-4xl">{getInitials(selectedTestimonial.author)}</span>
                )}
              </div>
              <div className="flex flex-col">
                <h3 className="font-serif text-xl md:text-2xl text-gray-deep md:mb-1">{selectedTestimonial.author}</h3>
                <p className="text-white/80 text-sm md:text-base font-medium">{selectedTestimonial.location}</p>
              </div>
            </div>

            <div className="md:w-2/3 p-8 md:p-12 overflow-y-auto">
              <svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 -960 960 960" width="48" fill="currentColor" className="text-primary/10 mb-6 shrink-0 md:block hidden">
                <path d="M220-320q25 0 42.5-17.5T280-380q0-25-17.5-42.5T220-440q-11 0-21 4t-19 12q14-35 46.5-55.5T300-500v-80q-63 0-106.5 43.5T150-430q0 46 32 78t78 32Zm400 0q25 0 42.5-17.5T680-380q0-25-17.5-42.5T620-440q-11 0-21 4t-19 12q14-35 46.5-55.5T700-500v-80q-63 0-106.5 43.5T550-430q0 46 32 78t78 32Z"/>
              </svg>
              <div className="space-y-4">
                {selectedTestimonial.text.split('\n\n').map((paragraph, idx) => (
                  <p key={idx} className="text-black italic leading-relaxed font-sans text-lg">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
