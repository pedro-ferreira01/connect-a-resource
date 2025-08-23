import { Button } from "@/components/ui/button";
import { Search, Menu } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-card border-b border-border sticky top-0 z-50 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-lg">T</span>
          </div>
          <span className="text-2xl font-bold text-foreground">T.W.O.</span>
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#servicos" className="text-muted-foreground hover:text-foreground transition-colors">
            Serviços
          </a>
          <a href="#como-funciona" className="text-muted-foreground hover:text-foreground transition-colors">
            Como Funciona
          </a>
          <a href="#diferenciais" className="text-muted-foreground hover:text-foreground transition-colors">
            Diferenciais
          </a>
          <a href="#contato" className="text-muted-foreground hover:text-foreground transition-colors">
            Contato
          </a>
        </nav>

        <div className="flex items-center space-x-4">
          <Button variant="outline" size="sm" className="hidden md:flex">
            Entrar
          </Button>
          <Button size="sm" className="bg-success hover:bg-success/90">
            Cadastrar
          </Button>
          <Button variant="outline" size="icon" className="md:hidden">
            <Menu className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;