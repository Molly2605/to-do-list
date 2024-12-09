import React from "react";
import { Box, Checkbox, Text, IconButton, VStack } from "@chakra-ui/react";
import { DeleteIcon } from "@chakra-ui/icons";

const Todo = ({ task, toggleComplete, deleteTask }) => {
  return (
    <Box
      display="flex"
      justifyContent="space-between"
      p={4}
      mb={4}
      rounded="md"
      borderWidth="2px"
      borderColor={task.completed ? "gray.500" : "gray.200"}
      bg={task.completed ? "gray.100" : "gray.50"}
      textDecoration={task.completed ? "line-through" : "none"}
      _hover={{ bg: task.completed ? "gray.200" : "gray.50" }}
      transition="background-color 0.2s"
    >
      <Box display="flex" alignItems="center">
        <Checkbox
          isChecked={task.completed}
          onChange={() => toggleComplete(task.id)}
          colorScheme="gray"
        />
        <Text ml={4} color={task.completed ? "gray.500" : "gray.700"}>
          {task.text}
        </Text>
      </Box>
      <IconButton
        icon={<DeleteIcon />}
        onClick={() => deleteTask(task.id)}
        colorScheme="#111827"
        variant="ghost"
        aria-label="Eliminar tarea"
        _hover={{ bg: "red.100" }}
      />
    </Box>

  );
};

export default Todo;
