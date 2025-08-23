import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, TrendingUp, Users, CheckCircle } from "lucide-react";

const SocialProof = () => {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4 text-sm px-4 py-2">
            🏆 LÍDER DE MERCADO
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Mais de 1.200 Empresas Confiam em Nós
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Resultados comprovados que transformam negócios
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <Card className="text-center p-6 hover:shadow-lg transition-shadow">
            <CardContent className="p-0">
              <div className="text-4xl font-bold text-primary mb-2">R$ 2.5M</div>
              <div className="text-sm text-muted-foreground">Economizados mensalmente</div>
              <div className="text-xs text-success mt-1">↗️ +45% vs ano anterior</div>
            </CardContent>
          </Card>

          <Card className="text-center p-6 hover:shadow-lg transition-shadow">
            <CardContent className="p-0">
              <div className="text-4xl font-bold text-primary mb-2">15.000+</div>
              <div className="text-sm text-muted-foreground">Conexões realizadas</div>
              <div className="text-xs text-success mt-1">📈 Crescendo 20%/mês</div>
            </CardContent>
          </Card>

          <Card className="text-center p-6 hover:shadow-lg transition-shadow">
            <CardContent className="p-0">
              <div className="text-4xl font-bold text-primary mb-2">72h</div>
              <div className="text-sm text-muted-foreground">Redução no tempo médio</div>
              <div className="text-xs text-success mt-1">⚡ vs processo tradicional</div>
            </CardContent>
          </Card>

          <Card className="text-center p-6 hover:shadow-lg transition-shadow">
            <CardContent className="p-0">
              <div className="text-4xl font-bold text-primary mb-2">4.9/5</div>
              <div className="flex justify-center mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <div className="text-sm text-muted-foreground">Avaliação média</div>
            </CardContent>
          </Card>
        </div>

        <div className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-xl p-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center">
              <CheckCircle className="h-12 w-12 text-success mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-2">Setup em 24h</h3>
              <p className="text-muted-foreground text-sm">
                Sua empresa operando na plataforma em menos de 1 dia útil
              </p>
            </div>
            
            <div className="flex flex-col items-center">
              <TrendingUp className="h-12 w-12 text-success mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-2">ROI Garantido</h3>
              <p className="text-muted-foreground text-sm">
                Retorno sobre investimento em menos de 30 dias ou seu dinheiro de volta
              </p>
            </div>
            
            <div className="flex flex-col items-center">
              <Users className="h-12 w-12 text-success mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-2">Suporte 24/7</h3>
              <p className="text-muted-foreground text-sm">
                Equipe especializada disponível sempre que você precisar
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;