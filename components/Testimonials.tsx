import Image from 'next/image';

export default function Testimonials() {
  const testimonials = [
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
    }

  ];

  return (
    <section className="py-20 px-6 lg:px-20 bg-surface-light overflow-hidden scroll-mt-32" id="testimonios">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-center font-serif text-3xl text-black mb-12">Historias de transformación</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-white p-8 rounded-xl shadow-sm relative group hover:shadow-md transition-shadow">
              <svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 -960 960 960" width="48" fill="currentColor" className="text-primary/10 absolute top-4 right-4 group-hover:text-primary/20 transition-colors">
                <path d="M580-240q-42 0-71-29t-29-71q0-42 29-71t71-29q42 0 71 29t29 71v10h-60v-10h60q0-100-30-100t-30-100q42 0 71 29t29 71q0 42-29 71t-71 29Zm-400 0q-42 0-71-29t-29-71q0-42 29-71t71-29q42 0 71 29t29 71v10h-60v-10h60q0-100-30-100t-30-100q42 0 71 29t29 71q0 42-29 71t-71 29Zm400 0q42 0 71 29t29 71v100h-300v-100q0-42 29-71t71-29Zm-400 0q42 0 71 29t29 71v100h-300v-100q0-42 29-71t71-29Z" visibility="hidden"/>
                <path d="M280-240q-33 0-56.5-23.5T200-320v-240h240v240q0 33-23.5 56.5T340-240h-60Zm400 0q-33 0-56.5-23.5T600-320v-240h240v240q0 33-23.5 56.5T760-240h-60ZM280-320h60v-160h-80v160h20Zm400 0h60v-160h-80v160h20Z" visibility="hidden"/>
                <path d="M240-240q-50 0-85-35t-35-85q0-50 35-85t85-35q11 0 21 2t19 6v-128q0-83 58.5-141.5T480-880q83 0 141.5 58.5T680-680v128q9-4 19-6t21-2q50 0 85 35t35 85q0 50-35 85t-85 35H640v80h80q83 0 141.5-58.5T880-360q0-83-58.5-141.5T680-560v-40q0-33-23.5-56.5T600-680q-33 0-56.5 23.5T520-600h-80q0-33-23.5-56.5T360-680q-33 0-56.5 23.5T280-600v40q0 83-58.5 141.5T80-360q0 83 58.5 141.5T280-160h80v-80h-80Z" visibility="hidden"/>
                {/* Traditional quote symbol */}
                <path d="M220-320q25 0 42.5-17.5T280-380q0-25-17.5-42.5T220-440q-11 0-21 4t-19 12q14-35 46.5-55.5T300-500v-80q-63 0-106.5 43.5T150-430q0 46 32 78t78 32Zm400 0q25 0 42.5-17.5T680-380q0-25-17.5-42.5T620-440q-11 0-21 4t-19 12q14-35 46.5-55.5T700-500v-80q-63 0-106.5 43.5T550-430q0 46 32 78t78 32Z"/>
              </svg>
              <div className="flex items-center gap-1 mb-4 text-yellow-500">
                {[1, 2, 3, 4, 5].map((s) => (
                  <svg key={s} xmlns="http://www.w3.org/2000/svg" height="16" viewBox="0 -960 960 960" width="16" fill="currentColor">
                    <path d="m233-120 65-281L80-590l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z"/>
                  </svg>
                ))}
              </div>
              <p className="text-black italic mb-6 leading-relaxed font-sans">{`"${t.text}"`}</p>
              <div className="flex items-center gap-3">
                <div className="size-10 rounded-full bg-slate-200 overflow-hidden relative">
                  <Image 
                    src={t.img}
                    alt={t.author}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="text-sm font-bold text-black font-sans">{t.author}</p>
                  <p className="text-xs text-black font-sans">{t.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
