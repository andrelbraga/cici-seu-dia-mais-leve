import { Star, Quote } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Ana Silva",
      role: "Empresária",
      content: "A Cici revolucionou minha organização pessoal. Nunca mais esqueci compromissos importantes!",
      rating: 5,
      avatar: "AS"
    },
    {
      name: "Carlos Santos",
      role: "Freelancer",
      content: "Incrível como ela consegue me ajudar com lembretes financeiros e ainda dá dicas úteis.",
      rating: 5,
      avatar: "CS"
    }
  ];

  return (
    <section className="py-20 px-6 bg-gradient-card">
      <div className="container max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold gradient-text mb-4">
            Viva! Our Customer's<br />Testimonial
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Veja o que nossos usuários falam sobre a experiência com a Cici
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="glass-card p-8 rounded-3xl animate-fade-in">
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-warning text-warning" />
                ))}
              </div>
              
              <Quote className="w-8 h-8 text-primary mb-4" />
              
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">{testimonial.avatar}</span>
                </div>
                <div>
                  <h4 className="font-semibold">{testimonial.name}</h4>
                  <p className="text-muted-foreground text-sm">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;