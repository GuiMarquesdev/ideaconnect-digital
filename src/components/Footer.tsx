import { Link } from "react-router-dom";
import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo e Descrição */}
          <div className="space-y-4">
            <div className="flex items-center">
              <div className="flex flex-col">
                <span className="font-playfair font-bold text-lg leading-tight">
                  Criative
                </span>
                <span className="text-xs opacity-80 leading-tight">
                  Marketing Digital
                </span>
              </div>
            </div>
            <p className="text-sm opacity-90 font-lato">
              Ideias que conectam, estratégias que convertem.
            </p>
          </div>

          {/* Links Rápidos */}
          <div>
            <h3 className="font-playfair font-bold text-lg mb-4">
              Links Rápidos
            </h3>
            <ul className="space-y-2 font-lato">
              <li>
                <Link
                  to="/"
                  className="text-sm opacity-90 hover:opacity-100 hover:text-accent transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/sobre"
                  className="text-sm opacity-90 hover:opacity-100 hover:text-accent transition-colors"
                >
                  Sobre Nós
                </Link>
              </li>
              <li>
                <Link
                  to="/servicos"
                  className="text-sm opacity-90 hover:opacity-100 hover:text-accent transition-colors"
                >
                  Serviços
                </Link>
              </li>
              <li>
                <Link
                  to="/portfolio"
                  className="text-sm opacity-90 hover:opacity-100 hover:text-accent transition-colors"
                >
                  Portfólio
                </Link>
              </li>
              <li>
                <Link
                  to="/contato"
                  className="text-sm opacity-90 hover:opacity-100 hover:text-accent transition-colors"
                >
                  Contato
                </Link>
              </li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h3 className="font-playfair font-bold text-lg mb-4">Contato</h3>
            <ul className="space-y-3 font-lato">
              <li className="flex items-start space-x-2">
                <Phone size={16} className="mt-1 opacity-80" />
                <span className="text-sm opacity-90">(83) 9420-8943</span>
              </li>
              <li className="flex items-start space-x-2">
                <Mail size={16} className="mt-1 opacity-80" />
                <span className="text-sm opacity-90">
                  cauecavalcantecontato@gmail.com
                </span>
              </li>
              <li className="flex items-start space-x-2">
                <MapPin size={16} className="mt-1 opacity-80 flex-shrink-0" />
                <span className="text-sm opacity-90">
                  R. Rad. Antônio Assunção de Jesus, 290 - Jardim Cidade
                  Universitária, João Pessoa - PB
                </span>
              </li>
            </ul>
          </div>

          {/* Redes Sociais */}
          <div>
            <h3 className="font-playfair font-bold text-lg mb-4">
              Redes Sociais
            </h3>
            <div className="flex space-x-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 hover:bg-accent rounded-full flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 hover:bg-accent rounded-full flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 hover:bg-accent rounded-full flex items-center justify-center transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/10 mt-8 pt-8 text-center">
          <p className="text-sm opacity-80 font-lato">
            © {currentYear} Criative - Comunicação & Marketing Digital.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
