import { Button } from "@/components/ui/button";
import { MessageCircle, Bot, Smartphone, Sparkles } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="hero-section min-h-screen flex items-center justify-center px-6 py-20">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center animate-fade-in">
          {/* Badge */}
          <div className="inline-block glass-card px-6 py-3 mb-8 rounded-full">
            <span className="text-sm font-medium text-muted-foreground flex items-center gap-2">
              <Bot className="w-4 h-4" />
              Assistente Virtual Inteligente
            </span>
          </div>
          
          {/* Main Heading */}
          <h1 className="text-6xl lg:text-8xl font-bold mb-8 leading-tight">
            <span className="gradient-text">Sou a Cici</span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl lg:text-3xl text-muted-foreground mb-12 max-w-4xl mx-auto leading-relaxed">
            Sua assistente virtual que facilita o dia-a-dia através do WhatsApp.
            <br />
            <span className="text-primary font-medium">Lembretes, organização financeira e informações inteligentes.</span>
          </p>
          
          {/* Feature Pills */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <div className="glass-card px-4 py-2 rounded-full">
              <span className="text-sm font-medium flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-primary" />
                Totalmente Gratuito
              </span>
            </div>
            <div className="glass-card px-4 py-2 rounded-full">
              <span className="text-sm font-medium flex items-center gap-2">
                <Smartphone className="w-4 h-4 text-primary" />
                Apenas no WhatsApp
              </span>
            </div>
            <div className="glass-card px-4 py-2 rounded-full">
              <span className="text-sm font-medium flex items-center gap-2">
                <Bot className="w-4 h-4 text-primary" />
                Inteligência Artificial
              </span>
            </div>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-10 py-6 text-xl rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              asChild
            >
              <a 
                href="https://wa.me/5511999999999?text=Olá%20Cici,%20gostaria%20de%20começar%20a%20usar%20seus%20serviços!"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="mr-3 h-6 w-6" />
                Falar com a Cici
              </a>
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="glass-card border-glass-border hover:bg-glass-hover px-10 py-6 text-xl rounded-2xl transition-all duration-300 hover:scale-105"
              onClick={() => window.location.href = '/login'}
            >
              Área do Cliente
            </Button>
          </div>
          
          {/* Visual Element */}
          <div className="relative max-w-3xl mx-auto">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/30 via-accent/30 to-primary/30 rounded-3xl blur-3xl animate-pulse"></div>
            <div className="relative glass-card p-8 rounded-3xl">
              <div className="text-center">
                <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center animate-float">
                  <MessageCircle className="w-12 h-12 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 gradient-text">Comece agora mesmo!</h3>
                <p className="text-muted-foreground text-lg">
                  Envie uma mensagem no WhatsApp e descubra como a Cici pode transformar sua rotina
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;