"use client";

import Image from "next/image";
import { InlineWidget } from "react-calendly";

export default function Calendly() {
  // URL base proporcionada por el usuario
  const calendlyUrl = "https://calendly.com/danielasuachadevs/30min"; 

  return (
    <section className="py-20 px-6 lg:px-20 bg-surface-light overflow-hidden scroll-mt-32" id="agendar">
      <div className="mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-in-up" style={{ animationFillMode: 'forwards' }}>
          <span className="text-primary font-bold tracking-widest text-xs uppercase mb-2 block">Reserva</span>
          <h2 className="font-serif text-3xl md:text-5xl text-black mb-8">Agenda tu espacio de transformación</h2>
          
          <div className="max-w-4xl mx-auto bg-white/50 p-8 rounded-3xl border border-primary/10 shadow-sm mb-10 hover-lift">
            <h3 className="text-2xl font-serif text-primary mb-4">Sesiones de Biodesprogramación</h3>
            <p className="text-lg text-black/80 font-serif italic mb-8">
              Un espacio seguro y profesional donde podrás:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col gap-2">
                <div className="h-1 w-12 bg-primary/20 mx-auto rounded-full mb-2"></div>
                <p className="text-black/70 font-sans text-sm leading-relaxed">Comprender el origen emocional de lo que estás viviendo</p>
              </div>
              <div className="flex flex-col gap-2">
                <div className="h-1 w-12 bg-primary/20 mx-auto rounded-full mb-2"></div>
                <p className="text-black/70 font-sans text-sm leading-relaxed">Liberar programas inconscientes limitantes</p>
              </div>
              <div className="flex flex-col gap-2">
                <div className="h-1 w-12 bg-primary/20 mx-auto rounded-full mb-2"></div>
                <p className="text-black/70 font-sans text-sm leading-relaxed">Reconectar con tu bienestar y tu potencial</p>
              </div>
            </div>
          </div>

          <p className="text-black/60 font-sans max-w-2xl mx-auto">
            Selecciona el horario que mejor te funcione. Recibirás un correo de confirmación con los detalles del acceso a Google Meet.
          </p>
        </div>
        
        <div className="bg-white rounded-2xl shadow-xl shadow-primary/5 border border-slate-100 overflow-hidden animate-fade-in-up" style={{ animationDelay: '300ms', animationFillMode: 'forwards' }}>
          <div className="flex flex-col lg:flex-row min-h-[700px]">
            {/* Left Info Panel - RESTAURADO a petición del usuario */}
            <div className="w-full lg:w-80 p-8 lg:p-10 bg-slate-50/50 border-b lg:border-b-0 lg:border-r border-slate-300">
              <div className="mb-8">
                <div className="relative w-16 h-16 rounded-2xl mb-6 border-2 border-white shadow-sm overflow-hidden">
                  <Image 
                      src="/multimedia/dani2.jpeg"
                    alt="Daniela Suacha"
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-2xl font-bold text-black font-serif mb-2">Sesión de Biodeprogramación</h3>
                <p className="text-sm text-black/60 font-sans leading-relaxed">
                Las sesiones son un espacio de acompañamiento personalizado donde exploramos el origen emocional de los conflictos que deseas comprender o transformar.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-center gap-4 text-black">
                  <div className="size-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                    <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24" fill="currentColor">
                      <path d="M480-480q33 0 56.5-23.5T560-560q0-33-23.5-56.5T480-640q-33 0-56.5 23.5T400-560q0 33 23.5 56.5T480-480Zm0 80q-83 0-156-31.5T197-517q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80ZM160-240v-80h640v80H160Z"/>
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-black/40 uppercase tracking-tighter">Modalidad</p>
                    <p className="font-bold font-sans">Individual (Online o Presencial)</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 text-black">
                  <div className="size-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                    <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24" fill="currentColor">
                      <path d="M480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-60q142 0 241-99t99-241q0-142-99-241t-241-99q-142 0-241 99t-99 241q0 142 99 241t241 99Zm0-340Zm-50 140h100v-200H430v200Zm0 100h100v-80H430v80Z"/>
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-black/40 uppercase tracking-tighter">Duración</p>
                    <p className="font-bold font-sans">45 - 60 minutos</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Panel - Interactive Widget */}
            <div className="flex-1 min-h-[700px] lg:min-h-0">
              <InlineWidget 
                url={calendlyUrl}
                styles={{
                  height: '700px',
                  width: '100%',
                }}
                pageSettings={{
                  backgroundColor: 'ffffff',
                  hideEventTypeDetails: true,
                  hideLandingPageDetails: true,
                  primaryColor: '748e63',
                  textColor: '1a1f2c',
                }}
              />
            </div>
          </div>
        </div>
        
        <div className="mt-12 text-center space-y-6">
          <div className="space-y-1">
            <p className="font-serif text-xl text-primary italic">"Cada proceso es único."</p>
            <p className="font-serif text-xl text-primary italic">"Cada historia merece ser comprendida."</p>
          </div>
          
       
        </div>
      </div>
    </section>
  );
}
