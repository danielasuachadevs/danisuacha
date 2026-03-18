"use client";
import Link from 'next/link';
import { scrollTo } from '@/lib/scrollTo';

export default function Pricing() {
  return (
    <section className="py-24 px-6 lg:px-20 bg-white overflow-hidden" id="pricing">
      <div className="mx-auto max-w-5xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Highlighted Card */}
          <div className="relative bg-white p-8 md:p-10 rounded-2xl border-2 border-primary shadow-xl shadow-primary/10 flex flex-col items-center text-center overflow-hidden group">
            <div className="absolute top-0 right-0 bg-primary text-white text-xs font-bold px-3 py-1 rounded-bl-lg">RECOMENDADO</div>
            <h3 className="font-serif text-2xl text-gray-deep mb-4">Quiero agendar mi sesión ahora</h3>
            <p className="text-gray-deep mb-8 font-sans font-light">
              Si estás listo/a para iniciar tu proceso de sanación, asegura tu espacio en mi agenda ahora mismo.
            </p>
            <ul className="text-left w-full mb-8 space-y-3 text-sm text-black font-sans">
              <li className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 -960 960 960" width="20" fill="currentColor" className="text-primary">
                  <path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z"/>
                </svg>
                Duración: 60 minutos
              </li>
              <li className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 -960 960 960" width="20" fill="currentColor" className="text-primary">
                  <path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z"/>
                </svg>
                Formato: Online (Zoom)
              </li>
            </ul>
            <Link 
              href="#agendar"
              onClick={(e) => {
                e.preventDefault();
                scrollTo('agendar');
              }}
              className="w-full py-4 rounded-[12px] bg-primary text-white font-bold text-lg hover:bg-primary/90 hover:scale-[1.02] active:scale-95 shadow-lg shadow-primary/25 transition-all flex items-center justify-center"
            >
              Reservar Sesión
            </Link>
          </div>

          {/* Neutral Card */}
          <div className="bg-surface-light p-8 md:p-10 rounded-2xl border border-slate-200 flex flex-col items-center text-center justify-between group">
            <div>
              <h3 className="font-serif text-2xl text-gray-deep mb-4">Tengo dudas o preguntas</h3>
              <p className="text-gray-deep mb-8 font-sans font-light">
                ¿No estás seguro si esto es para ti? Escríbeme y evaluemos juntos si la biodeprogramación puede ayudarte.
              </p>
            </div>
            <div className="w-full space-y-4">
              <Link 
                href="https://wa.me/524777657492" 
                target="_blank"
                className="w-full py-3 rounded-[12px] bg-white border border-slate-200 text-black font-bold flex items-center justify-center gap-2 hover:bg-slate-50 hover:scale-[1.02] active:scale-95 transition-all font-sans"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="text-green-600">
                  <path d="M12.012 2c-5.508 0-9.987 4.479-9.987 9.988 0 1.757.455 3.405 1.25 4.846L2 22l5.304-1.391c1.401.764 3.001 1.2 4.708 1.2 5.508 0 9.988-4.479 9.988-9.988 0-5.509-4.48-9.989-9.988-9.989zm5.333 14.122c-.22.618-1.077 1.139-1.486 1.192-.408.053-.805.086-2.583-.623-2.144-.852-3.486-3.044-3.593-3.189-.107-.144-.863-1.144-.863-2.186 0-1.042.545-1.554.738-1.766.191-.213.418-.266.557-.266.139 0 .278.001.397.006.126.006.297-.048.466.368.17.417.58 1.413.63 1.516.05.103.084.223.013.36-.071.136-.107.22-.213.344-.107.125-.224.278-.32.374-.108.106-.221.222-.095.438.127.215.561.925 1.205 1.5.83.74 1.531.97 1.745 1.077.214.107.34.09.467-.056.126-.146.541-.63.686-.844.145-.215.291-.182.49-.108.199.073 1.264.596 1.482.705.217.11.363.163.416.257.054.094.054.544-.166 1.162z"/>
                </svg> 
                Contactar por WhatsApp
              </Link>
              <Link 
                href="mailto:dansuacha@gmail.com" 
                className="w-full py-3 rounded-[12px] bg-transparent text-gray-deep font-medium hover:text-primary hover:scale-[1.02] active:scale-95 transition-all text-sm block font-sans font-light"
              >
                Enviar un correo electrónico
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
