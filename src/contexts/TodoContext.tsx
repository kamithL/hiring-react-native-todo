import React, { createContext, useContext, ReactNode } from 'react';
import { useTodos } from '../hooks/useTodos';

type TodosHook = ReturnType<typeof useTodos>;

const TodoContext = createContext<TodosHook | undefined>(undefined);

export function TodoProvider({ children }: { children: ReactNode }) {
  const todos = useTodos();
  return (
    <TodoContext.Provider value={todos}>
      {children}
    </TodoContext.Provider>
  );
}

export function useTodoContext() {
  const context = useContext(TodoContext);
  if (!context) {
    throw new Error('useTodoContext must be used within a TodoProvider');
  }
  return context;
}
