import { Button } from "@/components/ui/button";
import { MessageCircle, Bot, Smartphone, Sparkles } from "lucide-react";

const HeroSection = () => {
  return (
    <section id="hero" className="hero-section min-h-screen flex items-center justify-center px-6 py-32">
      <div className="container max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-left animate-fade-in">
            {/* Badge */}
            <div className="inline-block glass-card px-4 py-2 mb-6 rounded-full">
              <span className="text-sm font-medium text-primary flex items-center gap-2">
                <Bot className="w-4 h-4" />
                Sed Imperdiet Enim IuVitae Viverra Justo
              </span>
            </div>
            
            {/* Main Heading */}
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
              <span className="gradient-text">Sou a Cici</span>
            </h1>
            
            {/* Subtitle */}
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Sua assistente virtual que facilita o dia-a-dia através do WhatsApp. 
              Lembretes, organização financeira e informações inteligentes.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary-dark text-primary-foreground px-8 py-4 text-lg rounded-xl shadow-purple hover:shadow-xl transition-all duration-300"
                asChild
              >
                <a 
                  href="https://wa.me/5511999999999?text=Olá%20Cici,%20gostaria%20de%20começar%20a%20usar%20seus%20serviços!"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Começar Agora
                </a>
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-4 text-lg rounded-xl transition-all duration-300"
                onClick={() => {
                  const featuresSection = document.getElementById('features');
                  featuresSection?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Ver Demo
              </Button>
            </div>

            {/* Feature Pills */}
            <div className="flex flex-wrap gap-3">
              <div className="glass-card px-3 py-1 rounded-full">
                <span className="text-sm font-medium flex items-center gap-1">
                  <Sparkles className="w-3 h-3 text-primary" />
                  Gratuito
                </span>
              </div>
              <div className="glass-card px-3 py-1 rounded-full">
                <span className="text-sm font-medium flex items-center gap-1">
                  <Smartphone className="w-3 h-3 text-primary" />
                  WhatsApp
                </span>
              </div>
              <div className="glass-card px-3 py-1 rounded-full">
                <span className="text-sm font-medium flex items-center gap-1">
                  <Bot className="w-3 h-3 text-primary" />
                  IA Avançada
                </span>
              </div>
            </div>
          </div>
          
          {/* Right Content - Dashboard Mockup */}
          <div className="relative animate-fade-in-delay">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-3xl blur-3xl animate-pulse"></div>
            <div className="relative glass-card p-6 rounded-3xl shadow-purple">
              <div className="bg-gradient-card rounded-2xl p-6 space-y-4">
                {/* Header */}
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold gradient-text">Painel da Cici</h3>
                  <div className="w-3 h-3 bg-success rounded-full animate-pulse"></div>
                </div>
                
                {/* Chat Preview */}
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center">
                      <Bot className="w-4 h-4 text-white" />
                    </div>
                    <div className="glass-card p-3 rounded-lg max-w-xs">
                      <p className="text-sm">Olá! Sou a Cici, sua assistente virtual. Como posso ajudar hoje?</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3 justify-end">
                    <div className="bg-primary text-primary-foreground p-3 rounded-lg max-w-xs">
                      <p className="text-sm">Preciso lembrar de pagar a conta de luz amanhã</p>
                    </div>
                    <div className="w-8 h-8 bg-muted rounded-full"></div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center">
                      <Bot className="w-4 h-4 text-white" />
                    </div>
                    <div className="glass-card p-3 rounded-lg max-w-xs">
                      <p className="text-sm">✅ Lembrete criado! Te aviso amanhã às 09:00.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;