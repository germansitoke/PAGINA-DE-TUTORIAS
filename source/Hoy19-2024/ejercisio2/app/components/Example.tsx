import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, FlatList, Text, StyleSheet, Alert } from 'react-native';

export const Example = () => {
  const [task, setTask] = useState(''); // campo de texto
  const [tasks, setTasks] = useState<string[]>([]); // lista de tareas
  const [errorMessage, setErrorMessage] = useState(''); // mensaje de error

  // Función agregar una tarea
  const addTask = () => {
    if (task.trim() !== '') { // Validació
      setTasks([...tasks, task]);
      setTask(''); // Limpiar
      setErrorMessage('');
    } else {
      setErrorMessage('Por favor, escribe una tarea antes de agregarla.');
    }
  };

  // Eliminar una tarea
  const deleteTask = (index: number) => {
    Alert.alert(
      'Eliminar tarea',
      '¿Estás seguro de que deseas eliminar esta tarea?',
      [
        { text: 'Cancelar', style: 'cancel' },
        { text: 'Eliminar', onPress: () => {
          const updatedTasks = tasks.filter((_, i) => i !== index);
          setTasks(updatedTasks);
        }},
      ],
      { cancelable: true }
    );
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Escribe una tarea"
        value={task}
        onChangeText={setTask}
      />
      <TouchableOpacity style={styles.addButton} onPress={addTask}>
        <Text style={styles.addButtonText}>Agregar Tarea</Text>
      </TouchableOpacity>

      {errorMessage !== '' && <Text style={styles.errorText}>{errorMessage}</Text>}

      <FlatList
        data={tasks}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <View style={styles.taskContainer}>
            <Text style={styles.taskText}>{item}</Text>
            <TouchableOpacity onPress={() => deleteTask(index)}>
              <Text style={styles.deleteButton}>Eliminar</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    backgroundColor: '#f8f8f8',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    padding: 25,
    marginBottom: 20,
    width: '100%',
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 2,
  },
  addButton: {
    backgroundColor: '#28a745',
    padding: 25,
    borderRadius: 20,
    marginBottom: 20,
    width: '100%',
    alignItems: 'center',
  },
  addButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  taskContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 25,
    backgroundColor: '#fff',
    borderRadius: 15,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 1,
  },
  taskText: {
    fontSize: 28,
    flex: 1,
  },
  deleteButton: {
    color: '#dc3545',
    fontWeight: 'bold',
  },
  errorText: {
    color: '#dc3545',
    fontSize: 16,
    marginBottom: 15,
  },
});
