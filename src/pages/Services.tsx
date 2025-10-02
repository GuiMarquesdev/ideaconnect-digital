import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Search, Share2, Globe, Palette, BarChart, MessageSquare } from "lucide-react";
import servicesHero from "@/assets/services-hero.jpg";

const Services = () => {
  const services = [
    {
      icon: BarChart,
      title: "Marketing Digital",
      description: "Estratégias completas para aumentar sua presença online e gerar resultados mensuráveis.",
      features: [
        "SEO (Otimização para Motores de Busca)",
        "Google Ads e Meta Ads",
        "Marketing de Conteúdo",
        "Email Marketing",
        "Análise de Métricas e KPIs"
      ],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop"
    },
    {
      icon: Share2,
      title: "Gestão de Redes Sociais",
      description: "Criação e gestão estratégica do seu conteúdo nas principais plataformas sociais.",
      features: [
        "Criação de conteúdo autêntico",
        "Planejamento editorial mensal",
        "Design de posts e stories",
        "Monitoramento e engajamento",
        "Relatórios de performance"
      ],
      image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=600&fit=crop"
    },
    {
      icon: Globe,
      title: "Desenvolvimento Web",
      description: "Sites modernos, responsivos e otimizados que convertem visitantes em clientes.",
      features: [
        "Sites institucionais",
        "E-commerces completos",
        "Landing pages de alta conversão",
        "Manutenção e suporte técnico",
        "Integração com ferramentas"
      ],
      image: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=800&h=600&fit=crop"
    },
    {
      icon: Palette,
      title: "Branding e Design Gráfico",
      description: "Identidades visuais marcantes que comunicam os valores únicos da sua marca.",
      features: [
        "Criação de logotipo",
        "Manual de identidade visual",
        "Materiais impressos e digitais",
        "Embalagens e rótulos",
        "Apresentações corporativas"
      ],
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={servicesHero}
            alt="Serviços"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 to-accent/70" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10 text-center text-white">
          <h1 className="font-playfair font-bold text-4xl md:text-6xl mb-6">
            Soluções Completas para sua Marca Decolar
          </h1>
          <p className="font-lato text-lg md:text-xl max-w-3xl mx-auto opacity-90">
            Transformamos desafios em oportunidades através de estratégias personalizadas que geram resultados reais para o seu negócio.
          </p>
        </div>
      </section>

      {/* Services Detail */}
      {services.map((service, index) => (
        <section 
          key={index}
          className={`py-20 ${index % 2 === 0 ? 'bg-background' : 'bg-muted'}`}
        >
          <div className="container mx-auto px-4">
            <div className={`grid grid-cols-1 md:grid-cols-2 gap-12 items-center ${
              index % 2 === 1 ? 'md:flex-row-reverse' : ''
            }`}>
              {index % 2 === 0 ? (
                <>
                  <div>
                    <div className="flex items-center space-x-4 mb-6">
                      <div className="w-16 h-16 rounded-full flex items-center justify-center">
                        <service.icon className="text-accent" size={32} />
                      </div>
                      <h2 className="font-playfair font-bold text-3xl md:text-4xl text-primary">
                        {service.title}
                      </h2>
                    </div>
                    <p className="font-lato text-lg text-muted-foreground mb-8 leading-relaxed">
                      {service.description}
                    </p>
                    <ul className="space-y-3">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start space-x-3">
                          <ArrowRight className="text-accent mt-1 flex-shrink-0" size={20} />
                          <span className="font-lato text-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <img
                      src={service.image}
                      alt={service.title}
                      className="rounded-2xl shadow-xl w-full"
                    />
                  </div>
                </>
              ) : (
                <>
                  <div>
                    <img
                      src={service.image}
                      alt={service.title}
                      className="rounded-2xl shadow-xl w-full"
                    />
                  </div>
                  <div>
                    <div className="flex items-center space-x-4 mb-6">
                      <div className="w-16 h-16 rounded-full flex items-center justify-center">
                        <service.icon className="text-accent" size={32} />
                      </div>
                      <h2 className="font-playfair font-bold text-3xl md:text-4xl text-primary">
                        {service.title}
                      </h2>
                    </div>
                    <p className="font-lato text-lg text-muted-foreground mb-8 leading-relaxed">
                      {service.description}
                    </p>
                    <ul className="space-y-3">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start space-x-3">
                          <ArrowRight className="text-accent mt-1 flex-shrink-0" size={20} />
                          <span className="font-lato text-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </>
              )}
            </div>
          </div>
        </section>
      ))}

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-accent text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-playfair font-bold text-4xl md:text-5xl mb-6">
            Pronto para Começar?
          </h2>
          <p className="font-lato text-lg md:text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Entre em contato conosco e descubra como podemos ajudar seu negócio a alcançar novos patamares.
          </p>
          <Link to="/contato">
            <Button 
              size="lg" 
              className="bg-white text-primary hover:bg-white/90 font-lato font-bold text-lg px-8 py-6 rounded-full shadow-lg"
            >
              Solicite um Orçamento
              <ArrowRight className="ml-2" size={20} />
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
