"use client";
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';

export default function About() {
  const { t } = useLanguage();
  const certifications = t('certifications', 'about') as string[];

  return (
    <section className="py-20 px-4 lg:px-20 bg-white overflow-hidden scroll-mt-32" id="sobre-mi">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col-reverse md:flex-row items-center gap-12 bg-white rounded-3xl p-6 sm:p-8 md:p-12 shadow-2xl shadow-slate-200/60 dark:shadow-none group">
          <div className="flex-1 space-y-6 relative">
            <div className="absolute top-0 -left-10 w-64 h-64 md:w-80 md:h-80 opacity-100 z-0 pointer-events-none">
              <Image 
                src="/multimedia/isotipo.png"
                alt="Isotipo Daniela Suacha - Biodesprogramación"
                fill
                className="object-contain object-left-top opacity-30"
                priority
              />
            </div>
            
            <div className="relative z-10 space-y-6">
              <h2 className="font-serif text-2xl sm:text-3xl text-gray-deep break-words">{t('title', 'about')}</h2> 
              <h3 className="text-gray-deep font-medium uppercase tracking-wide text-xs sm:text-sm font-sans">{t('subtitle', 'about')}</h3>
              <p className="text-black leading-relaxed font-sans">
                {t('p1', 'about')}
              </p>
              <p className="text-black leading-relaxed font-sans">
                {t('p2', 'about')}
              </p>
              <p className="text-black leading-relaxed font-sans">
                {t('p3', 'about')}
              </p>
            </div>
            <div className="pt-4 flex flex-wrap gap-4">
              {certifications.map((cert) => (
                <div key={cert} className="bg-primary/5 px-4 py-2 rounded-lg text-xs font-bold text-primary border border-primary/10">
                  {cert}
                </div>
              ))}
            </div>
          </div>
          <div className="flex-1 w-full flex justify-center md:justify-end">
            <div className="relative w-60 h-72 sm:w-72 sm:h-80 md:w-80 md:h-96">
              <div className="absolute inset-0 border-2 border-primary/30 rounded-full translate-x-4 translate-y-4 group-hover:translate-x-6 group-hover:translate-y-6 transition-transform"></div>
              <div className="absolute inset-0 rounded-full overflow-hidden shadow-lg z-10">
                <Image 
                  src="/multimedia/dani2.jpeg"
                  alt={t('alt', 'about')}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
