import { View, Text, TouchableOpacity, TextInput } from "react-native";
import React, { useState } from "react";

export default function SingleTodo({ todo, alltodo, setalltodo }) {
  const [edit, setEdit] = useState(false);
  const [editedText, setEditedText] = useState(todo.text);

  const handleEdit = () => {
    if (!edit) {
      setEdit(!edit);
    } else {
      setEdit(!edit);
      setalltodo((prevTodos) =>
        prevTodos.map((t) =>
          t.id === todo.id ? { ...t, text: editedText } : t
        )
      );
    }
  };

  const handleDelete = () => {
    setalltodo((prevTodos) => prevTodos.filter((t) => t.id !== todo.id));
  };

  const handleTextChange = (text) => {
    setEditedText(text);
  };

  return (
    <View>
      {!edit ? (
        <Text>{todo.text}</Text>
      ) : (
        <TextInput
          value={editedText}
          onChangeText={handleTextChange}
          placeholder="Edit your todo"
        />
      )}

      <TouchableOpacity onPress={handleEdit}>
        <Text>edit</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={handleDelete}>
        <Text>delete</Text>
      </TouchableOpacity>
    </View>
  );
}
