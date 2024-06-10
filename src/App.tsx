import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Expandable from './components/Expandable';
import { useState } from 'react';
import Form from './components/Form';
import ExpenseList from './ExpenseTracker/ExpenseList';
import Filter from './ExpenseTracker/Filter';
import ExpenseForm from './ExpenseTracker/ExpenseForm';
import categories from './ExpenseTracker/categies';

function App() {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [expenses, setExpenses] = useState([
    {
      id: 1,
      description: 'Milk',
      amount: 100,
      category: 'Groceries',
    },
    {
      id: 2,
      description: 'Coffee',
      amount: 120,
      category: 'Groceries',
    },
    {
      id: 3,
      description: 'Sugar',
      amount: 140,
      category: 'Groceries',
    },
  ]);

  const handleDelete = (id: number) => {
    const newExpenses = expenses.filter((expense) => expense.id !== id);
    setExpenses(newExpenses);
  };

  const visibleExpenses = selectedCategory
    ? expenses.filter((e) => e.category === selectedCategory)
    : expenses;

  return (
    <>
      <ExpenseForm
        onSubmit={(expense) =>
          setExpenses([...expenses, { ...expense, id: expenses.length + 1 }])
        }
      />
      <Filter
        onSelectCategory={(category) => {
          setSelectedCategory(category);
        }}
      />
      <ExpenseList expenses={visibleExpenses} onDelete={handleDelete} />
    </>
  );
}

export default App;
