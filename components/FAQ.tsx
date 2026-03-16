"use client";

export default function FAQ() {
  const faqs = [
    {
      q: "¿qué es la biodesprogramación?",
      a: (
        <div className="space-y-4">
          <p className="font-bold text-primary">Comprender el origen para transformar tu vida</p>
          <p>La biodesprogramación es un enfoque terapéutico que busca identificar el origen emocional de los conflictos que experimentamos en nuestra vida.</p>
          <p>Muchos síntomas físicos, emociones intensas o patrones repetitivos pueden estar relacionados con programas inconscientes que se formaron a partir de experiencias vividas o heredadas dentro del sistema familiar.</p>
          <p>El inconsciente registra cada experiencia emocional significativa. Cuando estas experiencias no se integran o resuelven, pueden manifestarse posteriormente a través de síntomas, bloqueos o situaciones repetitivas.</p>
          <p>La biodesprogramación permite traer esa información a la conciencia para comprender su sentido, liberarla y crear nuevas formas de vivir la experiencia.</p>
          <p>No se trata únicamente de sanar un síntoma, sino de comprender el mensaje que el cuerpo o la vida están expresando.</p>
        </div>
      )
    },
    {
      q: "¿qué puedes trabajar?",
      a: (
        <div className="space-y-4">
          <p className="font-bold text-primary">Aspectos de tu vida que puedes transformar</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 bg-surface-light rounded-xl">
              <p className="font-bold text-sm mb-1">Salud y síntomas físicos</p>
              <p className="text-xs">El cuerpo puede expresar conflictos emocionales no resueltos a través de síntomas. Comprender su origen puede abrir la puerta a procesos de transformación profunda.</p>
            </div>
            <div className="p-4 bg-surface-light rounded-xl">
              <p className="font-bold text-sm mb-1">Emociones intensas</p>
              <p className="text-xs">Ansiedad, miedo, tristeza, enojo o culpa pueden tener raíces emocionales más profundas que pueden ser exploradas y comprendidas.</p>
            </div>
            <div className="p-4 bg-surface-light rounded-xl">
              <p className="font-bold text-sm mb-1">Relaciones</p>
              <p className="text-xs">Patrones repetitivos en pareja, conflictos familiares o dificultad para establecer vínculos sanos.</p>
            </div>
            <div className="p-4 bg-surface-light rounded-xl">
              <p className="font-bold text-sm mb-1">Prosperidad y dinero</p>
              <p className="text-xs">Creencias inconscientes relacionadas con la escasez, el éxito o el merecimiento pueden influir en la forma en que experimentamos la abundancia.</p>
            </div>
            <div className="p-4 bg-surface-light rounded-xl">
              <p className="font-bold text-sm mb-1">Autoestima</p>
              <p className="text-xs">Programas relacionados con el valor personal, la confianza y la seguridad interior.</p>
            </div>
            <div className="p-4 bg-surface-light rounded-xl">
              <p className="font-bold text-sm mb-1">Historia familiar</p>
              <p className="text-xs">Programas heredados del sistema familiar que pueden influir en decisiones, emociones y experiencias actuales.</p>
            </div>
          </div>
        </div>
      )
    },
    {
      q: "¿cómo funciona una sesión?",
      a: (
        <div className="space-y-4">
          <p className="font-bold text-primary">Un proceso de exploración profunda y consciente</p>
          <p>Cada sesión de biodesprogramación es un espacio seguro de acompañamiento donde la persona puede explorar el origen profundo de un conflicto o situación que desea comprender o transformar.</p>
          <div className="space-y-3">
            {[
              { t: "1. Motivo de consulta", d: "Se define claramente el síntoma, emoción o situación que se desea trabajar." },
              { t: "2. Exploración emocional", d: "Se investigan eventos significativos, experiencias y emociones relacionadas con el conflicto." },
              { t: "3. Identificación del programa inconsciente", d: "Se detectan patrones emocionales o creencias que pueden estar influyendo en la situación actual." },
              { t: "4. Toma de conciencia", d: "Comprender el origen del conflicto permite al inconsciente reorganizar la información emocional." },
              { t: "5. Integración", d: "Se generan nuevas percepciones y recursos internos que permiten transformar la experiencia." }
            ].map((step, idx) => (
              <div key={idx} className="flex gap-3">
                <div className="size-1.5 rounded-full bg-primary mt-2 shrink-0"></div>
                <div>
                  <p className="font-bold text-sm">{step.t}</p>
                  <p className="text-xs">{step.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )
    },
    {
      q: "¿cómo funciona una sesión de seguimiento?",
      a: (
        <div className="space-y-4">
          <p className="font-bold text-primary">Proceso de una sesión de seguimiento</p>
          <div className="space-y-3">
            {[
              { t: "1. Retomar Motivo de consulta", d: "Se redefine claramente el síntoma, emoción o situación que se desea trabajar." },
              { t: "2. Exploración emocional", d: "Se investigan eventos significativos, experiencias y emociones relacionadas con el conflicto. Y los movimientos internos sobre lo trabajado en la o las sesiones anteriores." },
              { t: "3. Identificación del programa inconsciente", d: "Se detectan patrones emocionales o creencias que pueden estar influyendo en la situación actual. Seguimiento a lo trabajado en la o las sesiones ateriores." },
              { t: "4. Toma de conciencia", d: "Comprender el origen del conflicto permite al inconsciente reorganizar la información emocional." },
              { t: "5. Integración", d: "Se generan nuevas percepciones y recursos internos que permiten transformar la experiencia." }
            ].map((step, idx) => (
              <div key={idx} className="flex gap-3">
                <div className="size-1.5 rounded-full bg-primary mt-2 shrink-0"></div>
                <div>
                  <p className="font-bold text-sm">{step.t}</p>
                  <p className="text-xs">{step.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )
    },
    {
      q: "¿tengo que dejar mi tratamiento médico?",
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
