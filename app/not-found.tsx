import Link from 'next/link';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function NotFound() {
  return (
    <div className="relative flex flex-col min-h-screen w-full bg-background-light">
      <Navbar />
      
      <main className="flex-grow flex items-center justify-center pt-24 pb-12 px-6 lg:px-20">
        <div className="max-w-7xl mx-auto w-full flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
          
          {/* Left Side: Content */}
          <div className="flex-1 text-center lg:text-left order-2 lg:order-1 animate-fade-in-up" style={{ animationFillMode: 'forwards' }}>
            <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold tracking-widest uppercase mb-6">
              Error 404
            </span>
            <h1 className="font-serif text-4xl lg:text-6xl font-medium leading-tight text-slate-900 mb-6">
              Parece que este camino <span className="italic text-primary">ha llegado a su fin</span>
            </h1>
            <p className="text-lg text-slate-600 max-w-xl mx-auto lg:mx-0 leading-relaxed font-sans mb-10">
              No te preocupes, a veces perderse es parte del proceso de encontrarse. Permítenos guiarte de vuelta a un lugar seguro.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link 
                href="/" 
                className="h-14 px-10 flex items-center justify-center rounded-[12px] bg-primary text-white text-base font-bold shadow-lg shadow-primary/20 hover:bg-primary/90 hover:scale-[1.05] active:scale-95 transition-all"
              >
                Regresar al Inicio
              </Link>
              <Link 
                href="/#agendar" 
                className="h-14 px-10 flex items-center justify-center rounded-[12px] bg-white border border-slate-200 text-slate-700 text-base font-medium hover:bg-slate-50 hover:scale-[1.05] active:scale-95 transition-all"
              >
                Agendar una Sesión
              </Link>
            </div>
          </div>

          {/* Right Side: Illustration */}
          <div className="flex-1 w-full max-w-md lg:max-w-lg order-1 lg:order-2 animate-fade-in-up" style={{ animationDelay: '300ms', animationFillMode: 'forwards' }}>
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border-4 border-white/50">
              <Image 
                src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=2400&auto=format&fit=crop"
                alt="Encuentra tu equilibrio"
                fill
                className="object-cover object-center transform hover:scale-105 transition-transform duration-700 ease-in-out"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 bg-white/10 backdrop-blur-md p-8 border-t border-white/20">
                <p className="text-white font-medium italic font-serif text-lg leading-relaxed text-center">
                  "El alma siempre sabe el camino, solo necesitamos silencio para escucharla."
                </p>
              </div>
            </div>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
