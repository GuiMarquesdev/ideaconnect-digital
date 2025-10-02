import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Portfolio = () => {
  const projects = [
    {
      title: "Boutique Fashion House",
      category: "Branding",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=600&fit=crop",
      description: "Identidade visual completa para loja de moda de luxo"
    },
    {
      title: "Tech Startup MVP",
      category: "Desenvolvimento Web",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
      description: "Plataforma web responsiva para startup de tecnologia"
    },
    {
      title: "Clínica Saúde Integral",
      category: "Marketing Digital",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop",
      description: "Campanha digital integrada para clínica médica"
    },
    {
      title: "Restaurante Sabor & Arte",
      category: "Redes Sociais",
      image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&h=600&fit=crop",
      description: "Gestão completa de redes sociais e produção de conteúdo"
    },
    {
      title: "EcoLiving Store",
      category: "E-commerce",
      image: "https://images.unsplash.com/photo-1542838132-92c53300491e?w=800&h=600&fit=crop",
      description: "Loja online de produtos sustentáveis"
    },
    {
      title: "FitPro Academia",
      category: "Branding",
      image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&h=600&fit=crop",
      description: "Rebranding completo de academia fitness"
    },
    {
      title: "Construtora Alicerce",
      category: "Website",
      image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&h=600&fit=crop",
      description: "Site institucional com portfolio de obras"
    },
    {
      title: "Pet Care Center",
      category: "Marketing Digital",
      image: "https://images.unsplash.com/photo-1450778869180-41d0601e046e?w=800&h=600&fit=crop",
      description: "Estratégia digital para clínica veterinária"
    },
    {
      title: "Advocacia Silva & Costa",
      category: "Branding",
      image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&h=600&fit=crop",
      description: "Identidade visual para escritório de advocacia"
    }
  ];

  const categories = ["Todos", "Branding", "Desenvolvimento Web", "Marketing Digital", "Redes Sociais", "E-commerce"];

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-primary-light text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-playfair font-bold text-4xl md:text-6xl mb-6">
            Nosso Trabalho Fala por Nós
          </h1>
          <p className="font-lato text-lg md:text-xl max-w-3xl mx-auto opacity-90">
            Confira alguns dos projetos que tivemos o prazer de desenvolver para nossos clientes.
          </p>
        </div>
      </section>

      {/* Filter Badges */}
      <section className="py-8 bg-background border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category, index) => (
              <Badge
                key={index}
                variant={index === 0 ? "default" : "outline"}
                className="px-4 py-2 cursor-pointer hover:bg-accent hover:text-white transition-colors font-lato"
              >
                {category}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card 
                key={index}
                className="group overflow-hidden cursor-pointer hover:shadow-xl transition-all duration-300"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                    <Badge className="w-fit mb-2 bg-accent font-lato">
                      {project.category}
                    </Badge>
                    <h3 className="font-playfair font-bold text-2xl text-white mb-2">
                      {project.title}
                    </h3>
                    <p className="font-lato text-white/90 text-sm">
                      {project.description}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-playfair font-bold text-3xl md:text-4xl text-primary mb-6">
            Quer Ver Seu Projeto Aqui?
          </h2>
          <p className="font-lato text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Entre em contato e vamos conversar sobre como podemos transformar sua ideia em realidade.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Portfolio;
