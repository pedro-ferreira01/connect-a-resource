import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Clock, Shield, Users, TrendingUp, Zap, CheckCircle } from "lucide-react";

const differentials = [
  {
    icon: Clock,
    title: "Disponibilidade em Tempo Real",
    description: "Veja instantaneamente quais recursos estão disponíveis e quando, eliminando tempo perdido em ligações e negociações.",
    features: ["Status ao vivo", "Agenda integrada", "Notificações push"]
  },
  {
    icon: Shield,
    title: "Ambiente Seguro",
    description: "Plataforma com verificação de empresas, avaliações e sistema de pagamento integrado para transações confiáveis.",
    features: ["Empresas verificadas", "Sistema de avaliações", "Pagamento seguro"]
  },
  {
    icon: Users,
    title: "Conexão Direta B2B",
    description: "Comunicação direta entre empresas sem intermediários, facilitando negociações e reduzindo custos.",
    features: ["Chat integrado", "WhatsApp direto", "Sem intermediários"]
  },
  {
    icon: TrendingUp,
    title: "Escalável",
    description: "Plataforma que cresce com seu negócio, permitindo múltiplas contratações simultâneas e gestão centralizada.",
    features: ["Múltiplos projetos", "Dashboard centralizado", "Histórico completo"]
  }
];

const Differentials = () => {
  return (
    <section id="diferenciais" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Por que Escolher a T.W.O.?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Nossa plataforma oferece vantagens únicas que resolvem as principais dores do mercado B2B industrial
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {differentials.map((diff, index) => (
            <Card key={index} className="relative group hover:shadow-xl transition-all duration-300 border-l-4 border-l-primary">
              <CardHeader className="flex flex-row items-start space-y-0 space-x-4 pb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors flex-shrink-0">
                  <diff.icon className="h-6 w-6 text-primary" />
                </div>
                <div className="flex-1">
                  <CardTitle className="text-xl mb-2 text-foreground">{diff.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-muted-foreground mb-4 text-base leading-relaxed">
                  {diff.description}
                </p>
                <div className="space-y-2">
                  {diff.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-success flex-shrink-0" />
                      <span className="text-sm text-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-gradient-to-r from-primary to-accent rounded-2xl p-8 md:p-12 text-center text-primary-foreground">
          <Zap className="h-16 w-16 mx-auto mb-6 text-accent-foreground" />
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Pronto para Revolucionar seu Negócio?
          </h3>
          <p className="text-lg mb-6 text-primary-foreground/90 max-w-2xl mx-auto">
            Mais de 1.000 empresas já usam nossa plataforma para otimizar recursos e aumentar a produtividade
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-accent-foreground text-accent px-8 py-3 rounded-lg font-semibold hover:bg-accent-foreground/90 transition-colors">
              Começar Gratuitamente
            </button>
            <button className="border-2 border-primary-foreground text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-primary-foreground/10 transition-colors">
              Agendar Demo
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Differentials;