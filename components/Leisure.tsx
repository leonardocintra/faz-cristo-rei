export default function Leisure() {
  return (
    <section id="leisure" className="py-20 bg-coffee-dark text-cream relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-10 left-10 w-64 h-64 rounded-full bg-orange-burnt blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-green-forest blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-5xl font-display font-bold text-orange-burnt mb-6">
              Momentos de Lazer
            </h2>
            <p className="text-lg text-beige/90 mb-6 leading-relaxed">
              A varanda da nossa casa sede é o coração pulsante da Fazenda Cristo Rei. É aqui que a família se reúne para celebrar a vida.
            </p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center gap-3">
                <span className="bg-orange-burnt p-2 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-cream">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1A3.75 3.75 0 0012 18z" />
                  </svg>
                </span>
                <span className="font-medium">Churrascos e Confraternizações</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="bg-orange-burnt p-2 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-cream">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 9l10.5-3m0 6.553v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 11-.99-3.467l2.31-.66a2.25 2.25 0 001.632-2.163zm0 0V2.25L9 5.25v10.303m0 0v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 11-.99-3.467l2.31-.66a2.25 2.25 0 001.632-2.163zm0 0V5.25" />
                  </svg>
                </span>
                <span className="font-medium">Música de Viola e Violão</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="bg-orange-burnt p-2 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-cream">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                  </svg>
                </span>
                <span className="font-medium">União e Alegria</span>
              </li>
            </ul>
          </div>

          <div className="lg:w-1/2 grid grid-cols-2 gap-4">
             <img 
               src="https://placehold.co/400x500/D84315/FFF8E1?text=Roda+de+Viola" 
               alt="Roda de viola" 
               className="rounded-lg shadow-lg transform translate-y-4 hover:scale-105 transition-transform duration-500"
             />
             <img 
               src="https://placehold.co/400x500/5D4037/FFF8E1?text=Churrasco" 
               alt="Churrasco em família" 
               className="rounded-lg shadow-lg transform -translate-y-4 hover:scale-105 transition-transform duration-500"
             />
          </div>
        </div>
      </div>
    </section>
  );
}
