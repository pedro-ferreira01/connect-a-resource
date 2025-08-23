import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Wrench, Cog, Hammer, Building, Clock } from "lucide-react";

const services = [
  {
    icon: Wrench,
    title: "Soldagem",
    description: "Soldadores certificados e equipamentos disponíveis 24/7. Reduza em 80% o tempo de busca.",
    available: 142,
    savings: "R$ 15k/mês",
    urgent: true
  },
  {
    icon: Cog,
    title: "Usinagem",
    description: "Tornos CNC e operadores especializados. Precisão garantida e entregas no prazo.",
    available: 89,
    savings: "R$ 22k/mês",
    urgent: false
  },
  {
    icon: Hammer,
    title: "Montagem",
    description: "Equipes qualificadas para montagem industrial. Aumente sua capacidade em 300%.",
    available: 67,
    savings: "R$ 18k/mês",
    urgent: true
  },
  {
    icon: Building,
    title: "Construção Civil",
    description: "Equipamentos pesados e mão de obra especializada. Cumpra prazos impossíveis.",
    available: 203,
    savings: "R$ 35k/mês",
    urgent: false
  }
];

const Services = () => {
  return (
    <section id="servicos" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Pare de Perder Contratos por Falta de Recursos
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Nossa plataforma resolve os 4 maiores gargalos da indústria, conectando você aos 
            melhores profissionais e equipamentos <strong>em tempo real</strong>
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {services.map((service, index) => (
            <Card key={index} className="relative group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-primary/10 rounded-lg mx-auto mb-4 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <service.icon className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                {service.urgent && (
                  <div className="absolute top-4 right-4">
                    <div className="bg-destructive text-destructive-foreground text-xs px-2 py-1 rounded-full flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      Urgente
                    </div>
                  </div>
                )}
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm mb-4">
                  {service.description}
                </p>
                <div className="space-y-3 mb-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-success">
                      {service.available} disponíveis agora
                    </span>
                    <div className="w-2 h-2 bg-success rounded-full animate-pulse"></div>
                  </div>
                  <div className="bg-success/10 rounded-lg p-3">
                    <div className="text-lg font-bold text-success mb-1">
                      Economia média: {service.savings}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      Por projeto concluído via plataforma
                    </div>
                  </div>
                </div>
                <Button className="w-full bg-primary hover:bg-primary/90">
                  🚀 CONECTAR AGORA
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center bg-gradient-to-r from-primary/5 to-accent/5 rounded-xl p-8">
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Pronto para Multiplicar sua Capacidade?
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Junte-se a mais de 1.200 empresas que já aumentaram sua produtividade em 300%
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-success hover:bg-success/90 px-8">
              💎 COMEÇAR TESTE GRÁTIS
            </Button>
            <Button size="lg" variant="outline">
              📊 Ver Case de Sucesso
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;