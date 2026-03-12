import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative w-full py-16 lg:py-24 px-6 lg:px-20 overflow-hidden" id="inicio">
      {/* Background decoration */}
      <div className="absolute inset-0 z-0 opacity-20 dark:opacity-10 pointer-events-none">
        <Image 
          src="https://images.unsplash.com/photo-1490750967868-58cb75065ed2?q=80&w=2400&auto=format&fit=crop"
        alt=""
          fill
          className="object-cover object-center"
          priority
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <div className="flex-1 flex flex-col gap-6 text-center lg:text-left">
            <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold tracking-widest uppercase w-fit mx-auto lg:mx-0">
              Sanación Emocional Profunda
            </span>
            <h1 className="font-serif text-4xl lg:text-6xl font-medium leading-tight text-black">
              Libera emociones que están afectando tu vida <span className="italic text-primary font-serif">sin que te des cuenta</span>
            </h1>
            <p className="text-lg text-black max-w-xl mx-auto lg:mx-0 leading-relaxed font-sans">
              Descubre el origen emocional de tus síntomas y conflictos para transformarlos en bienestar, equilibrio y paz interior.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
              <Link 
                href="#agendar" 
                className="h-12 px-8 flex items-center justify-center rounded-[12px] bg-primary text-white text-base font-bold shadow-lg shadow-primary/20 hover:bg-primary/90 hover:scale-[1.02] active:scale-95 transition-all"
              >
                Agendar y confirmar sesión
              </Link>
              <Link 
                href="https://wa.me/524777657492" 
                target="_blank"
                className="h-12 px-8 flex items-center justify-center rounded-[12px] bg-white dark:bg-surface-dark border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 text-base font-medium hover:bg-slate-50 dark:hover:bg-slate-800 hover:scale-[1.02] active:scale-95 transition-all"
              >
                Solicitar más información
              </Link>
            </div>
          </div>
          <div className="flex-1 w-full max-w-lg lg:max-w-none">
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
              <Image 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBivsWs4WO__qmfRYQcdlP6t95yeNuBRrlrEZiIRNVN-c-USKmtYSWm8UZtIaP_PHe_nBWiFaFJaI-2wS5H5NxJDcxkbcF_N0tRrB5e2KJ53zQtYrTWhOABIr0YBsMsndzKjNbxxKrupCgm2sX0Q7UAd7mbMnXLTuxFtLgiYhM5k1Q4JQ9weAtBOc8pZPZUSVTkDlxdiIutvTEEQ_ZNt75j2keVh3E0ODWolKKETVgyLMkbnWrHs9ednITw5jX_2o6Y0ukbYP5_ew"
                alt="Paz y bienestar emocional"
                fill
                className="object-cover object-center transform hover:scale-105 transition-transform duration-700 ease-in-out"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-primary/30 to-transparent p-8">
                <p className="text-white font-medium italic font-serif">"El cuerpo grita lo que la boca calla."</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
