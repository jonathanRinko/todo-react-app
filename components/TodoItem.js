import React from "react";
import { View, Text, TouchableOpacity, Button } from "react-native";
import { CheckBox } from "react-native-elements";
import styles from './styles'; 

export default function TodoItem({ task, deleteTask, toggleCompleted }) {
    return (
        <View style={styles.todo-item}> 
            <CheckBox
                value={task.completed}
                onValueChange={() => toggleCompleted(task.id)}
            />
            <Text style={[styles.todo-itemText, task.completed && styles.completed]}>
              {task.text}
           </Text>

            {/* <Text style={{ textDecorationLine: task.completed ? 'line-through' : 'none' }}>
              {task.text}
            </Text> */}

            {/* <Button title="X" onPress={() => deleteTask(task.id)} /> */}
              
          <TouchableOpacity
            style={styles.deleteButton}
            onPress={() => deleteTask(task.id)}>

            <Text style={{ color: '#fff' }}>Delete</Text>
          </TouchableOpacity>
        </View>
    );
}