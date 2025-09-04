import { Bell, DollarSign, Brain, Clock, Target, MessageSquare } from "lucide-react";

const features = [
  {
    icon: Bell,
    title: "Lembretes Inteligentes",
    description: "Lembretes de medicamentos, compromissos e tarefas recorrentes. Nunca mais esqueça do que é importante.",
    highlights: ["Medicamentos", "Compromissos", "Tarefas recorrentes", "Notificações personalizadas"]
  },
  {
    icon: DollarSign,
    title: "Gestão Financeira",
    description: "Organize suas finanças com visão clara de despesas e receitas. Crie metas e receba notificações inteligentes.",
    highlights: ["Controle de gastos", "Metas financeiras", "Relatórios claros", "Notificações de pagamento"]
  },
  {
    icon: Brain,
    title: "Inteligência Artificial",
    description: "Tire dúvidas, obtenha informações e receba suporte inteligente para suas necessidades diárias.",
    highlights: ["Respostas inteligentes", "Suporte 24/7", "Aprendizado contínuo", "Linguagem natural"]
  }
];

const FeaturesSection = () => {
  return (
    <section className="py-24 px-6 bg-gradient-to-b from-background to-secondary/30">
      <div className="container max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block glass-card px-4 py-2 mb-6">
            <span className="text-sm font-medium text-muted-foreground">
              Funcionalidades
            </span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="gradient-text">Tudo que você precisa</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A Cici oferece funcionalidades inteligentes para simplificar sua rotina,
            tudo através do WhatsApp sem nenhum custo adicional.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="glass-card p-8 rounded-2xl hover:scale-105 transition-all duration-300 cursor-pointer group"
            >
              <div className="mb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-2xl mb-4 group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="h-8 w-8 text-primary" />
                </div>
                
                <h3 className="text-2xl font-bold mb-3 text-foreground">
                  {feature.title}
                </h3>
                
                <p className="text-muted-foreground mb-6">
                  {feature.description}
                </p>
              </div>
              
              <div className="space-y-3">
                {feature.highlights.map((highlight, highlightIndex) => (
                  <div key={highlightIndex} className="flex items-center text-sm">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    <span className="text-muted-foreground">{highlight}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Icons Row */}
        <div className="mt-16 flex justify-center space-x-12 opacity-60">
          <Clock className="h-8 w-8 text-muted-foreground" />
          <Target className="h-8 w-8 text-muted-foreground" />
          <MessageSquare className="h-8 w-8 text-muted-foreground" />
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;