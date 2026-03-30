"use client";
import Image from 'next/image';
import Link from 'next/link';
import { scrollTo } from '@/lib/scrollTo';

export default function Methodology() {
  const steps = [
    {
      title: "1. El Origen",
      description: "Identificamos el evento o emoción atrapada que detonó el síntoma o patrón actual.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" height="32" viewBox="0 -960 960 960" width="32" fill="currentColor">
          <path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z"/>
        </svg>
      )
    },
    {
      title: "2. Liberación",
      description: "Mediante técnicas específicas, liberamos la carga emocional asociada a ese recuerdo.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" height="32" viewBox="0 -960 960 960" width="32" fill="currentColor">
          <path d="M280-400q-33 0-56.5-23.5T200-480v-360q0-33 23.5-56.5T280-920h300v80H280v360h400v-100h80v180q0 33-23.5 56.5T680-400H280Zm300-400v-120q0-50-35-85t-85-35q-50 0-85 35t-35 85h80q0-17 11.5-28.5T460-1000q17 0 28.5 11.5T500-960v160h80Z" visibility="hidden"/>
          {/* Open Lock Icon Path */}
          <path d="M240-200v-360q0-33 23.5-56.5T320-640h320v-80q0-50-35-85t-85-35q-50 0-85 35t-35 85h-80q0-83 58.5-141.5T440-880q83 0 141.5 58.5T640-680v40h80q33 0 56.5 23.5T800-560v360q0 33-23.5 56.5T720-120H320q-33 0-56.5-23.5T240-200Zm80-80h400v-200H320v200Z"/>
        </svg>
      )
    },
    {
      title: "3. Equilibrio",
      description: "Integramos nuevos recursos para que tu cuerpo y mente recuperen su estado natural de salud.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" height="32" viewBox="0 -960 960 960" width="32" fill="currentColor">
          <path d="M480-80q-15 0-28-5t-24-15L56-472q-10-10-15-24t-5-28q0-15 5-28t15-24l372-372q11-10 24-15t28-5q15 0 28.5 5t23.5 15l372 372q10 11 15 24t5 28q0 15-5 28t-15 24L532-100q-10 10-23.5 15T480-80Zm0-114 314-314-314-314-314 314 314 314Zm0-314Z"/>
        </svg>
      )
    }
  ];

  return (
    <section className="py-20 px-6 lg:px-20 bg-white overflow-hidden scroll-mt-32" id="servicios">
      <div className="mx-auto max-w-7xl relative">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/3 animate-fade-in-up relative" style={{ animationFillMode: 'forwards' }}>
            {/* Background Isotipo - Specific to this column */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] z-0 opacity-[0.20] pointer-events-none">
              <Image 
                src="/multimedia/isotipo.png"
                alt=""
                fill
                className="object-contain"
                priority
              />
            </div>

            <div className="relative z-10">
              <span className="text-primary font-bold tracking-widest text-xs uppercase mb-2 block">Metodología</span>
              <h2 className="font-serif text-3xl md:text-4xl text-black mb-6">¿Qué es la Biodeprogramación?</h2>
              <p className="text-black mb-8 leading-relaxed font-sans">
                La biodesprogramación es un proceso de acompañamiento terapéutico que permite identificar y liberar los programas emocionales inconscientes que pueden influir en nuestra salud, nuestras relaciones y nuestras experiencias de vida. Libera tu mente, sana tu historia, transforma tu vida.
              </p>
              <Link 
                href="#agendar" 
                onClick={(e) => {
                  e.preventDefault();
                  scrollTo('agendar');
                }}
                className="inline-flex items-center justify-center px-6 py-3 bg-primary text-white font-bold rounded-[12px] hover:bg-primary/90 hover:scale-[1.05] active:scale-95 transition-all shadow-lg shadow-primary/20 group"
              >
                Ver disponibilidad 
                <svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 -960 960 960" width="20" fill="currentColor" className="ml-2 group-hover:translate-x-1 transition-transform">
                  <path d="M647-440H160v-80h487L423-744l57-56 320 320-320 320-57-56 224-224Z"/>
                </svg>
              </Link>
            </div>
          </div>
          <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="flex flex-col gap-4 group animate-fade-in-up" style={{ animationDelay: `${400 + index * 150}ms`, animationFillMode: 'forwards' }}>
                <div className="size-16 rounded-2xl bg-surface-light flex items-center justify-center text-primary shadow-sm group-hover:shadow-md group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  {step.icon}
                </div>
                <h3 className="text-xl font-bold font-serif text-black">{step.title}</h3>
                <p className="text-sm text-black leading-relaxed font-sans">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
        
        {/* Info Block at the bottom */}
        <div className="relative mt-20 max-w-4xl mx-auto">
          {/* Isotipo background */}
          <div className="absolute inset-0 z-0 opacity-100 pointer-events-none flex items-center justify-center">
            <Image 
              src="/multimedia/isotipo.png"
              alt="Isotipo Daniela Suacha - Metodología de Biodeprogramación"
              width={600}
              height={600}
              className="object-contain opacity-100"
            />
          </div>
          
          <div className="relative z-10 p-8 md:p-12 rounded-3xl bg-surface-light/80 backdrop-blur-sm border border-primary/10 shadow-sm text-center hover-lift animate-fade-in-up" style={{ animationDelay: '900ms', animationFillMode: 'forwards' }}>
            <div className="size-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mx-auto mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24" fill="currentColor">
                <path d="M440-280h80v-240h-80v240Zm40-320q17 0 28.5-11.5T520-640q0-17-11.5-28.5T480-680q-17 0-28.5 11.5T440-640q0 17 11.5 28.5T480-600Zm0 520q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-60q142 0 241-99t99-241q0-142-99-241t-241-99q-142 0-241 99t-99 241q0 142 99 241t241 99Zm0-340Z"/>
              </svg>
            </div>
            <h3 className="font-serif text-2xl text-black mb-4">Un proceso de conciencia y transformación</h3>
            <p className="text-slate-700 leading-relaxed font-sans mb-6 max-w-2xl mx-auto">
              La biodesprogramación no sustituye tratamientos médicos ni psicológicos. Es un acompañamiento complementario que busca ampliar la conciencia sobre los conflictos emocionales que pueden estar influyendo en la vida de una persona.
            </p>
            <p className="text-primary font-medium italic font-serif text-lg">
              "Al comprender la raíz de estos programas, muchas personas experimentan mayor claridad, alivio emocional y cambios profundos en su manera de vivir."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
