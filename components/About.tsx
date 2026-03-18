import Image from 'next/image';

export default function About() {
  const certifications = [
    "Instituto de Biodesprogramación Fernando Sánchez G-26",
    "Certificación EC1158 'Implementación de Habilidades Socioemocionales y Metodolologías para Desarrollarlas'"
  ];

  return (
    <section className="py-20 px-6 lg:px-20 bg-white overflow-hidden scroll-mt-32" id="sobre-mi">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col-reverse md:flex-row items-center gap-12 bg-white rounded-3xl p-8 md:p-12 shadow-2xl shadow-slate-200/60 dark:shadow-none group">
          <div className="flex-1 space-y-6 relative">
            {/* Isotipo background */}
            <div className="absolute top-0 -left-10 w-64 h-64 md:w-80 md:h-80 opacity-100 z-0 pointer-events-none">
              <Image 
                src="/multimedia/isotipo.png"
                alt=""
                fill
                className="object-contain object-left-top opacity-30"
                priority
              />
            </div>
            
            <div className="relative z-10 space-y-6">
              <h2 className="font-serif text-3xl text-black">Hola, soy Dani Suachá</h2> 
              <h3 className="text-primary font-medium uppercase tracking-wide text-sm font-sans">Terapeuta en Biodesprogramación</h3>
              <p className="text-black leading-relaxed font-sans">
                Biodesprogramadora bilingüe certificada por el Instituto de Biodesprogramación Fernando Sánchez y certificación en Habilidades Socioemocionales, avalada por la SEP, la Red CONOCER y validez internacional.
  He ayudado a muchas personas a identificar y entender su situación y/o padecimientos, y a su vez a reprogramar su vida conscientemente.
              </p>
              <p className="text-black leading-relaxed font-sans">
                Creo firmemente que la enfermedad y los conflictos no son errores, sino soluciones biológicas de supervivencia que, una vez comprendidas, dejan de ser necesarias.
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
            <div className="relative w-72 h-80 md:w-80 md:h-96">
              <div className="absolute inset-0 border-2 border-primary/30 rounded-full translate-x-4 translate-y-4 group-hover:translate-x-6 group-hover:translate-y-6 transition-transform"></div>
              <div className="absolute inset-0 rounded-full overflow-hidden shadow-lg z-10">
                <Image 
                  src="/multimedia/dani2.jpeg"
                alt="Daniela - Terapeuta Profesional"
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
