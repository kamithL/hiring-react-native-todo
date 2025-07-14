import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useTodoContext } from '../contexts/TodoContext';

export default function TodoInput() {
  const { add } = useTodoContext();
  const [draft, setDraft] = useState('');

  const commit = () => {
    const text = draft.trim();
    if (text) add(text);
    setDraft('');
  };

  return (
    <View style={styles.container}>
      <Icon name="check-box-outline-blank" size={24} color="#333" />
      <TextInput
        style={styles.input}
        placeholder="New task…"
        value={draft}
        onChangeText={setDraft}
        returnKeyType="done"
        onSubmitEditing={commit}
        onBlur={commit}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F0F0F0',
    marginHorizontal: 16,
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 8,
    marginBottom: 12,
  },
  input: {
    flex: 1,
    marginLeft: 8,
    fontSize: 16,
  },
});
