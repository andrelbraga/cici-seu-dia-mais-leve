import React from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { LogOut, User, Settings, MessageSquare } from 'lucide-react';

const Dashboard = () => {
  const { user, logout } = useAuth();

  const handleLogout = () => {
    logout();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-secondary/20">
      {/* Header */}
      <header className="border-b bg-background/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <h1 className="text-2xl font-bold text-primary">CiCi Assistant</h1>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <Avatar>
                <AvatarFallback>
                  {user?.name?.charAt(0).toUpperCase() || 'U'}
                </AvatarFallback>
              </Avatar>
              <span className="text-sm font-medium">{user?.name}</span>
            </div>
            <Button variant="outline" size="sm" onClick={handleLogout}>
              <LogOut className="h-4 w-4 mr-2" />
              Sair
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h2 className="text-3xl font-bold mb-2">
            Bem-vindo, {user?.name}!
          </h2>
          <p className="text-muted-foreground">
            Gerencie suas configurações e acesse suas conversas com o assistente.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Profile Card */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <User className="h-5 w-5 mr-2" />
                Perfil
              </CardTitle>
              <CardDescription>
                Visualize e edite suas informações pessoais
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <p><strong>Email:</strong> {user?.email}</p>
                <p><strong>Nome:</strong> {user?.name}</p>
              </div>
              <Button variant="outline" className="mt-4 w-full">
                Editar Perfil
              </Button>
            </CardContent>
          </Card>

          {/* Conversations Card */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <MessageSquare className="h-5 w-5 mr-2" />
                Conversas
              </CardTitle>
              <CardDescription>
                Histórico de conversas com o assistente
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Você ainda não tem conversas salvas.
              </p>
              <Button className="w-full">
                Iniciar Nova Conversa
              </Button>
            </CardContent>
          </Card>

          {/* Settings Card */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Settings className="h-5 w-5 mr-2" />
                Configurações
              </CardTitle>
              <CardDescription>
                Personalize sua experiência
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm">Notificações</span>
                  <Button variant="outline" size="sm">Ativar</Button>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Tema escuro</span>
                  <Button variant="outline" size="sm">Auto</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <div className="mt-12">
          <h3 className="text-xl font-semibold mb-4">Ações Rápidas</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Button variant="outline" className="p-6 h-auto flex-col">
              <MessageSquare className="h-8 w-8 mb-2" />
              <span className="font-medium">Iniciar Conversa via WhatsApp</span>
              <span className="text-sm text-muted-foreground">
                Conecte-se com o assistente agora
              </span>
            </Button>
            
            <Button variant="outline" className="p-6 h-auto flex-col">
              <Settings className="h-8 w-8 mb-2" />
              <span className="font-medium">Configurar Integrações</span>
              <span className="text-sm text-muted-foreground">
                Configure APIs e serviços externos
              </span>
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;