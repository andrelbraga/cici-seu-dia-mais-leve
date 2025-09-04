import { Button } from "@/components/ui/button";
import { MessageCircle, Sparkles } from "lucide-react";

const CTASection = () => {
  const whatsappLink = "https://wa.me/5511999999999?text=Olá%20Cici,%20gostaria%20de%20começar%20a%20usar%20seus%20serviços!";

  return (
    <section className="py-20 px-6 bg-gradient-to-r from-primary to-accent">
      <div className="container max-w-4xl mx-auto text-center">
        <div className="text-white">
          {/* Heading */}
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            What are you waiting for?
          </h2>
          
          {/* CTA Button */}
          <Button 
            size="lg" 
            className="bg-white text-primary hover:bg-white/90 px-10 py-6 text-xl rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            asChild
          >
            <a 
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle className="mr-3 h-6 w-6" />
              Começar Agora
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;