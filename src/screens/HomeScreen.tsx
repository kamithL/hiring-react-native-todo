import React, { useState } from 'react';
import {
  SafeAreaView,
  Text,
  StyleSheet,
  FlatList,
  View,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import type { Todo } from '../hooks/useTodos';
import TodoItem from '../components/TodoItem';
import { useTodoContext } from '../contexts/TodoContext';

export default function HomeScreen() {
  const { todos, add, toggle, update, remove, loaded } = useTodoContext();
  const [adding, setAdding] = useState(false);
  const [draft, setDraft] = useState('');

  const commitAdd = () => {
    const text = draft.trim();
    if (text) add(text);
    setDraft('');
    setAdding(false);
  };

  if (!loaded) return null;

  // Inject a dummy item at the top when adding
  const data: (Todo | { id: string })[] = adding
    ? [{ id: '__new' }, ...todos]
    : todos;

  return (
    <SafeAreaView style={styles.safe}>
      <Text style={styles.header}>tasked</Text>

      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        style={styles.wrapper}
      >
        <FlatList
          data={data}
          keyExtractor={item => item.id}
          renderItem={({ item }) =>
            item.id === '__new' ? (
              <View style={styles.inputRow}>
                {/* filled black box like other items */}
                <View style={[styles.checkbox, styles.uncheckedBox]} />
                <TextInput
                  style={styles.input}
                  placeholder="New task…"
                  value={draft}
                  onChangeText={setDraft}
                  autoFocus
                  returnKeyType="done"
                  onSubmitEditing={commitAdd}
                  onBlur={commitAdd}
                />
              </View>
            ) : (
              <TodoItem
                todo={item as Todo}
                onToggle={() => toggle(item.id)}
                onUpdate={newTitle => update(item.id, newTitle)}
                onDelete={() => remove(item.id)}
              />
            )
          }
          contentContainerStyle={{ paddingBottom: 120 }}
        />

        {!adding ? (
          <TouchableOpacity
            style={styles.fab}
            onPress={() => setAdding(true)}
          >
            <Icon name="plus" size={28} color="#fff" />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            style={styles.fab}
            onPress={() => {
              setAdding(false);
              setDraft('');
            }}
          >
            <Icon name="close" size={28} color="#fff" />
          </TouchableOpacity>
        )}
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const BOX_SIZE = 24;

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 32,
    fontWeight: '800',
    paddingHorizontal: 16,
    paddingVertical: 12,
    color: '#222',
  },
  wrapper: { flex: 1 },
  inputRow: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F0F0F0',
    marginHorizontal: 16,
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 8,
    marginBottom: 12,
  },
  checkbox: {
    width: BOX_SIZE,
    height: BOX_SIZE,
    borderRadius: 4,
    marginRight: 8,
  },
  uncheckedBox: {
    backgroundColor: '#222',  // filled black
  },
  input: {
    flex: 1,
    fontSize: 16,
  },
  fab: {
    position: 'absolute',
    bottom: 24,
    right: 24,
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: '#4CB5AE',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 4,
  },
});
