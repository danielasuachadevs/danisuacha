"use client";

import Image from 'next/image';
import { useState, useEffect } from 'react';

interface Testimonial {
  text: string;
  author: string;
  location: string;
  img: string;
}

export default function Testimonials() {
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

  const testimonials: Testimonial[] = [
    // ... (Keep the same 4 testimonials)
    {
      text: "Hola! Mi nombre es Ruth Torres. Estuve tomando sesiones de bio desprogramación con Daniela, lo cual me ayudó mucho a sacar de raíz eventos traumáticos también a entender qué mensaje me daban mis síntomas, pero lo más importante a tener una mejor salud emocional porque se hace uno consciente de conflictos, problemas, ansiedades, miedos que hacen que nuestra salud no esté al 100. Creo que todos deberíamos de tomar sesiones de biodesprogramación para estar emocionalmente físicamente más sanos.",
      author: "Ruth Torres",
      location: "Paciente",
      img: "/multimedia/ruth.jpeg"
    },
    {
      text: "Mi experiencia con la biodesprogramación ha sido profundamente reveladora. Llegué buscando acompañar un tema de salud relacionado con tiroides de Hashimoto y encontré un espacio para comprender la conexión entre mis emociones, mis pensamientos y mi cuerpo. Ha sido una herramienta valiosa como complemento a mi tratamiento médico, ayudándome a gestionar puntos de vida del pasado que han estado inconscientes durante mucho tiempo y que, al hacerlos conscientes, puedo atenderlos y generar un impacto positivo en mi cuerpo. Gracias Dani Suacha.",
      author: "Annel Ramos",
      location: "Paciente",
      img: "/multimedia/annel.jpeg"
    },
    {
      text: "¿Cómo ha sido tu experiencia con la biodesprogramacion? Es una forma que no podría explicar con exactitud, porque te abre mucho la mente te hace pensar más allá y revivir momentos que pude haber olvidado en algún punto de mi vida. Si me preguntan que si lo recomendaría diría que sí pero sobretodo para aquellas personas que no se cierran a ningún tipo de terapia para sanar, y gente que realmente buscan salir adelante. Yo busque ayuda para salvarme a mí porque me enfocqué mucho tiempo en salvar a más gente y yo me estaba haciendo a un lado cuando ahora sé que mi prioridad soy YO antes que cualquier persona, el haber encontrado ayuda en Dani fue de mucha ayuda he ido de la mano con ella a vivir y experimentar muchas cosas de las que no me creía capaz. \n\n ¿Cómo te ha hecho sentir? Si pudiera resumirlo en una sola palabras diría que en PAZ, sé que todo lo que pasa a mi alrededor tiene y tuvo un porqué, que hubieron cosas que me dolieron en su momento si obviamente como todo, pero apartir de la biodesprogramacion encontré mi tranquilidad y mi paz y seguiré luchando para que siga siendo así. Y meditar es una de las herramientas más poderosa que uno como ser puede experimentar y vivir para encontrar esa paz y tranquilidad.",
      author: "Jenny Lango",
      location: "Paciente",
      img: "/multimedia/jenny.jpeg"
    },
    {
      text: "Estuve viviendo situaciones con mi familia de origen que ya no podía cambiar aún después de haberlo intentado propositivamente, se trataba entonces de lidiar con el reto de cambiar yo. El modo y el método de Dani Suachá me ayudó a identificar claramente algunos patrones ancestrales que yo estaba repitiendo relacionados con la situación que yo quería aprender a manejar. He cambiado entonces el enfoque de tales situaciones, mi esfuerzo y mi voluntad puestos al beneficio de mi cambio personal...",
      author: "Pancho Alvarado",
      location: "Paciente",
      img: ""
    }
  ];

  const getInitials = (name: string) => {
    return name.split(' ').map(n => n[0]).join('').toUpperCase();
  };

  // Infinite Carousel logic
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

  // Prevent scrolling when modal is open
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
    <section className="py-20 px-6 lg:px-20 bg-surface-light overflow-hidden scroll-mt-32" id="testimonios">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-center font-serif text-3xl text-black mb-12">Historias de transformación</h2>
        
        <div className="relative group px-8 md:px-16">
          {/* Carousel Viewport */}
          <div className="overflow-hidden">
            <div 
              className={`flex transition-transform ${isTransitioning ? 'duration-500 ease-out' : 'duration-0'}`}
              style={{ transform: `translateX(-${currentIndex * (100 / visibleItems)}%)` }}
            >
              {extendedTestimonials.map((t, i) => (
                <div 
                  key={i} 
                  className="w-full md:w-1/2 lg:w-1/3 flex-shrink-0 px-3"
                >
                  <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 relative group/card hover:shadow-md transition-shadow flex flex-col min-h-[380px] h-full">
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
                    {/* Strict 5-line limit with line-clamp and fixed min-height to ensure space for button */}
                    <div className="overflow-hidden mb-4 min-h-[150px]">
                      <p className="text-black italic leading-relaxed font-sans line-clamp-5 text-sm md:text-base" style={{ display: '-webkit-box', WebkitBoxOrient: 'vertical', WebkitLineClamp: 5 }}>
                        {`"${t.text}"`}
                      </p>
                    </div>
                    
                    <button 
                      onClick={() => setSelectedTestimonial(t)}
                      className="text-primary font-bold text-sm mb-8 hover:underline text-left w-fit cursor-pointer decoration-2 underline-offset-4"
                    >
                      Ver testimonio
                    </button>

                    <div className="flex items-center gap-3 mt-auto">
                      <div className="size-10 rounded-full bg-primary/10 flex items-center justify-center overflow-hidden relative border border-primary/20">
                        {t.img ? (
                          <Image 
                            src={t.img}
                            alt={t.author}
                            fill
                            className="object-cover"
                          />
                        ) : (
                          <span className="text-primary font-bold text-xs">{getInitials(t.author)}</span>
                        )}
                      </div>
                      <div>
                        <p className="text-sm font-bold text-black font-sans">{t.author}</p>
                        <p className="text-xs text-black font-sans">{t.location}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows - Adjusted for better visibility */}
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

      {/* Modal Overlay */}
      {selectedTestimonial && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm transition-opacity duration-300"
          onClick={() => setSelectedTestimonial(null)}
        >
          <div 
            className="bg-white w-full max-w-2xl max-h-[90vh] rounded-3xl overflow-hidden shadow-2xl relative flex flex-col md:flex-row animate-in fade-in zoom-in duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button 
              onClick={() => setSelectedTestimonial(null)}
              className="absolute top-4 right-4 z-10 size-10 flex items-center justify-center rounded-full bg-white/80 backdrop-blur-md shadow-sm border border-slate-100 hover:bg-red-500 hover:text-white transition-colors group/close"
            >
              <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24" fill="currentColor" className="text-black group-hover/close:text-white">
                <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/>
              </svg>
            </button>

            {/* Biography Style Layout */}
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
                <h3 className="font-serif text-xl md:text-2xl text-white md:mb-1">{selectedTestimonial.author}</h3>
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
