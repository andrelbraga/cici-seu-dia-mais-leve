import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { TrendingUp, TrendingDown, DollarSign, PlusCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import AddTransactionModal from './AddTransactionModal';

interface Transaction {
  id: string;
  type: 'income' | 'expense';
  amount: number;
  description: string;
  date: string;
  category: string;
}

const FinancialSummary = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [transactions, setTransactions] = useState<Transaction[]>([
    { id: '1', type: 'income', amount: 3500, description: 'Salário', date: '2024-01-15', category: 'Trabalho' },
    { id: '2', type: 'expense', amount: 150, description: 'Supermercado', date: '2024-01-14', category: 'Alimentação' },
    { id: '3', type: 'expense', amount: 80, description: 'Combustível', date: '2024-01-13', category: 'Transporte' },
    { id: '4', type: 'income', amount: 500, description: 'Freelance', date: '2024-01-12', category: 'Extra' },
    { id: '5', type: 'expense', amount: 1200, description: 'Aluguel', date: '2024-01-10', category: 'Moradia' },
  ]);

  const totalIncome = transactions
    .filter(t => t.type === 'income')
    .reduce((sum, t) => sum + t.amount, 0);

  const totalExpenses = transactions
    .filter(t => t.type === 'expense')
    .reduce((sum, t) => sum + t.amount, 0);

  const balance = totalIncome - totalExpenses;

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(value);
  };

  const addTransaction = (newTransaction: Omit<Transaction, 'id'>) => {
    const transaction: Transaction = {
      ...newTransaction,
      id: Date.now().toString()
    };
    setTransactions(prev => [transaction, ...prev]);
  };

  return (
    <div className="space-y-6">
      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="border-green-200 bg-green-50 dark:bg-green-950 dark:border-green-800">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-green-700 dark:text-green-300">
              Receitas
            </CardTitle>
            <TrendingUp className="h-4 w-4 text-green-600 dark:text-green-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-800 dark:text-green-200">
              {formatCurrency(totalIncome)}
            </div>
            <p className="text-xs text-green-600 dark:text-green-400 mt-1">
              Este mês
            </p>
          </CardContent>
        </Card>

        <Card className="border-red-200 bg-red-50 dark:bg-red-950 dark:border-red-800">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-red-700 dark:text-red-300">
              Despesas
            </CardTitle>
            <TrendingDown className="h-4 w-4 text-red-600 dark:text-red-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-red-800 dark:text-red-200">
              {formatCurrency(totalExpenses)}
            </div>
            <p className="text-xs text-red-600 dark:text-red-400 mt-1">
              Este mês
            </p>
          </CardContent>
        </Card>

        <Card className={`border-2 ${balance >= 0 
          ? 'border-green-200 bg-green-50 dark:bg-green-950 dark:border-green-800' 
          : 'border-red-200 bg-red-50 dark:bg-red-950 dark:border-red-800'
        }`}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className={`text-sm font-medium ${balance >= 0 
              ? 'text-green-700 dark:text-green-300' 
              : 'text-red-700 dark:text-red-300'
            }`}>
              Saldo
            </CardTitle>
            <DollarSign className={`h-4 w-4 ${balance >= 0 
              ? 'text-green-600 dark:text-green-400' 
              : 'text-red-600 dark:text-red-400'
            }`} />
          </CardHeader>
          <CardContent>
            <div className={`text-2xl font-bold ${balance >= 0 
              ? 'text-green-800 dark:text-green-200' 
              : 'text-red-800 dark:text-red-200'
            }`}>
              {formatCurrency(balance)}
            </div>
            <p className={`text-xs mt-1 ${balance >= 0 
              ? 'text-green-600 dark:text-green-400' 
              : 'text-red-600 dark:text-red-400'
            }`}>
              Disponível
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Recent Transactions */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Transações Recentes</CardTitle>
          <Button size="sm" className="flex items-center gap-2" onClick={() => setIsModalOpen(true)}>
            <PlusCircle className="h-4 w-4" />
            Adicionar
          </Button>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {transactions.slice(0, 5).map((transaction) => (
              <div key={transaction.id} className="flex items-center justify-between py-2 border-b border-muted last:border-0">
                <div className="flex items-center space-x-3">
                  <div className={`w-2 h-2 rounded-full ${
                    transaction.type === 'income' ? 'bg-green-500' : 'bg-red-500'
                  }`} />
                  <div>
                    <p className="font-medium">{transaction.description}</p>
                    <p className="text-sm text-muted-foreground">{transaction.category}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className={`font-medium ${
                    transaction.type === 'income' ? 'text-green-600' : 'text-red-600'
                  }`}>
                    {transaction.type === 'income' ? '+' : '-'}{formatCurrency(transaction.amount)}
                  </p>
                  <p className="text-sm text-muted-foreground">{transaction.date}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <AddTransactionModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onAdd={addTransaction}
      />
    </div>
  );
};

export default FinancialSummary;