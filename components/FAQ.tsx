"use client";

export default function FAQ() {
  const faqs = [
    {
      q: "¿Cómo es una sesión online?",
      a: "Nos conectamos a través de Google Meet. Es igual de efectiva que una sesión presencial, ya que trabajamos con el diálogo y la introspección. Necesitas un lugar tranquilo y buena conexión a internet."
    },
    {
      q: "¿Cuántas sesiones necesito?",
      a: "Depende de cada persona y del conflicto a tratar. Muchas personas experimentan cambios significativos desde la primera o segunda sesión. Generalmente, procesos específicos toman entre 1 y 4 sesiones."
    },
    {
      q: "¿Qué pasa si necesito reagendar?",
      a: "Puedes reagendar tu sesión sin costo hasta 24 horas antes de la cita programada directamente desde el correo de confirmación."
    },
    {
      q: "¿Tengo que dejar mi tratamiento médico?",
      a: "Absolutamente no. La biodeprogramación es complementaria a la medicina. Nunca debes suspender medicación ni tratamientos sin la autorización de tu médico."
    }
  ];

  return (
    <section className="py-20 px-6 lg:px-20 bg-white overflow-hidden scroll-mt-32" id="faq">
      <div className="mx-auto max-w-3xl">
        <h2 className="text-center font-serif text-3xl text-black mb-12">Preguntas Frecuentes</h2>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <details 
              key={i} 
              className="group bg-white rounded-lg border border-primary/10 open:border-primary/30 transition-all duration-300"
            >
              <summary className="flex justify-between items-center font-bold cursor-pointer list-none p-6 text-black group-open:bg-primary group-open:text-white transition-all duration-300 rounded-t-lg group-open:mb-4 font-sans">
                <span>{faq.q}</span>
                <span className="transition-transform group-open:rotate-180 text-primary group-open:text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24" fill="currentColor">
                    <path d="M480-345 240-585l56-56 184 184 184-184 56 56-240 240Z"/>
                  </svg>
                </span>
              </summary>
              <div className="text-black px-6 pb-6 pt-0 text-sm leading-relaxed font-sans animate-in fade-in slide-in-from-top-2 duration-300">
                {faq.a}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
