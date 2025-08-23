import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, X, Crown, Zap } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "Grátis",
    period: "30 dias",
    description: "Perfeito para testar a plataforma",
    features: [
      "Até 5 conexões/mês",
      "Acesso básico à busca",
      "Chat integrado",
      "Suporte por email"
    ],
    limitations: [
      "Sem filtros avançados",
      "Histórico limitado"
    ],
    cta: "COMEÇAR GRÁTIS",
    popular: false,
    highlight: false
  },
  {
    name: "Professional",
    price: "R$ 497",
    period: "/mês",
    description: "Para empresas que querem escalar",
    features: [
      "Conexões ilimitadas",
      "Filtros avançados",
      "Dashboard completo",
      "Suporte prioritário 24/7",
      "Integração WhatsApp",
      "Relatórios personalizados",
      "API access"
    ],
    limitations: [],
    cta: "ASSINAR AGORA",
    popular: true,
    highlight: false,
    savings: "Economize R$ 15.000+/mês"
  },
  {
    name: "Enterprise",
    price: "R$ 1.297",
    period: "/mês",
    description: "Para grandes operações industriais",
    features: [
      "Tudo do Professional",
      "Gerente de conta dedicado",
      "Setup personalizado",
      "Treinamento da equipe",
      "SLA garantido",
      "Integrações customizadas",
      "Multi-empresas"
    ],
    limitations: [],
    cta: "FALAR COM VENDAS",
    popular: false,
    highlight: true,
    savings: "ROI em 30 dias garantido"
  }
];

const Pricing = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            💸 OFERTA LIMITADA
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Invista em Resultados, Não em Promessas
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Escolha o plano ideal para sua empresa. <strong>Primeira mensalidade grátis</strong> para os primeiros 50 cadastros.
          </p>
          <div className="bg-gradient-to-r from-success/10 to-accent/10 rounded-lg p-4 max-w-2xl mx-auto">
            <p className="text-foreground font-semibold">
              ⏰ Restam apenas 23 vagas com desconto especial
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
          {plans.map((plan, index) => (
            <Card 
              key={index} 
              className={`relative ${plan.popular ? 'border-2 border-primary shadow-2xl scale-105' : ''} ${plan.highlight ? 'bg-gradient-to-br from-primary/5 to-accent/5' : ''}`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-primary text-primary-foreground px-4 py-2 text-sm font-semibold">
                    🔥 MAIS POPULAR
                  </Badge>
                </div>
              )}
              
              {plan.highlight && (
                <div className="absolute -top-4 right-4">
                  <Crown className="h-8 w-8 text-accent" />
                </div>
              )}

              <CardHeader className="text-center pb-6">
                <CardTitle className="text-2xl mb-2">{plan.name}</CardTitle>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-foreground">{plan.price}</span>
                  <span className="text-muted-foreground">{plan.period}</span>
                </div>
                <p className="text-muted-foreground text-sm">{plan.description}</p>
                {plan.savings && (
                  <div className="bg-success/10 text-success rounded-lg p-2 mt-4">
                    <span className="text-sm font-semibold">{plan.savings}</span>
                  </div>
                )}
              </CardHeader>

              <CardContent>
                <div className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <Check className="h-5 w-5 text-success flex-shrink-0" />
                      <span className="text-sm text-foreground">{feature}</span>
                    </div>
                  ))}
                  
                  {plan.limitations.map((limitation, idx) => (
                    <div key={idx} className="flex items-center gap-3 opacity-60">
                      <X className="h-5 w-5 text-muted-foreground flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{limitation}</span>
                    </div>
                  ))}
                </div>

                <Button 
                  className={`w-full h-12 text-lg font-semibold ${
                    plan.popular 
                      ? 'bg-primary hover:bg-primary/90' 
                      : plan.highlight 
                        ? 'bg-accent hover:bg-accent/90'
                        : 'bg-secondary hover:bg-secondary/90 text-secondary-foreground'
                  }`}
                >
                  {plan.highlight && <Zap className="mr-2 h-5 w-5" />}
                  {plan.cta}
                </Button>

                {plan.popular && (
                  <p className="text-center text-xs text-muted-foreground mt-3">
                    ✅ Setup gratuito • ✅ Sem fidelidade • ✅ Cancelamento simples
                  </p>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center bg-gradient-to-r from-primary to-accent rounded-2xl p-8 text-primary-foreground">
          <h3 className="text-2xl font-bold mb-4">
            🎯 Não Consegue Decidir? Fale com um Especialista!
          </h3>
          <p className="text-lg mb-6 text-primary-foreground/90 max-w-2xl mx-auto">
            Agende uma demonstração personalizada e descubra qual plano oferece o melhor ROI para sua empresa
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg" className="bg-primary-foreground text-primary px-8">
              📞 Agendar Demo Grátis
            </Button>
            <Button variant="outline" size="lg" className="border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10">
              💬 WhatsApp Direto
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;