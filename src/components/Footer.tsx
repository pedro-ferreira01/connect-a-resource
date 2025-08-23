import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Facebook, Twitter, Linkedin, Instagram, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">T</span>
              </div>
              <span className="text-2xl font-bold text-foreground">T.W.O.</span>
            </div>
            <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
              A plataforma B2B que conecta recursos ociosos à demandas reais, 
              otimizando a produtividade industrial.
            </p>
            <div className="flex space-x-3">
              <Button variant="outline" size="icon" className="w-8 h-8">
                <Facebook className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon" className="w-8 h-8">
                <Twitter className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon" className="w-8 h-8">
                <Linkedin className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon" className="w-8 h-8">
                <Instagram className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4">Serviços</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Soldagem</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Usinagem</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Montagem</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Construção Civil</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Consulte Outros</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4">Empresa</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Sobre Nós</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Como Funciona</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Termos de Uso</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Política de Privacidade</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Suporte</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4">Newsletter</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Receba atualizações sobre novos recursos e oportunidades
            </p>
            <div className="flex gap-2">
              <Input 
                placeholder="Seu email"
                className="text-sm"
              />
              <Button size="sm" className="bg-success hover:bg-success/90 flex-shrink-0">
                <Mail className="h-4 w-4" />
              </Button>
            </div>
            <p className="text-xs text-muted-foreground mt-2">
              Prometemos não fazer spam 📩
            </p>
          </div>
        </div>
        
        <Separator className="mb-6" />
        
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
          <p>© 2024 T.W.O. - Todos os direitos reservados.</p>
          <div className="flex items-center gap-4 mt-4 md:mt-0">
            <span className="flex items-center gap-2">
              <div className="w-2 h-2 bg-success rounded-full animate-pulse"></div>
              Sistema Online
            </span>
            <span>Atendimento 24/7</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;