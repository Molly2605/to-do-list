import React, { useState, useEffect } from "react";
import { ChakraProvider, Box, VStack, Container } from "@chakra-ui/react";
import Form from "./components/Form";
import TodoList from "./components/TodoList";

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("all"); // todas, completas, incompletas

  // Carga tareas desde localStorage 
  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem("tasks"));
    if (storedTasks) {
      setTasks(storedTasks);
    }
  }, []);

  // Guarda tareas en localStorage 
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (task) => {
    setTasks([...tasks, { ...task, completed: false }]);
  };

  const toggleComplete = (taskId) => {
    setTasks(tasks.map((task) =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    ));
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  const filteredTasks = tasks.filter((task) => {
    if (filter === "completed") return task.completed;
    if (filter === "incompleted") return !task.completed;
    return true;
  });

  return (
    <VStack
      minHeight="100vh"
      justifyContent="center"
      alignItems="center"
      bg="gray.50"
      width="1900px"
    >
      <Box
        w="100%"
        maxW="600px"
        p={5}
      >
        <Form addTask={addTask} />
        <TodoList
          tasks={filteredTasks}
          toggleComplete={toggleComplete}
          deleteTask={deleteTask}
          setFilter={setFilter}
        />
      </Box>
    </VStack>
  );
};

export default App;
