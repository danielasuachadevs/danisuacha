import Link from 'next/link';

export default function PainPoints() {
  const cards = [
    {
      title: "Ansiedad constante",
      description: "Sensación de inquietud, miedo al futuro o nerviosismo sin un motivo aparente en tu día a día.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24" fill="currentColor">
          <path d="M480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-60q142 0 241-99t99-241q0-142-99-241t-241-99q-142 0-241 99t-99 241q0 142 99 241t241 99Zm0-340Zm-50 140h100v-200H430v200Zm0 100h100v-80H430v80Z"/>
        </svg>
      )
    },
    {
      title: "Conflictos de pareja",
      description: "Dificultades recurrentes, discusiones cíclicas o sensación de desconexión en tus relaciones afectivas.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24" fill="currentColor">
          <path d="m480-120-58-52q-101-91-167-157T150-447.5Q111-500 95.5-544T80-634q0-94 63-157t157-63q52 0 99 22t81 62q34-40 81-62t99-22q94 0 157 63t63 157q0 46-15.5 90T810-447.5Q771-395 705-329T538-172l-58 52Zm0-108q96-86 158-147.5t101.5-108.5Q776-432 792-474t16-80q0-68-46-114t-114-46q-51 0-95 28t-70 77h-6a75 75 0 0 1-70-77 113 113 0 0 0-95-28q-68 0-114 46t-46 114q0 38 16 80t52.5 90Q252-404 314-342.5T472-228h8Z"/>
        </svg>
      )
    },
    {
      title: "Síntomas físicos",
      description: "Dolores, alergias o malestares crónicos que la medicina tradicional no logra explicar completamente.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24" fill="currentColor">
          <path d="M480-40q-8 0-15-2.5t-13-8.5Q326-160 216-302.5T106-538q0-165 110.5-260.5T480-894q153 0 263.5 95.5T854-538q0 159-110 301.5T488-51q-6 6-13 8.5t-15 2.5Zm0-60q111-127 181.5-236.5T732-538q0-129-87.5-201.5T480-812q-167 0-254.5 72.5T138-538q0 92 70.5 201.5T390-100q30-35 90-100Z"/>
        </svg>
      )
    },
    {
      title: "Bloqueos emocionales",
      description: "Sentir que no puedes avanzar, procrastinación extrema o sensación de estar 'atrapado' en la vida.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24" fill="currentColor">
          <path d="M240-80v-400h80v400h-80Zm280 0v-400h80v400h-80Zm280 0v-400h80v400h-80ZM120-560v-80h720v80H120Zm0-160v-80h720v80H120Z"/>
        </svg>
      )
    },
    {
      title: "Patrones repetitivos",
      description: "Situaciones económicas, laborales o personales que se repiten una y otra vez en tu historia.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24" fill="currentColor">
          <path d="M480-160q-134 0-227-93t-93-227q0-134 93-227t227-93q69 0 131 28.5T722-690l88-88v258H552l88-88q-36-34-84.5-53T480-680q-100 0-170 70t-70 170q0 100 70 170t170 70q77 0 139-44t87-116h84q-30 111-121.5 180.5T480-160Z"/>
        </svg>
      )
    }
  ];

  return (
    <section className="py-20 px-6 lg:px-20 bg-surface-light overflow-hidden">
      <div className="mx-auto max-max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl text-black mb-4">¿Te está pasando algo de esto?</h2>
          <p className="text-black max-w-2xl mx-auto font-sans">
            A veces el cuerpo y la mente nos envían señales claras de que algo necesita ser atendido.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((card, index) => (
            <div 
              key={index} 
              className="group bg-white p-8 rounded-xl border border-primary/5 hover:border-primary/20 shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className="size-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4 group-hover:scale-110 transition-transform">
                {card.icon}
              </div>
              <h3 className="text-lg font-bold text-black mb-2 font-sans">{card.title}</h3>
              <p className="text-black text-sm leading-relaxed font-sans">{card.description}</p>
            </div>
          ))}
          <div className="group bg-white p-8 rounded-xl border border-primary/5 hover:border-primary/20 shadow-sm hover:shadow-md transition-all flex flex-col justify-center items-center text-center">
            <h3 className="text-lg font-bold text-primary mb-2 font-sans">¿Te identificas?</h3>
            <p className="text-black text-sm mb-4 font-sans">No tienes que vivir con esto para siempre.</p>
            <Link 
              href="https://wa.me/524777657492" 
              target="_blank"
              className="text-primary font-bold text-sm hover:underline hover:scale-[1.02] active:scale-95 transition-all flex items-center gap-1 group/link"
            >
              Hablemos ahora 
              <svg xmlns="http://www.w3.org/2000/svg" height="18" viewBox="0 -960 960 960" width="18" fill="currentColor" className="group-hover/link:translate-x-1 transition-transform">
                <path d="M647-440H160v-80h487L423-744l57-56 320 320-320 320-57-56 224-224Z"/>
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
