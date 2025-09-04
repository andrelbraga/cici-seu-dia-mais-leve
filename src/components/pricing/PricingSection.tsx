import { Button } from "@/components/ui/button";
import { Check, Star, Sparkles } from "lucide-react";

const PricingSection = () => {
  const plans = [
    {
      name: "Free",
      price: "0",
      period: "Por mês",
      description: "Perfeito para uso pessoal básico",
      features: [
        "Até 50 lembretes por mês",
        "Informações básicas",
        "Suporte via WhatsApp",
        "Organização simples"
      ],
      popular: false,
      cta: "Começar Grátis"
    },
    {
      name: "POPULAR",
      price: "24",
      period: "Por mês",
      description: "Ideal para usuários ativos",
      features: [
        "Lembretes ilimitados",
        "Análise financeira avançada",
        "Relatórios personalizados",
        "Suporte prioritário",
        "Integração com calendário",
        "Backup automático"
      ],
      popular: true,
      cta: "Começar Agora"
    },
    {
      name: "ENTERPRISE",
      price: "49",
      period: "Por mês",
      description: "Para empresas e equipes",
      features: [
        "Tudo do plano Popular",
        "Múltiplos usuários",
        "Dashboard empresarial",
        "API personalizada",
        "Suporte 24/7",
        "Treinamento dedicado"
      ],
      popular: false,
      cta: "Falar com Vendas"
    }
  ];

  return (
    <section id="pricing" className="py-20 px-6">
      <div className="container max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold gradient-text mb-4">
            Pricing & Plan
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Escolha o plano ideal para suas necessidades
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`glass-card p-8 rounded-3xl animate-fade-in relative ${
                plan.popular ? 'ring-2 ring-primary shadow-purple' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium flex items-center gap-1">
                    <Star className="w-4 h-4" />
                    {plan.name}
                  </div>
                </div>
              )}
              
              {!plan.popular && (
                <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
              )}
              
              <div className="mb-4">
                <span className="text-4xl font-bold gradient-text">R${plan.price}</span>
                <span className="text-muted-foreground">/{plan.period}</span>
              </div>
              
              <p className="text-muted-foreground mb-6">{plan.description}</p>
              
              <Button 
                className={`w-full mb-6 ${
                  plan.popular 
                    ? 'bg-primary hover:bg-primary-dark text-primary-foreground' 
                    : 'variant-outline border-primary text-primary hover:bg-primary hover:text-primary-foreground'
                }`}
                size="lg"
              >
                {plan.cta}
              </Button>
              
              <ul className="space-y-3">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-success flex-shrink-0" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;