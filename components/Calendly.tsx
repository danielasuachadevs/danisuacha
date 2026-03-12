"use client";

import Image from "next/image";
import { InlineWidget } from "react-calendly";

export default function Calendly() {
  // Reemplazar con tu URL real de Calendly (ej: https://calendly.com/usuario/evento)
  const calendlyUrl = "https://calendly.com/danisuacha"; 

  return (
    <section className="py-20 px-6 lg:px-20 bg-surface-light overflow-hidden" id="agendar">
      <div className="mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <span className="text-primary font-bold tracking-widest text-xs uppercase mb-2 block">Reserva</span>
          <h2 className="font-serif text-3xl md:text-4xl text-black mb-4">Agenda tu espacio de transformación</h2>
          <p className="text-black/60 font-sans max-w-2xl mx-auto">
            Selecciona el horario que mejor te funcione. Recibirás un correo de confirmación con los detalles del acceso a Zoom.
          </p>
        </div>
        
        <div className="bg-white rounded-2xl shadow-xl shadow-primary/5 border border-slate-100 overflow-hidden">
          <div className="flex flex-col lg:flex-row min-h-[700px]">
            {/* Left Info Panel - Context Restored */}
            <div className="w-full lg:w-80 p-8 lg:p-10 bg-slate-50/50 border-b lg:border-b-0 lg:border-r border-slate-100">
              <div className="mb-8">
                <div className="relative w-16 h-16 rounded-2xl mb-6 border-2 border-white shadow-sm overflow-hidden">
                  <Image 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuB1goUuoR-lbr7oyqJmqfOQWDi7jRYh__CHrEbhVijbx5lIEIysdJoH9a9urOUHnwsE0w65mYpbw-H5_-mDqoTT7Z4U7CXqCv9PAhF17mJZhRAYErabNivxeo3LmyFf-bCShRXt6ntRa2N0JobG2FbBLAIYgLzk0pJ9iT4txDjSAjuSk3IHJAI14GJFYq2niFBMYtf3j6QCfdf-WaRGQiXu9AlOxAr85jQP0wLxGbKfgfH43UxOKAQDPHCzDty3m9h4RN8_e47rKw"
                    alt="Daniela Suacha"
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-2xl font-bold text-black font-serif mb-2">Sesión de Biodeprogramación</h3>
                <p className="text-sm text-black/60 font-sans leading-relaxed">
                  Acompañamiento profundo para identificar y liberar la raíz emocional de tus síntomas físicos o bloqueos de vida.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-center gap-4 text-black">
                  <div className="size-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                    <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24" fill="currentColor">
                      <path d="M480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-60q142 0 241-99t99-241q0-142-99-241t-241-99q-142 0-241 99t-99 241q0 142 99 241t241 99Zm0-340Zm-50 140h100v-200H430v200Zm0 100h100v-80H430v80Z"/>
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-black/40 uppercase tracking-tighter">Duración</p>
                    <p className="font-bold font-sans">60 minutos</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 text-black">
                  <div className="size-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                    <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24" fill="currentColor">
                      <path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm0-80h640v-400H160v400Zm0 0v-400 400Z"/>
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-black/40 uppercase tracking-tighter">Ubicación</p>
                    <p className="font-bold font-sans">Videollamada Zoom</p>
                  </div>
                </div>
              </div>

              <div className="mt-10 p-4 rounded-xl bg-primary/5 border border-primary/10">
                <p className="text-xs text-primary font-medium italic font-sans">
                  "El síntoma es la solución biológica a un conflicto emocional no resuelto."
                </p>
              </div>
            </div>

            {/* Right Panel - Interactive Widget */}
            <div className="flex-1 min-h-[650px] lg:min-h-0">
              <InlineWidget 
                url={calendlyUrl}
                styles={{
                  height: '100%',
                  width: '100%',
                }}
                pageSettings={{
                  backgroundColor: 'ffffff',
                  hideEventTypeDetails: true,
                  hideLandingPageDetails: true,
                  primaryColor: '557a55', // matching the green tone from the user's image
                  textColor: '000000',
                }}
              />
            </div>
          </div>
        </div>
        
        <div className="mt-8 text-center space-y-2">
          <p className="text-sm text-black/40 font-sans italic">
            * No se requiere pago para agendar. Solo registro de cita.
          </p>
          <p className="text-xs text-black/30 font-sans">
            La terapeuta recibirá una notificación inmediata al confirmar tu espacio.
          </p>
        </div>
      </div>
    </section>
  );
}
