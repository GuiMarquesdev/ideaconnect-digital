import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Users, Target, TrendingUp, Linkedin } from "lucide-react";
import aboutImage from "@/assets/about-team.jpg";
import caueImage from "@/assets/caue-alisson.jpg"; // Substitua o nome do arquivo e o caminho se necessário

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Criatividade",
      description: "Pensamos fora da caixa para criar soluções inovadoras",
    },
    {
      icon: Users,
      title: "Parceria",
      description: "Trabalhamos lado a lado com nossos clientes",
    },
    {
      icon: Target,
      title: "Transparência",
      description: "Comunicação clara e honesta em todas as etapas",
    },
    {
      icon: TrendingUp,
      title: "Resultados",
      description: "Focados em gerar impacto real no seu negócio",
    },
  ];

  const team = [
    {
      name: "Caue Alisson",
      role: "CEO & Marketing digital",
      image: caueImage,
      bio: "Programador de Jogos Digitais| Social Media| Redator| Atualmente estudante de Mídias Digitais pela UFPB",
      linkedin: "https://www.linkedin.com/in/cau%C3%AA-cavalcante-5a8729237/",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-primary-light text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-playfair font-bold text-4xl md:text-6xl mb-6">
            Nossa História: Paixão por Comunicação
          </h1>
          <p className="font-lato text-lg md:text-xl max-w-3xl mx-auto opacity-90">
            Acreditamos que cada marca tem uma história única para contar. Nossa
            missão é ajudá-la a comunicar essa história de forma autêntica e
            impactante.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src={aboutImage}
                alt="Nossa equipe"
                className="rounded-2xl shadow-xl w-full"
              />
            </div>
            <div>
              <h2 className="font-playfair font-bold text-3xl md:text-4xl text-primary mb-6">
                Quem Somos
              </h2>
              <div className="space-y-6 font-lato text-muted-foreground leading-relaxed">
                <p>
                  <strong className="text-primary">Missão:</strong> Conectar
                  marcas ao seu público através de estratégias criativas e
                  personalizadas que geram resultados mensuráveis.
                </p>
                <p>
                  <strong className="text-primary">Visão:</strong> Ser
                  referência em comunicação digital, reconhecida pela excelência
                  em transformar desafios em oportunidades de crescimento.
                </p>
                <p>
                  <strong className="text-primary">Valores:</strong> Acreditamos
                  em parcerias verdadeiras, transparência absoluta, criatividade
                  sem limites e foco em resultados reais.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-playfair font-bold text-4xl md:text-5xl text-primary mb-4">
              O Que Nos Move
            </h2>
            <p className="font-lato text-lg text-muted-foreground max-w-2xl mx-auto">
              Nossos pilares fundamentais que guiam cada decisão e ação
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card
                key={index}
                className="bg-background border-2 hover:border-accent transition-all"
              >
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <value.icon className="text-accent" size={32} />
                  </div>
                  <h3 className="font-playfair font-bold text-xl text-primary mb-2">
                    {value.title}
                  </h3>
                  <p className="font-lato text-sm text-muted-foreground">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-playfair font-bold text-4xl md:text-5xl text-primary mb-4">
              Nossa Equipe
            </h2>
            <p className="font-lato text-lg text-muted-foreground max-w-2xl mx-auto">
              Profissional apaixonado e experiente dedicado ao seu sucesso
            </p>
          </div>

          <div className="flex justify-center">
            {team.map((member, index) => (
              <Card
                key={index}
                className="overflow-hidden group hover:shadow-lg transition-all max-w-sm w-full"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-4">
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-accent transition-colors"
                    >
                      <Linkedin className="text-primary" size={20} />
                    </a>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="font-playfair font-bold text-xl text-primary mb-1">
                    {member.name}
                  </h3>
                  <p className="font-lato text-sm text-accent font-semibold mb-3">
                    {member.role}
                  </p>
                  <p className="font-lato text-sm text-muted-foreground">
                    {member.bio}
                  </p>
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

export default About;
