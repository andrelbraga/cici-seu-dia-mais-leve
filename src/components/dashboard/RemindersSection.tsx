import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import AddReminderModal from './AddReminderModal';
import { Bell, Clock, CheckCircle, AlertCircle, PlusCircle, Calendar } from 'lucide-react';

interface Reminder {
  id: string;
  title: string;
  description: string;
  dueDate: string;
  priority: 'high' | 'medium' | 'low';
  completed: boolean;
  category: string;
}

const RemindersSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [reminders, setReminders] = useState<Reminder[]>([
    {
      id: '1',
      title: 'Pagar conta de luz',
      description: 'Vencimento em 3 dias',
      dueDate: '2024-01-18',
      priority: 'high',
      completed: false,
      category: 'Financeiro'
    },
    {
      id: '2',
      title: 'Consulta médica',
      description: 'Consulta com Dr. Silva às 14h',
      dueDate: '2024-01-20',
      priority: 'medium',
      completed: false,
      category: 'Saúde'
    },
    {
      id: '3',
      title: 'Reunião de trabalho',
      description: 'Apresentação do projeto mensal',
      dueDate: '2024-01-17',
      priority: 'high',
      completed: false,
      category: 'Trabalho'
    },
    {
      id: '4',
      title: 'Aniversário Maria',
      description: 'Comprar presente',
      dueDate: '2024-01-25',
      priority: 'low',
      completed: true,
      category: 'Pessoal'
    },
    {
      id: '5',
      title: 'Renovar CNH',
      description: 'Vence no próximo mês',
      dueDate: '2024-02-15',
      priority: 'medium',
      completed: false,
      category: 'Documentos'
    }
  ]);

  const toggleReminder = (id: string) => {
    setReminders(prev => 
      prev.map(reminder => 
        reminder.id === id 
          ? { ...reminder, completed: !reminder.completed }
          : reminder
      )
    );
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'bg-red-100 text-red-800 border-red-200';
      case 'medium': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'low': return 'bg-green-100 text-green-800 border-green-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getPriorityIcon = (priority: string) => {
    switch (priority) {
      case 'high': return <AlertCircle className="h-3 w-3" />;
      case 'medium': return <Clock className="h-3 w-3" />;
      case 'low': return <Bell className="h-3 w-3" />;
      default: return <Bell className="h-3 w-3" />;
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    });
  };

  const isOverdue = (dateString: string) => {
    const today = new Date();
    const dueDate = new Date(dateString);
    return dueDate < today;
  };

  const pendingReminders = reminders.filter(r => !r.completed);
  const completedReminders = reminders.filter(r => r.completed);

  const addReminder = (newReminder: Omit<Reminder, 'id' | 'completed'>) => {
    const reminder: Reminder = {
      ...newReminder,
      id: Date.now().toString(),
      completed: false
    };
    setReminders(prev => [...prev, reminder]);
  };

  return (
    <div className="space-y-6">
      {/* Summary Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Card className="border-blue-200 bg-blue-50 dark:bg-blue-950 dark:border-blue-800">
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <Bell className="h-4 w-4 text-blue-600" />
              <div>
                <p className="text-2xl font-bold text-blue-800 dark:text-blue-200">
                  {pendingReminders.length}
                </p>
                <p className="text-xs text-blue-600 dark:text-blue-400">Pendentes</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-green-200 bg-green-50 dark:bg-green-950 dark:border-green-800">
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <CheckCircle className="h-4 w-4 text-green-600" />
              <div>
                <p className="text-2xl font-bold text-green-800 dark:text-green-200">
                  {completedReminders.length}
                </p>
                <p className="text-xs text-green-600 dark:text-green-400">Concluídos</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-red-200 bg-red-50 dark:bg-red-950 dark:border-red-800">
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <AlertCircle className="h-4 w-4 text-red-600" />
              <div>
                <p className="text-2xl font-bold text-red-800 dark:text-red-200">
                  {pendingReminders.filter(r => r.priority === 'high').length}
                </p>
                <p className="text-xs text-red-600 dark:text-red-400">Urgentes</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-orange-200 bg-orange-50 dark:bg-orange-950 dark:border-orange-800">
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <Calendar className="h-4 w-4 text-orange-600" />
              <div>
                <p className="text-2xl font-bold text-orange-800 dark:text-orange-200">
                  {pendingReminders.filter(r => isOverdue(r.dueDate)).length}
                </p>
                <p className="text-xs text-orange-600 dark:text-orange-400">Atrasados</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Reminders List */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Lembretes</CardTitle>
          <Button size="sm" className="flex items-center gap-2" onClick={() => setIsModalOpen(true)}>
            <PlusCircle className="h-4 w-4" />
            Novo Lembrete
          </Button>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {pendingReminders.map((reminder) => (
              <div 
                key={reminder.id} 
                className={`p-4 rounded-lg border-2 transition-all duration-200 ${
                  isOverdue(reminder.dueDate) 
                    ? 'border-red-200 bg-red-50 dark:bg-red-950 dark:border-red-800' 
                    : 'border-muted bg-card hover:border-primary/20'
                }`}
              >
                <div className="flex items-start justify-between">
                  <div className="flex items-start space-x-3 flex-1">
                    <Button
                      variant="ghost"
                      size="sm"
                      className="p-0 h-auto hover:bg-transparent"
                      onClick={() => toggleReminder(reminder.id)}
                    >
                      <div className="w-5 h-5 rounded-full border-2 border-primary hover:bg-primary/10 flex items-center justify-center">
                        {reminder.completed && <CheckCircle className="h-3 w-3 text-primary" />}
                      </div>
                    </Button>
                    
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-1">
                        <h4 className={`font-medium ${reminder.completed ? 'line-through text-muted-foreground' : ''}`}>
                          {reminder.title}
                        </h4>
                        <Badge 
                          variant="outline" 
                          className={`text-xs ${getPriorityColor(reminder.priority)}`}
                        >
                          <span className="flex items-center gap-1">
                            {getPriorityIcon(reminder.priority)}
                            {reminder.priority}
                          </span>
                        </Badge>
                      </div>
                      
                      <p className="text-sm text-muted-foreground mb-2">
                        {reminder.description}
                      </p>
                      
                      <div className="flex items-center space-x-4 text-xs text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          {formatDate(reminder.dueDate)}
                        </span>
                        <Badge variant="secondary" className="text-xs">
                          {reminder.category}
                        </Badge>
                        {isOverdue(reminder.dueDate) && (
                          <Badge variant="destructive" className="text-xs">
                            Atrasado
                          </Badge>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {pendingReminders.length === 0 && (
              <div className="text-center py-8 text-muted-foreground">
                <Bell className="h-12 w-12 mx-auto mb-4 opacity-50" />
                <p>Nenhum lembrete pendente</p>
                <p className="text-sm">Você está em dia com tudo!</p>
              </div>
            )}
          </div>
          
          {completedReminders.length > 0 && (
            <div className="mt-8">
              <h4 className="font-medium mb-4 text-muted-foreground">Concluídos Recentemente</h4>
              <div className="space-y-2">
                {completedReminders.slice(0, 3).map((reminder) => (
                  <div key={reminder.id} className="flex items-center space-x-3 p-2 rounded bg-muted/50">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="text-sm line-through text-muted-foreground">
                      {reminder.title}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      <AddReminderModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onAdd={addReminder}
      />
    </div>
  );
};

export default RemindersSection;