import React from 'react';
import { FlatList } from 'react-native';
import TodoItem from './TodoItem';
import { useTodoContext } from '../contexts/TodoContext';

export default function TodoList() {
  const { todos, toggle, update, remove } = useTodoContext();

  return (
    <FlatList
      data={todos}
      keyExtractor={item => item.id}
      renderItem={({ item }) => (
        <TodoItem
          todo={item}
          onToggle={() => toggle(item.id)}
          onUpdate={newTitle => update(item.id, newTitle)}
          onDelete={() => remove(item.id)}
        />
      )}
      contentContainerStyle={{ paddingBottom: 100 }}
    />
  );
}
