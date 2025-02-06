import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { CheckBox } from "react-native-elements";
import styles from './styles'; 

export default function TodoItem({ task, deleteTask, toggleCompleted }) {
    return (
        <View style={styles.todoItem}> 
            <CheckBox
                value={task.completed}
                onValueChange={() => toggleCompleted(task.id)}
            />
            <Text style={[styles.todoItemText, task.completed && styles.completed]}>
              {task.text}
           </Text>

            {/* <Text style={{ textDecorationLine: task.completed ? 'line-through' : 'none' }}>
              {task.text}
            </Text> */}

            {/* <Button title="X" onPress={() => deleteTask(task.id)} /> */}
              
          <TouchableOpacity
            style={styles.deleteButton}
            onPress={() => deleteTask(task.id)}>

            <Text style={styles.deleteButtonText}>Delete</Text>
          </TouchableOpacity>
        </View>
    );
}