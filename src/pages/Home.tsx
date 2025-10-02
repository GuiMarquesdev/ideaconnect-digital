import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import { Card, CardContent } from "@/components/ui/card";
import { Globe, Share2, Palette, Quote } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Home = () => {
  const services = [
    {
      icon: Share2,
      title: "Gestão de Redes Sociais",
      description: "Criação de conteúdo estratégico, planejamento editorial e análise de resultados para suas redes sociais."
    },
    {
      icon: Globe,
      title: "Criação de Sites",
      description: "Sites responsivos e otimizados que convertem visitantes em clientes e fortalecem sua presença digital."
    },
    {
      icon: Palette,
      title: "Branding e Identidade Visual",
      description: "Desenvolvemos identidades visuais únicas que comunicam os valores e diferenciais da sua marca."
    }
  ];

  const testimonials = [
    {
      name: "Maria Silva",
      company: "Silva & Associados",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
      quote: "A Criative transformou nossa presença digital. Aumentamos em 300% nosso engajamento nas redes sociais!"
    },
    {
      name: "João Santos",
      company: "TechStart",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
      quote: "Profissionais excepcionais! O site que criaram superou todas as nossas expectativas."
    },
    {
      name: "Ana Costa",
      company: "Boutique Elegance",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
      quote: "A identidade visual que desenvolveram capturou perfeitamente a essência da nossa marca."
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <Hero
        title="Conectamos sua Marca ao Mundo Digital"
        subtitle="Estratégias de marketing e comunicação personalizadas para alavancar o seu negócio."
        ctaText="Conheça Nossos Serviços"
        ctaLink="/servicos"
      />

      {/* Services Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-playfair font-bold text-4xl md:text-5xl text-primary mb-4">
              Nossas Soluções
            </h2>
            <p className="font-lato text-lg text-muted-foreground max-w-2xl mx-auto">
              Oferecemos serviços completos para fortalecer sua presença digital
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card 
                key={index}
                className="border-2 hover:border-accent hover:shadow-lg transition-all duration-300 group"
              >
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-accent group-hover:scale-110 transition-all">
                    <service.icon className="text-accent group-hover:text-white" size={32} />
                  </div>
                  <h3 className="font-playfair font-bold text-2xl text-primary mb-4">
                    {service.title}
                  </h3>
                  <p className="font-lato text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/servicos">
              <Button size="lg" variant="outline" className="font-lato font-bold">
                Ver Todos os Serviços
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-playfair font-bold text-4xl md:text-5xl text-primary mb-4">
              O Que Dizem Nossos Clientes
            </h2>
            <p className="font-lato text-lg text-muted-foreground max-w-2xl mx-auto">
              Histórias de sucesso que nos motivam a fazer sempre o nosso melhor
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-background">
                <CardContent className="p-8">
                  <Quote className="text-accent mb-4" size={32} />
                  <p className="font-lato text-muted-foreground mb-6 italic leading-relaxed">
                    "{testimonial.quote}"
                  </p>
                  <div className="flex items-center space-x-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <p className="font-lato font-bold text-primary">
                        {testimonial.name}
                      </p>
                      <p className="font-lato text-sm text-muted-foreground">
                        {testimonial.company}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
