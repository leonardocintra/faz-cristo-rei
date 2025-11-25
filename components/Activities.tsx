export default function Activities() {
  const activities = [
    {
      title: "Café",
      description: "Cultivo, colheita e processamento de café de alta qualidade.",
      image: "https://placehold.co/600x400/3E2723/FFF8E1?text=Cafezal",
    },
    {
      title: "Avicultura",
      description: "Criação de galinhas caipiras com todo o cuidado.",
      image: "https://placehold.co/600x400/D84315/FFF8E1?text=Avicultura",
    },
    {
      title: "Piscicultura",
      description: "Criação de peixes em tanques com água fresca.",
      image: "https://placehold.co/600x400/2E7D32/FFF8E1?text=Piscicultura",
    },
    {
      title: "Pecuária",
      description: "Gado tratado com respeito e boas práticas.",
      image: "https://placehold.co/600x400/5D4037/FFF8E1?text=Pecuaria",
    },
    {
      title: "Horta",
      description: "Hortaliças e vegetais frescos, direto da terra para a mesa.",
      image: "https://placehold.co/600x400/A5D6A7/3E2723?text=Horta",
    },
  ];

  return (
    <section id="activities" className="py-20 bg-beige">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-coffee-dark mb-4">
            Nossas Atividades
          </h2>
          <p className="text-coffee-medium max-w-2xl mx-auto">
            A diversidade da nossa produção reflete o nosso compromisso com a autossuficiência e a qualidade.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {activities.map((activity, index) => (
            <div 
              key={index} 
              className="group bg-cream rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="relative h-48 overflow-hidden">
                <div className="absolute inset-0 bg-coffee-dark/20 group-hover:bg-transparent transition-colors z-10"></div>
                <img 
                  src={activity.image} 
                  alt={activity.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-display font-bold text-coffee-dark mb-2 group-hover:text-orange-burnt transition-colors">
                  {activity.title}
                </h3>
                <p className="text-coffee-medium">
                  {activity.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
