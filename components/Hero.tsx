import Link from 'next/link';

export default function Hero() {
  return (
    <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image Placeholder */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('https://images.pexels.com/photos/31896569/pexels-photo-31896569.jpeg')",
          filter: "brightness(0.6)"
        }}
      ></div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-cream mb-6 animate-fade-in drop-shadow-lg">
          Bem-vindo à <br/>
          <span className="text-orange-burnt">Fazenda Cristo Rei</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-beige mb-8 font-light animate-slide-up drop-shadow-md">
          Uma propriedade familiar, cultivada com amor e tradição por 8 irmãos.
          <br/>
          <span className="text-sm md:text-base mt-2 block opacity-90">12 km de Ibiraci - MG</span>
        </p>

        <Link 
          href="#about"
          className="inline-block bg-orange-burnt hover:bg-orange-burnt/90 text-cream font-bold py-3 px-8 rounded-full transition-all transform hover:scale-105 shadow-lg animate-slide-up"
        >
          Conheça Nossa História
        </Link>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce text-cream/80">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
        </svg>
      </div>
    </section>
  );
}
