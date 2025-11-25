import Image from 'next/image';

export default function About() {
  return (
    <section id="about" className="py-20 bg-cream">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-coffee-dark mb-4">
            Nossa História
          </h2>
          <div className="w-24 h-1 bg-orange-burnt mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 text-lg text-coffee-medium leading-relaxed">
            <p>
              A <strong>Fazenda Cristo Rei</strong> é muito mais do que uma propriedade rural; é o legado vivo de uma família unida pelo amor à terra e ao trabalho.
            </p>
            <p>
              Localizada a apenas 12 km de Ibiraci - MG, nossa fazenda é administrada com dedicação por <strong>8 irmãos</strong> que, juntos, mantêm viva a tradição de seus pais, Isac e Siomara.
            </p>
            <p>
              Aqui, cada grão de café colhido, cada animal criado e cada fruto da terra carrega a essência de nossa união. Acreditamos que o trabalho honesto e a colaboração familiar são os pilares para uma vida plena e próspera no campo.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="relative h-64 rounded-lg overflow-hidden shadow-lg transform translate-y-8">
               {/* Placeholder for Family Working */}
               <div className="absolute inset-0 bg-coffee-light flex items-center justify-center text-cream text-center p-4">
                  <span className="font-display">Família Reunida</span>
               </div>
               {/* Ideally use next/image here with real src */}
               <img 
                 src="https://placehold.co/400x600/5D4037/FFF8E1?text=Familia+Trabalhando" 
                 alt="Família trabalhando na fazenda" 
                 className="object-cover w-full h-full hover:scale-105 transition-transform duration-500"
               />
            </div>
            <div className="relative h-64 rounded-lg overflow-hidden shadow-lg">
               {/* Placeholder for Farm Landscape */}
               <img 
                 src="https://placehold.co/400x600/8D6E63/FFF8E1?text=Paisagem+da+Fazenda" 
                 alt="Paisagem da Fazenda Cristo Rei" 
                 className="object-cover w-full h-full hover:scale-105 transition-transform duration-500"
               />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
