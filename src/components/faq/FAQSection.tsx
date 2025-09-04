import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";

const FAQSection = () => {
  const faqs = [
    {
      question: "Como posso começar a usar a Cici?",
      answer: "É muito simples! Basta clicar no botão 'Começar Agora' e enviar uma mensagem para a Cici no WhatsApp. Ela irá te guiar através do processo de configuração inicial."
    },
    {
      question: "A Cici é realmente gratuita?",
      answer: "Sim! Oferecemos um plano gratuito com funcionalidades básicas que incluem até 50 lembretes por mês e informações básicas. Para recursos avançados, temos planos pagos."
    },
    {
      question: "Quais tipos de lembretes a Cici pode criar?",
      answer: "A Cici pode criar lembretes para pagamentos, compromissos, medicamentos, aniversários, tarefas do trabalho e muito mais. Ela entende linguagem natural, então você pode falar naturalmente."
    },
    {
      question: "Meus dados estão seguros?",
      answer: "Absolutamente! Utilizamos criptografia de ponta a ponta e seguimos as melhores práticas de segurança para proteger suas informações pessoais."
    },
    {
      question: "Posso usar a Cici em equipe?",
      answer: "Sim! Nosso plano Enterprise permite múltiplos usuários e inclui um dashboard empresarial para gerenciar lembretes e tarefas em equipe."
    }
  ];

  return (
    <section id="faq" className="py-20 px-6 bg-gradient-card">
      <div className="container max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl mb-6">
            <HelpCircle className="w-8 h-8 text-primary" />
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold gradient-text mb-4">
            FAQ
          </h2>
          <p className="text-xl text-muted-foreground">
            Tire suas principais dúvidas sobre a Cici
          </p>
        </div>

        <div className="glass-card p-8 rounded-3xl">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border-glass-border"
              >
                <AccordionTrigger className="text-left text-lg font-semibold hover:text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;