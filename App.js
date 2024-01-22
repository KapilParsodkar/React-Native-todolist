import { FlatList, StatusBar, TextInput } from "react-native";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  ProgreeviewIOS,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";

import icon from "./assets/icon.png";
import SingleTodo from "./SingleTodo";

export default function App() {
  const [todo, settodo] = useState("");
  const [alltodo, setalltodo] = useState([]);

  const handleaddtodo = () => {
    if (!todo) return;
    setalltodo([...alltodo, { id: Date.now(), text: todo }]);
    settodo("");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Todo List</Text>
      <Text style={styles.heading}>{todo}</Text>
      <View style={styles.inputcontainer}>
        <TextInput
          placeholder="enter a to do"
          style={styles.input}
          value={todo}
          onChangeText={(text) => settodo(text)}
        />
        <TouchableOpacity onPress={handleaddtodo}>
          <Text style={styles.button}>Go</Text>
        </TouchableOpacity>
      </View>
      {/* <ScrollView>
        {alltodo.map((todo) => (
          <Text>{todo.text}</Text>
        ))}
      </ScrollView> */}
      <View>
        <FlatList
          data={alltodo}
          renderItem={({ item }) => (
            <SingleTodo todo={item} alltodo={alltodo} setalltodo={setalltodo} />
          )}
          keyExtractor={(item) => item.id.toString()}
        />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#FFDAD9",
  },
  heading: {
    marginVertical: 10,
    fontSize: 30,
    fontWeight: "700",
  },
  inputcontainer: {
    flexDirection: "row",
    marginHorizontal: 10,
    alignItems: "center",
  },
  input: {
    flex: 1,
    backgroundColor: "white",
    shadowColor: "black",
    elevation: 10,
    marginRight: 5,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 50,
  },
  button: {
    padding: 13,
    backgroundColor: "white",
    borderRadius: 50,
    elevation: 10,
  },
});
