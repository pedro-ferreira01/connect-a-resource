import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MessageCircle, Phone } from "lucide-react";

const faqData = [
  {
    question: "Como funciona o período de teste gratuito?",
    answer: "Você tem 30 dias para testar todas as funcionalidades da plataforma sem custo. Durante esse período, pode realizar até 5 conexões e ter acesso completo ao sistema. Não cobramos cartão de crédito antecipadamente."
  },
  {
    question: "Quanto tempo leva para encontrar os recursos que preciso?",
    answer: "Em média, nossos clientes encontram recursos disponíveis em menos de 2 horas. Para demandas urgentes, temos um sistema de notificação automática que conecta você diretamente via WhatsApp com fornecedores disponíveis."
  },
  {
    question: "Como vocês garantem a qualidade dos fornecedores?",
    answer: "Todos os fornecedores passam por um processo rigoroso de verificação que inclui: validação de documentos, verificação de referências, análise de trabalhos anteriores e sistema de avaliações contínuas dos clientes."
  },
  {
    question: "Posso cancelar a qualquer momento?",
    answer: "Sim! Não temos fidelidade. Você pode cancelar sua assinatura a qualquer momento através do painel administrativo ou entrando em contato conosco. Não há multas ou taxas de cancelamento."
  },
  {
    question: "Como funciona o pagamento?",
    answer: "Aceitamos cartão de crédito, débito, PIX e boleto bancário. O pagamento é mensal e processado automaticamente. Você recebe a nota fiscal por email em até 24 horas após o pagamento."
  },
  {
    question: "A plataforma funciona em todo o Brasil?",
    answer: "Sim! Temos fornecedores ativos em todos os estados brasileiros. Nossa rede é mais forte nas regiões Sul e Sudeste, mas estamos em expansão constante para cobrir todo o território nacional."
  },
  {
    question: "Preciso de treinamento para usar a plataforma?",
    answer: "A plataforma é intuitiva e fácil de usar. Para clientes Professional e Enterprise, oferecemos treinamento completo da equipe e suporte dedicado. Também temos tutoriais em vídeo e documentação completa."
  },
  {
    question: "Qual é a garantia de ROI?",
    answer: "Para clientes Enterprise, garantimos ROI positivo em 30 dias ou devolvemos seu dinheiro. Em média, nossos clientes economizam 10x mais que o valor da mensalidade já no primeiro mês de uso."
  },
  {
    question: "Como funciona o suporte 24/7?",
    answer: "Nosso suporte está disponível 24 horas por dia, 7 dias por semana através de chat, WhatsApp, email e telefone. Clientes Professional têm prioridade, e Enterprise têm gerente dedicado."
  },
  {
    question: "Posso integrar com meus sistemas atuais?",
    answer: "Sim! Oferecemos API completa e integrações nativas com os principais ERPs do mercado. Nossa equipe técnica pode desenvolver integrações customizadas para clientes Enterprise."
  }
];

const FAQ = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Perguntas Frequentes
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Esclarecemos suas principais dúvidas sobre a plataforma
          </p>
        </div>

        <div className="max-w-4xl mx-auto mb-12">
          <Accordion type="single" collapsible className="space-y-4">
            {faqData.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border border-border rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold text-foreground hover:text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pt-2">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Card className="text-center p-8 hover:shadow-lg transition-shadow">
            <CardContent className="p-0">
              <MessageCircle className="h-16 w-16 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-bold text-foreground mb-2">
                Ainda tem dúvidas?
              </h3>
              <p className="text-muted-foreground mb-6">
                Nossa equipe de especialistas está pronta para ajudar você a encontrar a melhor solução
              </p>
              <Button className="w-full bg-primary hover:bg-primary/90">
                💬 Chat ao Vivo
              </Button>
            </CardContent>
          </Card>

          <Card className="text-center p-8 hover:shadow-lg transition-shadow">
            <CardContent className="p-0">
              <Phone className="h-16 w-16 text-success mx-auto mb-4" />
              <h3 className="text-xl font-bold text-foreground mb-2">
                Prefere falar por telefone?
              </h3>
              <p className="text-muted-foreground mb-6">
                Ligue para nosso time comercial e receba atendimento personalizado
              </p>
              <Button variant="outline" className="w-full border-success text-success hover:bg-success/10">
                📞 (11) 3000-0000
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="text-center mt-12 bg-gradient-to-r from-primary/5 to-accent/5 rounded-xl p-8">
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Pronto para Começar?
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Não perca mais tempo procurando recursos. Comece hoje mesmo e veja os resultados em 48h!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-success hover:bg-success/90 px-8">
              🚀 COMEÇAR TESTE GRÁTIS
            </Button>
            <Button size="lg" variant="outline">
              📅 Agendar Demonstração
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;