import Image from 'next/image';

export default function Testimonials() {
  const testimonials = [
    {
      text: "Llevaba años con ansiedad y dolores de espalda. En solo dos sesiones entendí de dónde venía esa carga y el dolor desapareció.",
      author: "Mariana G.",
      location: "Madrid, España",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDoyX6_Drl50zgThkNEAwXulrnk1hjGRBiIoyO5R_TF-lF4AtYzizpN6cB7zg3Co0I5395U4iAy_5_d1ObQiCUUxrDEO9ITcctYxNlBaODdZHjXnCKywpQJ3PxM2NWPBY3zEpXRlbtbsiWT3N0A2soRJM-eJTkKEZXt6A3pg14oE6p4-idQDCVI79YB_yGNcXZ9lGtzxLBX9rVulTmMGYjsO5iNWwVkw7qSJBtp1HWyAS-5J6-0yfRxHDZ-vR4vAS4iCQv6GXugww"
    },
    {
      text: "Increíble la claridad que obtienes. Me ayudó a romper un patrón de relaciones tóxicas que repetía sin darme cuenta.",
      author: "Carlos R.",
      location: "CDMX, México",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCck62-sZOnVZwaa29kZJeMQ7fgGfzwVj9FR-E5OnBv5e2zsFzdxtJwVvbLaeIBmHwE3JA9xAw964cAiNeNuDvBiQBtrwRbRcbPPJ-DCom8JuKRJbdr0_xGoGDQoixm99c7ajsORefm3Y4p_5ge3d-lQvrpF34ftb5-phkwvNi2m-X11yt4wws1VsihE9PFmL7jxeKd8MNMvr2gr4t05erA9GE_fsPqdW3Ur4mKAr0ZQioacwL4fDZkLjXt31qy6y1gdxPhMSigkg"
    },
    {
      text: "Un enfoque muy profesional y cálido. Me sentí escuchada y comprendida desde el primer momento.",
      author: "Ana Sofia L.",
      location: "Bogotá, Colombia",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCebFHr5QaTtrAXQ-00EvIpCgWAqivRk1xrJXbJkYslp6aiEcAjLOrD_7_oBpLNgiLsjsT1O08feyJSRFfASkfVZiWy3sEV65H_us0ZY7pfHCJcQb5tuFZV8PGurZyNmJvyfuIGXBTL5YGGI4haI0PhVm4_Vhfd4bErKU-AcrD_sQ5_hCKg9wTYQrMXkObGroCsiCRddmwg3_hUh3QgGnNkL1qUGarb70Z08LEMkaPUwwWMlGajTuij4ayBJyagENAGqxqT0dxz5g"
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
