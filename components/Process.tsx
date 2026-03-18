export default function Process() {
  const steps = [
    {
      num: "1",
      title: "Elige tu horario",
      desc: "Selecciona el día y hora que mejor te convenga en el calendario."
    },
    {
      num: "2",
      title: "Pago seguro",
      desc: "Confirma tu sesión y realiza el pago."
    },
    {
      num: "3",
      title: "Confirmación",
      desc: "Recibirás un email automático con el enlace de Zoom."
    },
    {
      num: "4",
      title: "Sesión 1 a 1",
      desc: "Nos conectamos para trabajar en tu motivo de consulta."
    }
  ];

  return (
    <section className="py-20 px-6 lg:px-20 bg-surface-light border-y border-primary/10 overflow-hidden">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl text-black mb-4">Tu camino hacia el bienestar</h2>
          <p className="text-black font-sans">Cuatro pasos sencillos para comenzar tu transformación</p>
        </div>
        <div className="relative">
          {/* Line connector (desktop) */}
          <div className="hidden md:block absolute top-[2.5rem] left-0 w-full h-0.5 bg-slate-300 z-0"></div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, index) => (
              <div key={index} className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm flex flex-col items-center text-center group hover:shadow-md transition-shadow">
                <div className="size-10 rounded-full bg-primary text-white flex items-center justify-center font-bold mb-4 group-hover:scale-110 transition-transform">
                  {step.num}
                </div>
                <h4 className="font-bold text-black mb-2 font-sans">{step.title}</h4>
                <p className="text-xs text-black font-sans">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
