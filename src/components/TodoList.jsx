import React from "react";
import { Select, Box, Button, Checkbox, Text } from "@chakra-ui/react";
import Todo from "./Todo";

const TodoList = ({ tasks, toggleComplete, deleteTask, setFilter }) => {
  return (
    <Box mt={4} bg="pink.50" p={6} rounded="xl" shadow="lg">
      <Box display="flex" alignItems="center" mb={6} spacing={4}>
        <Select
          onChange={(e) => setFilter(e.target.value)}
          placeholder="Filtrar tareas"
          width="800px"
          bg="pink.200"
          color="pink.800"
          borderColor="pink.400"
          borderWidth="2px"
          rounded="md"
          fontWeight="bold"
          _hover={{ borderColor: "pink.500" }}
          _focus={{ borderColor: "pink.600", boxShadow: "0 0 0 1px pink.600" }}
        >
          <option value="all">Todas</option>
          <option value="completed">Completadas</option>
          <option value="incompleted">Incompletas</option>
        </Select>
      </Box>
      //seleccionar nuevo estilo
      {tasks.map((task) => (
        <Todo
          key={task.id}
          task={task}
          toggleComplete={toggleComplete}
          deleteTask={deleteTask}
        />
      ))}
    </Box>

  );
};

export default TodoList;
