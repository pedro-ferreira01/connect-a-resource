import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Carlos Mendes",
    role: "Diretor Industrial",
    company: "MetalSul Ltda",
    image: "/placeholder.svg",
    rating: 5,
    testimonial: "Em 3 meses economizamos R$ 47.000 só em soldagem. A plataforma é revolucionária! Conseguimos cumprir prazos que antes eram impossíveis.",
    results: "+300% produtividade",
    sector: "Soldagem"
  },
  {
    name: "Ana Patricia",
    role: "Gerente de Operações", 
    company: "Construtora Horizonte",
    image: "/placeholder.svg",
    rating: 5,
    testimonial: "O tempo de busca por equipamentos caiu de 2 semanas para 4 horas. Nossa margem de lucro aumentou 45% só no primeiro trimestre usando a T.W.O.",
    results: "R$ 125k economizados",
    sector: "Construção"
  },
  {
    name: "Roberto Silva",
    role: "CEO",
    company: "Precision Tech",
    image: "/placeholder.svg", 
    rating: 5,
    testimonial: "Nunca mais perdemos um contrato por falta de torno CNC. A plataforma conecta com fornecedores que nem sabíamos que existiam na região.",
    results: "+8 contratos/mês",
    sector: "Usinagem"
  },
  {
    name: "Marina Costa",
    role: "Supervisora de Projetos",
    company: "Montecorp Industrial",
    image: "/placeholder.svg",
    rating: 5,
    testimonial: "O dashboard é incrível! Conseguimos gerenciar 12 projetos simultâneos e ter visibilidade completa de todos os recursos. ROI em 3 semanas!",
    results: "ROI em 21 dias",
    sector: "Montagem"
  },
  {
    name: "João Ferreira",
    role: "Sócio-Proprietário",
    company: "Steel Works",
    image: "/placeholder.svg",
    rating: 5,
    testimonial: "A conexão direta pelo WhatsApp é genial. Fechamos negócios em minutos, não em dias. Nossa empresa cresceu 200% em 6 meses.",
    results: "+200% crescimento",
    sector: "Soldagem"
  },
  {
    name: "Luciana Santos",
    role: "Gerente Geral",
    company: "Obras & Soluções",
    image: "/placeholder.svg",
    rating: 5,
    testimonial: "O suporte 24h salvou nossos prazos várias vezes. A equipe é excepcional e sempre encontra uma solução, mesmo nos fins de semana.",
    results: "100% prazos cumpridos",
    sector: "Construção"
  }
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            O Que Nossos Clientes Estão Dizendo
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Resultados reais de empresas que transformaram suas operações com a T.W.O.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="relative group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <Avatar className="w-12 h-12">
                    <AvatarImage src={testimonial.image} alt={testimonial.name} />
                    <AvatarFallback className="bg-primary/10 text-primary font-semibold">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    <p className="text-xs text-primary font-medium">{testimonial.company}</p>
                  </div>
                  <div className="text-right">
                    <div className="flex gap-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <span className="text-xs text-muted-foreground">{testimonial.sector}</span>
                  </div>
                </div>

                <div className="relative mb-4">
                  <Quote className="absolute -top-2 -left-2 h-8 w-8 text-primary/20" />
                  <p className="text-muted-foreground italic leading-relaxed pl-6">
                    "{testimonial.testimonial}"
                  </p>
                </div>

                <div className="bg-success/10 rounded-lg p-3 text-center">
                  <div className="text-lg font-bold text-success">{testimonial.results}</div>
                  <div className="text-xs text-muted-foreground">Resultado obtido</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center bg-gradient-to-r from-primary/10 to-accent/10 rounded-xl p-8">
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Quer Ser o Próximo Case de Sucesso?
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Junte-se a centenas de empresas que já transformaram seus resultados
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-success text-success-foreground px-8 py-3 rounded-lg font-semibold hover:bg-success/90 transition-colors">
              🎯 COMEÇAR AGORA
            </button>
            <button className="border-2 border-primary text-primary px-8 py-3 rounded-lg font-semibold hover:bg-primary/5 transition-colors">
              📖 Ver Mais Cases
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;