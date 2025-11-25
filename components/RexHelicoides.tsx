export default function RexHelicoides() {
  return (
    <section id="rex-helicoides" className="py-16 bg-gray-50 border-t border-gray-200">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="md:w-2/3">
          <h3 className="text-2xl font-sans font-semibold text-gray-800 mb-2">
            Rex Helicoides
          </h3>
          <p className="text-gray-600 leading-relaxed">
            Laboratório dedicado ao desenvolvimento e testes de componentes agrícolas inovadores. 
            Aliando tecnologia e tradição para impulsionar a produtividade no campo.
          </p>
        </div>
        <div className="md:w-1/3 flex justify-center md:justify-end">
          <div className="w-32 h-32 bg-gray-200 rounded-full flex items-center justify-center text-gray-400 text-xs text-center p-2">
            Logotipo<br/>Rex Helicoides
          </div>
        </div>
      </div>
    </section>
  );
}
