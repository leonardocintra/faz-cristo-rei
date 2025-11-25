export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-coffee-medium text-cream">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-cream mb-6">
              Venha nos Visitar
            </h2>
            <p className="text-lg text-beige/90 mb-8">
              Estamos de portas abertas para receber você e sua família. Venha conhecer nossa produção e tomar um café conosco.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-orange-burnt mt-1">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
                <div>
                  <h4 className="font-bold text-xl">Localização</h4>
                  <p className="opacity-80">12 km de Ibiraci - MG</p>
                  <p className="opacity-80 text-sm mt-1">Acesso fácil pela rodovia principal.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-orange-burnt mt-1">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
                <div>
                  <h4 className="font-bold text-xl">Contato</h4>
                  <p className="opacity-80">(35) 99999-9999</p>
                  <p className="opacity-80">contato@fazendacristorei.com.br</p>
                </div>
              </div>
            </div>
          </div>

          <div className="h-80 bg-cream rounded-lg overflow-hidden shadow-lg relative">
             {/* Map Placeholder */}
             <div className="absolute inset-0 flex items-center justify-center bg-gray-200 text-gray-500">
               <span className="font-bold">Mapa da Localização</span>
             </div>
             {/* Ideally an iframe from Google Maps would go here */}
          </div>
        </div>
      </div>
    </section>
  );
}
