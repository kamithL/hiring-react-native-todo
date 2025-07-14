import React, { useState, useRef, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  LayoutAnimation,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import type { Todo } from '../hooks/useTodos';

interface Props {
  todo: Todo;
  onToggle(): void;
  onUpdate(newTitle: string): void;
  onDelete(): void;
}

export default function TodoItem({ todo, onToggle, onUpdate, onDelete }: Props) {
  const [editing, setEditing] = useState(false);
  const [text, setText] = useState(todo.title);
  const inputRef = useRef<TextInput>(null);

  useEffect(() => {
    if (editing) {
      LayoutAnimation.easeInEaseOut();
      inputRef.current?.focus();
    }
  }, [editing]);

  const finish = () => {
    setEditing(false);
    const trimmed = text.trim();
    if (trimmed && trimmed !== todo.title) {
      onUpdate(trimmed);
    } else {
      setText(todo.title);
    }
  };

  return (
    <View style={styles.row}>
      {/* CUSTOM FILLED BOX */}
      <TouchableOpacity onPress={onToggle}>
        <View
          style={[
            styles.checkbox,
            todo.done ? styles.checkedBox : styles.uncheckedBox,
          ]}
        >
          {todo.done && (
            <Icon name="check" size={16} color="#fff" />
          )}
        </View>
      </TouchableOpacity>

      {editing ? (
        <TextInput
          ref={inputRef}
          style={[styles.input, todo.done && styles.doneText]}
          value={text}
          onChangeText={setText}
          onBlur={finish}
          returnKeyType="done"
          onSubmitEditing={finish}
        />
      ) : (
        <TouchableOpacity
          style={styles.labelContainer}
          onLongPress={() => setEditing(true)}
        >
          <Text style={[styles.label, todo.done && styles.doneText]}>
            {todo.title}
          </Text>
        </TouchableOpacity>
      )}

      <TouchableOpacity onPress={onDelete}>
        <Icon name="close" size={20} color="#999" />
      </TouchableOpacity>
    </View>
  );
}

const BOX_SIZE = 24;

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  checkbox: {
    width: BOX_SIZE,
    height: BOX_SIZE,
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  uncheckedBox: {
    backgroundColor: '#222',    // filled black
  },
  checkedBox: {
    backgroundColor: '#4CB5AE', // filled teal
  },
  labelContainer: {
    flex: 1,
    marginHorizontal: 12,
  },
  label: {
    fontSize: 16,
    color: '#222',
  },
  input: {
    flex: 1,
    fontSize: 16,
    marginHorizontal: 12,
    padding: 0,
  },
  doneText: {
    textDecorationLine: 'line-through',
    color: '#999',
  },
});
