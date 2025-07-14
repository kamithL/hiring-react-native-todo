import { useState, useEffect, useCallback } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import 'react-native-get-random-values'; 
import { v4 as uuidv4 } from 'uuid';

export interface Todo {
  id: string;
  title: string;
  done: boolean;
}

const STORAGE_KEY = '@tasked:todos';

export function useTodos() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [loaded, setLoaded] = useState(false);


  useEffect(() => {
    AsyncStorage.getItem(STORAGE_KEY)
      .then(json => {
        if (json) {
          setTodos(JSON.parse(json));
        }
      })
      .finally(() => {
        setLoaded(true);
      });
  }, []);


  useEffect(() => {
    if (loaded) {
      AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
    }
  }, [todos, loaded]);

  const add = useCallback((title: string) => {
    setTodos(current => [
      { id: uuidv4(), title, done: false },
      ...current,
    ]);
  }, []);

  const toggle = useCallback((id: string) => {
    setTodos(current =>
      current.map(todo =>
        todo.id === id ? { ...todo, done: !todo.done } : todo
      )
    );
  }, []);

  const update = useCallback((id: string, newTitle: string) => {
    setTodos(current =>
      current.map(todo =>
        todo.id === id ? { ...todo, title: newTitle } : todo
      )
    );
  }, []);

  const remove = useCallback((id: string) => {
    setTodos(current => current.filter(todo => todo.id !== id));
  }, []);

  return { todos, add, toggle, update, remove, loaded };
}
