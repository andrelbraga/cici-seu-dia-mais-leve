import { Button } from "@/components/ui/button";
import { MessageCircle, Sparkles } from "lucide-react";

const CTASection = () => {
  const whatsappLink = "https://wa.me/5511999999999?text=Olá%20Cici,%20gostaria%20de%20começar%20a%20usar%20seus%20serviços!";

  return (
    <section className="py-24 px-6">
      <div className="container max-w-4xl mx-auto text-center">
        <div className="glass-card p-12 rounded-3xl relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5 rounded-3xl"></div>
          <div className="absolute top-8 right-8 opacity-20">
            <Sparkles className="h-20 w-20 text-primary" />
          </div>
          <div className="absolute bottom-8 left-8 opacity-20">
            <Sparkles className="h-16 w-16 text-accent" />
          </div>
          
          <div className="relative z-10">
            <div className="inline-block glass-card px-4 py-2 mb-6">
              <span className="text-sm font-medium text-muted-foreground">
                Comece Agora
              </span>
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              <span className="gradient-text">Pronta para facilitar</span>
              <br />
              seu dia-a-dia?
            </h2>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Converse com a Cici agora mesmo no WhatsApp e descubra como ela pode 
              transformar sua rotina com inteligência artificial.
            </p>
            
            <Button 
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-12 py-6 text-xl rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
              asChild
            >
              <a 
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="mr-3 h-6 w-6" />
                Falar com a Cici no WhatsApp
              </a>
            </Button>
            
            <div className="mt-8 text-sm text-muted-foreground">
              <p>✨ Totalmente gratuito • ⚡ Resposta instantânea • 🔒 Seguro e privado</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;