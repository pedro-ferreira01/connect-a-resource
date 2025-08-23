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
            Conecte <span className="text-accent-foreground">Recursos Ociosos</span> 
            <br />à Demandas Reais
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-primary-foreground/90 max-w-3xl mx-auto">
            A plataforma B2B que conecta equipamentos e mão de obra especializada em 
            soldagem, usinagem, montagem e construção civil em tempo real.
          </p>

          <div className="flex flex-col md:flex-row gap-4 max-w-2xl mx-auto mb-12">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
              <Input 
                placeholder="Busque por soldagem, usinagem, montagem..."
                className="pl-10 h-12 bg-card/90 backdrop-blur-sm border-card text-foreground"
              />
            </div>
            <Button size="lg" className="bg-success hover:bg-success/90 h-12 px-8">
              Buscar Recursos
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="flex flex-col items-center p-4 bg-primary-foreground/10 rounded-lg backdrop-blur-sm">
              <Clock className="h-8 w-8 text-success mb-2" />
              <span className="font-semibold">Tempo Real</span>
              <span className="text-sm text-primary-foreground/80">Disponibilidade instantânea</span>
            </div>
            <div className="flex flex-col items-center p-4 bg-primary-foreground/10 rounded-lg backdrop-blur-sm">
              <Shield className="h-8 w-8 text-success mb-2" />
              <span className="font-semibold">Ambiente Seguro</span>
              <span className="text-sm text-primary-foreground/80">Transações confiáveis</span>
            </div>
            <div className="flex flex-col items-center p-4 bg-primary-foreground/10 rounded-lg backdrop-blur-sm">
              <Users className="h-8 w-8 text-success mb-2" />
              <span className="font-semibold">B2B Direto</span>
              <span className="text-sm text-primary-foreground/80">Conexão empresarial</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;