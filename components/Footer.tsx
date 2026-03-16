"use client";

import Link from 'next/link';
import { useState } from 'react';

export default function Footer() {
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);

  return (
    <footer className="bg-primary py-16 px-6 lg:px-20 border-t border-white/10 overflow-hidden relative">
      <div className="mx-auto max-w-7xl text-center animate-fade-in-up" style={{ animationFillMode: 'forwards' }}>
        <div className="flex items-center justify-center gap-3 text-white mb-6 group">
          <div className="size-6 text-white group-hover:scale-110 transition-transform">
            <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24" fill="currentColor">
              <path d="M480-80q-137 0-240.5-85T121-391q0-94 53.5-171.5T316-670q6-20 12-40.5t16-40.5q18-45 52-77t84-32q50 0 84 32t52 77q10 20 16 40.5t12 40.5q88 30 141.5 107.5T839-391q0 141-103.5 226T480-80Zm0-60q111 0 195.5-67.5T779-391q0-74-41-135t-109-88q-7 30-16 57.5t-21 54.5q-12 27-28.5 50.5T527-251q-10 12-22.5 18t-24.5 6q-12 0-24.5-6T433-251q-20-24-36.5-47.5T368-349q-12-27-21-54.5T331-461q-68 27-109 88t-41 135q0 116 84.5 183.5T480-140Zm0-171q18-24 33-47.5t27-48.5q12-25 20-51t13-52q-23-9-46.5-14.5T480-531q-23 0-46.5 5.5T387-511q5 26 13 52t20 51q12 25 27 48.5t33 47.5Zm0-289q18 0 35 4.5t33 12.5q-6-26-14-52.5T532-689q-12-32-34.5-51.5T480-760q-25 0-47.5 19.5T398-689q-10 27-18 53.5t-14 52.5q16-8 33-12.5t35-4.5Z"/>
            </svg>
          </div>
          <span className="text-lg font-bold tracking-tight font-sans">Biodeprogramación Terapéutica</span>
        </div>
        <h3 className="font-serif text-2xl text-white mb-6">Comienza tu viaje de sanación hoy</h3>
        
        <nav className="flex flex-wrap justify-center gap-x-8 gap-y-4 mb-10">
          <Link href="#inicio" className="text-sm font-medium text-white/80 hover:text-white transition-colors">Inicio</Link>
          <Link href="#servicios" className="text-sm font-medium text-white/80 hover:text-white transition-colors">Servicios</Link>
          <Link href="#testimonios" className="text-sm font-medium text-white/80 hover:text-white transition-colors">Testimonios</Link>
          <Link href="#sobre-mi" className="text-sm font-medium text-white/80 hover:text-white transition-colors">Sobre mí</Link>
          <Link href="#faq" className="text-sm font-medium text-white/80 hover:text-white transition-colors">Preguntas</Link>
        </nav>

        <div className="flex justify-center gap-6 mb-12">
          {/* WhatsApp */}
          <Link href="https://wa.me/524777657492" target="_blank" aria-label="WhatsApp" className="text-white/70 hover:text-white transition-colors hover:scale-110 transform">
            <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M12.012 2c-5.508 0-9.987 4.479-9.987 9.988 0 1.757.455 3.405 1.25 4.846L2 22l5.304-1.391c1.401.764 3.001 1.2 4.708 1.2 5.508 0 9.988-4.479 9.988-9.988 0-5.509-4.48-9.989-9.988-9.989zm5.333 14.122c-.22.618-1.077 1.139-1.486 1.192-.408.053-.805.086-2.583-.623-2.144-.852-3.486-3.044-3.593-3.189-.107-.144-.863-1.144-.863-2.186 0-1.042.545-1.554.738-1.766.191-.213.418-.266.557-.266.139 0 .278.001.397.006.126.006.297-.048.466.368.17.417.58 1.413.63 1.516.05.103.084.223.013.36-.071.136-.107.22-.213.344-.107.125-.224.278-.32.374-.108.106-.221.222-.095.438.127.215.561.925 1.205 1.5.83.74 1.531.97 1.745 1.077.214.107.34.09.467-.056.126-.146.541-.63.686-.844.145-.215.291-.182.49-.108.199.073 1.264.596 1.482.705.217.11.363.163.416.257.054.094.054.544-.166 1.162z"/></svg>
          </Link>
          {/* Instagram */}
          <Link href="https://www.instagram.com/danisuacha" target="_blank" aria-label="Instagram" className="text-white/70 hover:text-white transition-colors hover:scale-110 transform">
            <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 014.185 3.36c.636-.247 1.363-.416 2.427-.465C7.673 2.013 8.044 2 10.328 2h1.988zM12 7a5 5 0 100 10 5 5 0 000-10zm0 1.947a3.053 3.053 0 110 6.106 3.053 3.053 0 010-6.106zM15.42 6.32a1.087 1.087 0 100 2.174 1.087 1.087 0 000-2.174z"/></svg>
          </Link>
          {/* Facebook */}
          <Link href="https://www.facebook.com/danisuacha" target="_blank" aria-label="Facebook" className="text-white/70 hover:text-white transition-colors hover:scale-110 transform">
            <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/></svg>
          </Link>
        </div>

        <div className="text-xs text-white/50 space-y-2 font-sans">
          <p>© 2026 Biodeprogramación Terapéutica. Todos los derechos reservados.</p>
          <div className="flex justify-center gap-4">
            <button 
              onClick={() => setIsPrivacyOpen(true)}
              className="hover:text-white transition-colors underline decoration-white/20 underline-offset-4 cursor-pointer"
            >
              Política de Privacidad
            </button>
          </div>
          <p className="mt-4 pt-4 border-t border-white/10">
            desarrollado por <Link href="https://blackcherrydevs.vercel.app/" target="_blank" className="font-bold text-white hover:underline">BlackCherry</Link>
          </p>
        </div>
      </div>

      {/* Privacy Modal */}
      {isPrivacyOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm animate-in fade-in duration-300">
          <div 
            className="bg-white dark:bg-slate-900 w-full max-w-2xl max-h-[80vh] rounded-2xl shadow-2xl overflow-hidden flex flex-col animate-in Google Meet-in-95 duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-6 border-b border-slate-100 dark:border-slate-800 flex justify-between items-center">
              <h2 className="text-xl font-bold text-slate-900 dark:text-white font-serif">Política de Privacidad</h2>
              <button 
                onClick={() => setIsPrivacyOpen(false)}
                className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-colors text-slate-500"
              >
                <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24" fill="currentColor">
                  <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/>
                </svg>
              </button>
            </div>
            <div className="p-8 overflow-y-auto font-sans text-slate-700 dark:text-slate-300 leading-relaxed space-y-6">
              <section>
                <h3 className="font-bold text-slate-900 dark:text-white mb-2">1. Recopilación de Información</h3>
                <p>Recopilamos información personal que usted nos proporciona voluntariamente al agendar una sesión, incluyendo su nombre, correo electrónico y número de teléfono.</p>
              </section>
              <section>
                <h3 className="font-bold text-slate-900 dark:text-white mb-2">2. Uso de los Datos</h3>
                <p>Sus datos se utilizan exclusivamente para gestionar sus citas, enviarle confirmaciones y recordatorios, y proporcionar el servicio terapéutico solicitado.</p>
              </section>
              <section>
                <h3 className="font-bold text-slate-900 dark:text-white mb-2">3. Confidencialidad</h3>
                <p>Toda la información compartida durante las sesiones de Biodeprogramación es estrictamente confidencial, siguiendo los más altos estándares éticos de la práctica terapéutica.</p>
              </section>
              <section>
                <h3 className="font-bold text-slate-900 dark:text-white mb-2">4. Seguridad</h3>
                <p>Implementamos medidas de seguridad técnicas y organizativas para proteger sus datos personales contra el acceso no autorizado o la pérdida.</p>
              </section>
              <section>
                <h3 className="font-bold text-slate-900 dark:text-white mb-2">5. Sus Derechos</h3>
                <p>Usted tiene derecho a acceder, rectificar o eliminar sus datos personales en cualquier momento contactándonos a través de danisuacha@gmail.com.</p>
              </section>
            </div>
            <div className="p-6 border-t border-slate-100 dark:border-slate-800 text-right">
              <button 
                onClick={() => setIsPrivacyOpen(false)}
                className="px-6 py-2 bg-primary text-white rounded-[12px] font-bold hover:bg-primary/90 transition-all"
              >
                Entendido
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
}
