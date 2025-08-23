import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Wrench, Cog, Hammer, Building, Clock } from "lucide-react";

const services = [
  {
    icon: Wrench,
    title: "Soldagem",
    description: "Equipamentos e profissionais especializados em soldagem industrial",
    available: 24,
    urgent: true
  },
  {
    icon: Cog,
    title: "Usinagem",
    description: "Tornos, fresas e operadores qualificados para usinagem de precisão",
    available: 18,
    urgent: false
  },
  {
    icon: Hammer,
    title: "Montagem",
    description: "Equipes especializadas em montagem industrial e estrutural",
    available: 12,
    urgent: true
  },
  {
    icon: Building,
    title: "Construção Civil",
    description: "Equipamentos pesados e mão de obra para construção",
    available: 31,
    urgent: false
  }
];

const Services = () => {
  return (
    <section id="servicos" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Serviços Disponíveis
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Encontre rapidamente os recursos que sua empresa precisa nos principais setores industriais
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
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-medium text-success">
                    {service.available} disponíveis
                  </span>
                  <div className="w-2 h-2 bg-success rounded-full animate-pulse"></div>
                </div>
                <Button className="w-full" variant="outline">
                  Ver Disponíveis
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" className="bg-success hover:bg-success/90">
            Ver Todos os Serviços
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;