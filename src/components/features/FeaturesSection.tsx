import { 
  Bell, 
  Calculator, 
  Brain, 
  MessageSquare, 
  Calendar, 
  Shield, 
  Target, 
  Smartphone,
  Clock,
  TrendingUp,
  Zap,
  CheckCircle
} from "lucide-react";

const features = [
  {
    icon: MessageSquare,
    title: "Vivamus sit amet interdum",
    description: "Vivamus ut lorem rhoncus, tincidunt mi et lorem. Vestibulum et risus lorem et sollicitudin quam.",
    highlights: ["Interface via WhatsApp", "Sem apps extras", "Disponível 24/7"]
  },
  {
    icon: Calculator,
    title: "Lorem ipsum dolor sit amet",
    description: "Organização financeira completa através de comandos simples no WhatsApp.",
    highlights: ["Controle de gastos", "Lembretes de pagamento", "Relatórios automáticos"]
  },
  {
    icon: Brain,
    title: "Quisque ut Metus",
    description: "Inteligência artificial avançada para entender e antecipar suas necessidades.",
    highlights: ["IA de última geração", "Aprendizado contínuo", "Respostas personalizadas"]
  }
];

const additionalFeatures = [
  { icon: Clock, title: "Lembretes" },
  { icon: TrendingUp, title: "Análises" },
  { icon: Zap, title: "Automação" },
  { icon: CheckCircle, title: "Tarefas" }
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-20 px-6">
      <div className="container max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold gradient-text mb-6">
            Vivamus sit amet interdum
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Vivamus ut lorem rhoncus, tincidunt mi et lorem. Vestibulum et risus lorem et 
            sollicitudin quam tortor. Nunc quis dignissim quam.
          </p>
        </div>

        {/* Main Features */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div key={index} className="glass-card p-8 rounded-3xl animate-fade-in hover:scale-105 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center mb-6">
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">{feature.description}</p>
              
              <ul className="space-y-2">
                {feature.highlights.map((highlight, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle className="w-4 h-4 text-success" />
                    <span className="text-sm">{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Additional Features Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {additionalFeatures.map((feature, index) => (
            <div key={index} className="glass-card p-6 rounded-2xl text-center animate-fade-in">
              <div className="w-12 h-12 bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h4 className="font-semibold">{feature.title}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;