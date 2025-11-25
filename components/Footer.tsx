export default function Footer() {
  return (
    <footer className="bg-coffee-dark text-beige py-12 border-t border-coffee-light/30">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0 text-center md:text-left">
            <h3 className="text-2xl font-display font-bold text-orange-burnt mb-2">Fazenda Cristo Rei</h3>
            <p className="text-sm opacity-80">Tradição e qualidade no coração de Minas Gerais.</p>
            <p className="text-sm opacity-80 mt-1">12 km de Ibiraci - MG</p>
          </div>

          <div className="flex flex-col items-center md:items-end">
            <p className="text-sm mb-2 opacity-70">
              &copy; {new Date().getFullYear()} Fazenda Cristo Rei. Todos os direitos reservados.
            </p>
            <p className="text-sm font-medium">
              Desenvolvido com amor por{' '}
              <a 
                href="https://leonardocintra.com.br" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-orange-burnt hover:text-cream transition-colors underline decoration-dotted"
              >
                Leonardo Cintra
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
