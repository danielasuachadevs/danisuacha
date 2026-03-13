import Image from 'next/image';

export default function About() {
  const certifications = ["Certificada en NMG", "Master en PNL", "Hipnosis Ericksoniana"];

  return (
    <section className="py-20 px-6 lg:px-20 bg-white overflow-hidden scroll-mt-32" id="sobre-mi">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col-reverse md:flex-row items-center gap-12 bg-white rounded-3xl p-8 md:p-12 shadow-2xl shadow-slate-200/60 dark:shadow-none group">
          <div className="flex-1 space-y-6">
            <h2 className="font-serif text-3xl text-black">Hola, soy Daniela</h2>
            <h3 className="text-primary font-medium uppercase tracking-wide text-sm font-sans">Terapeuta en Biodeprogramación</h3>
            <p className="text-black leading-relaxed font-sans">
              Mi misión es acompañarte a descifrar el lenguaje de tu cuerpo y tus emociones. Con más de 8 años de experiencia, he ayudado a cientos de personas a reencontrarse con su bienestar natural.
            </p>
            <p className="text-black leading-relaxed font-sans">
              Creo firmemente que la enfermedad y los conflictos no son errores, sino soluciones biológicas de supervivencia que, una vez comprendidas, dejan de ser necesarias.
            </p>
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
