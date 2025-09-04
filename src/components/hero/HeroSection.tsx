import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import heroImage from "@/assets/cici-hero.jpg";

const HeroSection = () => {
  return (
    <section className="hero-section min-h-screen flex items-center justify-center px-6 py-20">
      <div className="container max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left animate-fade-in">
            <div className="inline-block glass-card px-4 py-2 mb-6">
              <span className="text-sm font-medium text-muted-foreground">
                Assistente Virtual Inteligente
              </span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
              <span className="gradient-text">Sou a Cici</span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-muted-foreground mb-8 max-w-2xl">
              Sua assistente virtual que facilita o dia-a-dia através do WhatsApp.
              Lembretes, organização financeira e informações inteligentes.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                asChild
              >
                <a 
                  href="https://wa.me/5511999999999?text=Olá%20Cici,%20gostaria%20de%20começar%20a%20usar%20seus%20serviços!"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Falar com a Cici
                </a>
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                className="glass-card border-glass-border hover:bg-glass-hover px-8 py-6 text-lg rounded-xl"
                onClick={() => {
                  const featuresSection = document.getElementById('features');
                  featuresSection?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Conhecer Funcionalidades
              </Button>
            </div>
            
            <div className="mt-12 text-sm text-muted-foreground">
              <p>✨ Gratuito • 📱 Apenas no WhatsApp • 🤖 Inteligência Artificial</p>
            </div>
          </div>
          
          {/* Image */}
          <div className="relative animate-fade-in-delay">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-3xl blur-3xl"></div>
            <div className="relative glass-card p-8 rounded-3xl">
              <img 
                src={heroImage} 
                alt="Cici - Assistente Virtual" 
                className="w-full h-auto rounded-2xl animate-float"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;