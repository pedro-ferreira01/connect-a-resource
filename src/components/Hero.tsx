import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Clock, Shield, Users } from "lucide-react";
import heroImage from "@/assets/hero-industrial.jpg";

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-primary via-primary to-accent text-primary-foreground overflow-hidden">
      <div className="absolute inset-0 bg-black/20"></div>
      <div 
        className="absolute inset-0 opacity-20 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      ></div>
      
      <div className="relative container mx-auto px-4 py-20 md:py-32">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Aumente sua <span className="text-accent-foreground">Produtividade</span> 
            <br />em <span className="text-accent-foreground">300%</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-primary-foreground/90 max-w-3xl mx-auto">
            Pare de perder contratos por falta de recursos! Nossa plataforma conecta sua empresa 
            a equipamentos e profissionais especializados <strong>em menos de 2 horas</strong>.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button size="lg" className="bg-accent-foreground text-accent hover:bg-accent-foreground/90 h-14 px-10 text-lg font-semibold">
              🚀 COMEÇAR AGORA - GRÁTIS
            </Button>
            <Button size="lg" variant="outline" className="h-14 px-8 text-lg border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10">
              📞 Falar com Consultor
            </Button>
          </div>

          <div className="bg-accent-foreground/10 backdrop-blur-sm rounded-lg p-4 mb-8 max-w-2xl mx-auto">
            <p className="text-primary-foreground font-semibold">
              ⚡ OFERTA LIMITADA: Primeiros 30 dias GRATUITOS + Setup sem custo
            </p>
            <p className="text-primary-foreground/80 text-sm">
              Apenas para as próximas 50 empresas que se cadastrarem
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="flex flex-col items-center p-6 bg-primary-foreground/10 rounded-lg backdrop-blur-sm">
              <div className="text-3xl font-bold text-accent-foreground mb-2">2h</div>
              <span className="font-semibold">Tempo Médio</span>
              <span className="text-sm text-primary-foreground/80">Para encontrar recursos</span>
            </div>
            <div className="flex flex-col items-center p-6 bg-primary-foreground/10 rounded-lg backdrop-blur-sm">
              <div className="text-3xl font-bold text-accent-foreground mb-2">+1.200</div>
              <span className="font-semibold">Empresas Ativas</span>
              <span className="text-sm text-primary-foreground/80">Na nossa plataforma</span>
            </div>
            <div className="flex flex-col items-center p-6 bg-primary-foreground/10 rounded-lg backdrop-blur-sm">
              <div className="text-3xl font-bold text-accent-foreground mb-2">98%</div>
              <span className="font-semibold">Taxa de Sucesso</span>
              <span className="text-sm text-primary-foreground/80">Em encontrar recursos</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;