"use client";
import { useLanguage } from '@/context/LanguageContext';

export default function FAQ() {
  const { t } = useLanguage();

  const faqs = [
    {
      q: t('q1', 'faq'),
      a: (
        <div className="space-y-4">
          <p className="font-bold text-gray-deep">{t('a1.title', 'faq')}</p>
          <p>{t('a1.p1', 'faq')}</p>
          <p>{t('a1.p2', 'faq')}</p>
          <p>{t('a1.p3', 'faq')}</p>
          <p>{t('a1.p4', 'faq')}</p>
          <p>{t('a1.p5', 'faq')}</p>
        </div>
      )
    },
    {
      q: t('q2', 'faq'),
      a: (
        <div className="space-y-4">
          <p className="font-bold text-gray-deep">{t('a2.title', 'faq')}</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {(t('a2.items', 'faq') as any[]).map((item, idx) => (
              <div key={idx} className="p-4 bg-surface-light rounded-xl">
                <p className="font-bold text-sm mb-1 text-gray-deep">{item.t}</p>
                <p className="text-xs">{item.d}</p>
              </div>
            ))}
          </div>
        </div>
      )
    },
    {
      q: t('q3', 'faq'),
      a: (
        <div className="space-y-4">
          <p className="font-bold text-gray-deep">{t('a3.title', 'faq')}</p>
          <p>{t('a3.p', 'faq')}</p>
          <div className="space-y-3">
            {(t('a3.steps', 'faq') as any[]).map((step, idx) => (
              <div key={idx} className="flex gap-3">
                <div className="size-1.5 rounded-full bg-primary mt-2 shrink-0"></div>
                <div>
                  <p className="font-bold text-sm text-gray-deep">{step.t}</p>
                  <p className="text-xs">{step.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )
    },
    {
      q: t('q4', 'faq'),
      a: (
        <div className="space-y-4">
          <p className="font-bold text-gray-deep">{t('a4.title', 'faq')}</p>
          <div className="space-y-3">
            {(t('a4.steps', 'faq') as any[]).map((step, idx) => (
              <div key={idx} className="flex gap-3">
                <div className="size-1.5 rounded-full bg-primary mt-2 shrink-0"></div>
                <div>
                  <p className="font-bold text-sm text-gray-deep">{step.t}</p>
                  <p className="text-xs">{step.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )
    },
    {
      q: t('q5', 'faq'),
      a: t('a5', 'faq')
    }
  ];

  return (
    <section className="py-20 px-4 lg:px-20 bg-white overflow-hidden scroll-mt-32" id="faq">
      <div className="mx-auto max-w-3xl">
        <h2 className="text-center font-serif text-2xl sm:text-3xl text-gray-deep mb-12 break-words">{t('title', 'faq')}</h2>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <details 
              key={i} 
              className="group bg-white rounded-lg border border-primary/10 open:border-primary/30 transition-all duration-300"
            >
              <summary className="flex justify-between items-center font-bold cursor-pointer list-none p-4 sm:p-6 text-gray-deep group-open:bg-primary group-open:text-white transition-all duration-300 rounded-t-lg group-open:mb-4 font-sans">
                <span className="pr-4">{faq.q}</span>
                <span className="transition-transform group-open:rotate-180 text-primary group-open:text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24" fill="currentColor">
                    <path d="M480-345 240-585l56-56 184 184 184-184 56 56-240 240Z"/>
                  </svg>
                </span>
              </summary>
              <div className="text-black px-4 pb-6 sm:px-6 pt-0 text-sm leading-relaxed font-sans animate-in fade-in slide-in-from-top-2 duration-300">
                {faq.a}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
