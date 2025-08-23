import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Phone, Mail, Clock, Gift, Zap } from "lucide-react";

const Contact = () => {
  return (
    <section id="contato" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            🎁 OFERTA ESPECIAL
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Transforme sua Empresa em 48 Horas
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Cadastre-se agora e ganhe <strong>30 dias grátis + setup personalizado</strong>. 
            Restam apenas 23 vagas com desconto especial!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="lg:col-span-2">
            <Card className="relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-destructive text-destructive-foreground px-4 py-2 text-sm font-semibold">
                ⏰ Oferta expira em 2 dias
              </div>
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-3">
                  <Zap className="h-8 w-8 text-primary" />
                  Começar Agora - 30 Dias Grátis
                </CardTitle>
                <p className="text-muted-foreground">
                  Preencha o formulário e nossa equipe entrará em contato em até 1 hora
                </p>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Nome do Responsável *
                    </label>
                    <Input placeholder="Seu nome completo" />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Email Corporativo *
                    </label>
                    <Input type="email" placeholder="email@empresa.com" />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      WhatsApp *
                    </label>
                    <Input placeholder="(11) 99999-9999" />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Nome da Empresa *
                    </label>
                    <Input placeholder="Sua empresa" />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Setor Principal *
                    </label>
                    <select className="w-full h-10 px-3 rounded-md border border-input bg-background text-foreground">
                      <option value="">Selecione seu setor</option>
                      <option value="soldagem">Soldagem</option>
                      <option value="usinagem">Usinagem</option>
                      <option value="montagem">Montagem Industrial</option>
                      <option value="construcao">Construção Civil</option>
                      <option value="outros">Outros</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Faturamento Mensal
                    </label>
                    <select className="w-full h-10 px-3 rounded-md border border-input bg-background text-foreground">
                      <option value="">Selecione a faixa</option>
                      <option value="ate-100k">Até R$ 100k</option>
                      <option value="100k-500k">R$ 100k - 500k</option>
                      <option value="500k-1m">R$ 500k - 1M</option>
                      <option value="acima-1m">Acima de R$ 1M</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Qual sua maior dificuldade hoje?
                  </label>
                  <Textarea 
                    placeholder="Ex: Demoro muito para encontrar soldadores qualificados, perco contratos por falta de equipamentos..."
                    rows={3}
                  />
                </div>
                
                <div className="bg-gradient-to-r from-success/10 to-accent/10 rounded-lg p-4 mb-4">
                  <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                    <Gift className="h-5 w-5 text-success" />
                    Seu bônus exclusivo inclui:
                  </h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>✅ 30 dias de acesso completo grátis</li>
                    <li>✅ Setup personalizado sem custo</li>
                    <li>✅ Treinamento da sua equipe</li>
                    <li>✅ Suporte prioritário por 60 dias</li>
                    <li>✅ Garantia de ROI em 30 dias</li>
                  </ul>
                </div>

                <Button className="w-full h-14 text-lg font-semibold bg-success hover:bg-success/90">
                  🎯 QUERO MEUS 30 DIAS GRÁTIS
                </Button>
                
                <p className="text-xs text-center text-muted-foreground">
                  ✅ Sem compromisso • ✅ Sem cartão de crédito • ✅ Ativação em 24h
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card className="bg-gradient-to-br from-primary to-accent text-primary-foreground">
              <CardContent className="p-6 text-center">
                <h3 className="font-bold text-xl mb-4">🚨 Urgência Extrema?</h3>
                <p className="text-sm text-primary-foreground/90 mb-4">
                  Para demandas que não podem esperar, nossa equipe está de plantão
                </p>
                <Button variant="secondary" className="w-full bg-primary-foreground text-primary mb-3">
                  📱 WhatsApp Direto
                </Button>
                <Button variant="secondary" className="w-full bg-primary-foreground text-primary">
                  📞 Ligar Agora
                </Button>
                <p className="text-xs text-primary-foreground/80 mt-3">
                  Resposta em menos de 15 minutos
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-success/10 rounded-lg flex items-center justify-center">
                    <Clock className="h-6 w-6 text-success" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Atendimento</h3>
                    <p className="text-muted-foreground text-sm">24 horas • 7 dias</p>
                    <p className="text-xs text-success">Sempre disponível</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Email</h3>
                    <p className="text-muted-foreground text-sm">vendas@two.com.br</p>
                    <p className="text-xs text-primary">Resposta em 1h</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="bg-gradient-to-r from-destructive/10 to-accent/10 rounded-lg p-4 text-center">
              <h4 className="font-bold text-foreground mb-2">⚡ Apenas 23 vagas restantes</h4>
              <p className="text-sm text-muted-foreground mb-3">
                Com desconto especial de lançamento
              </p>
              <div className="text-2xl font-bold text-destructive">
                72% OFF
              </div>
              <p className="text-xs text-muted-foreground">
                Oferta válida até 31/12/2024
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;