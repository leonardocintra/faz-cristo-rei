export default function Family() {
  const familyMembers = [
    { name: "Isac & Siomara", role: "Patriarcas", image: "https://placehold.co/300x300/3E2723/FFF8E1?text=Isac+e+Siomara" },
    { name: "Leonardo & Juliana", role: "4 Filhos", image: "https://placehold.co/300x300/5D4037/FFF8E1?text=Leonardo+e+Juliana" },
    { name: "Juliana & Guilherme", role: "6 Filhos", image: "https://placehold.co/300x300/8D6E63/FFF8E1?text=Juliana+e+Guilherme" },
    { name: "João Marcos & Adriely", role: "3 Filhos", image: "https://placehold.co/300x300/A1887F/FFF8E1?text=Joao+e+Adriely" },
    { name: "Sara & Hernane", role: "2 Filhos", image: "https://placehold.co/300x300/D7CCC8/3E2723?text=Sara+e+Hernane" },
    { name: "Pedro José & Stella", role: "1 Filho", image: "https://placehold.co/300x300/BCAAA4/3E2723?text=Pedro+e+Stella" },
    { name: "Daniel & Viviane", role: "3 Filhos", image: "https://placehold.co/300x300/8D6E63/FFF8E1?text=Daniel+e+Viviane" },
    { name: "Débora", role: "", image: "https://placehold.co/300x300/A1887F/FFF8E1?text=Debora" },
    { name: "Tobias", role: "", image: "https://placehold.co/300x300/D7CCC8/3E2723?text=Tobias" },
  ];

  return (
    <section id="family" className="py-20 bg-cream">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-coffee-dark mb-4">
            Nossa Família
          </h2>
          <p className="text-coffee-medium max-w-2xl mx-auto">
            A força da nossa fazenda vem da união de cada membro da nossa família.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {familyMembers.map((member, index) => (
            <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 text-center pb-6">
              <div className="w-full h-64 overflow-hidden">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h3 className="text-xl font-display font-bold text-coffee-dark mt-4 px-2">
                {member.name}
              </h3>
              {member.role && (
                <p className="text-orange-burnt font-medium text-sm mt-1">
                  {member.role}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
