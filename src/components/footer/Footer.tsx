import { MessageCircle, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary/30 backdrop-blur-xl border-t border-glass-border">
      <div className="container max-w-7xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center mr-3">
                <MessageCircle className="h-6 w-6 text-primary-foreground" />
              </div>
              <div>
                <h3 className="text-xl font-bold gradient-text">Cici</h3>
                <p className="text-sm text-muted-foreground">Sou a Cici</p>
              </div>
            </div>
            <p className="text-muted-foreground mb-4 max-w-md">
              Sua assistente virtual inteligente que facilita o dia-a-dia através do WhatsApp.
              Lembretes, organização financeira e informações ao seu alcance.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://wa.me/5511999999999" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <MessageCircle className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Features */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-foreground">Funcionalidades</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>Lembretes Inteligentes</li>
              <li>Gestão Financeira</li>
              <li>Informações com IA</li>
              <li>Notificações Personalizadas</li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-foreground">Suporte</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>Como usar</li>
              <li>FAQ</li>
              <li>Privacidade</li>
              <li>Termos de uso</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-glass-border mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-muted-foreground text-sm mb-4 md:mb-0">
              © {currentYear} Cici. Todos os direitos reservados.
            </p>
            <div className="flex items-center text-sm text-muted-foreground">
              <span>Feito com</span>
              <Heart className="h-4 w-4 mx-1 text-red-500 fill-current" />
              <span>para facilitar sua vida</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;