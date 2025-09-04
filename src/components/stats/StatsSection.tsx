import { TrendingUp, Users, MessageSquare } from "lucide-react";

const StatsSection = () => {
  const stats = [
    {
      icon: MessageSquare,
      number: "+80M",
      label: "Active Users",
      color: "text-primary"
    },
    {
      icon: TrendingUp,
      number: "+180K",
      label: "Processed",
      color: "text-accent"
    },
    {
      icon: Users,
      number: "12 Month",
      label: "Free Trial",
      color: "text-success"
    }
  ];

  return (
    <section className="py-20 px-6">
      <div className="container max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center animate-fade-in">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl mb-4">
                <stat.icon className={`w-8 h-8 ${stat.color}`} />
              </div>
              <h3 className="text-4xl font-bold gradient-text mb-2">{stat.number}</h3>
              <p className="text-muted-foreground text-lg">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;