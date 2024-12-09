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
          bg="#d1d5db"
          color="pink.800"
          borderColor= "#701a75"
          borderWidth="2px"
          rounded="md"
          fontWeight="bold"
          _hover={{ borderColor: "#701a75" }}
          _focus={{ borderColor: "#701a75", boxShadow: "0 0 0 1px #701a75" }}
        >
          <option value="all">Todas</option>
          <option value="completed">Completadas</option>
          <option value="incompleted">Incompletas</option>
        </Select>
      </Box>
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
