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
      borderColor={task.completed ? "pink.500" : "pink.200"}
      bg={task.completed ? "pink.100" : "pink.50"}
      textDecoration={task.completed ? "line-through" : "none"}
      _hover={{ bg: task.completed ? "pink.200" : "pink.50" }}
      transition="background-color 0.2s"
    >
      <Box display="flex" alignItems="center">
        <Checkbox
          isChecked={task.completed}
          onChange={() => toggleComplete(task.id)}
          colorScheme="pink"
        />
        <Text ml={4} color={task.completed ? "pink.500" : "pink.700"}>
          {task.text}
        </Text>
      </Box>
      <IconButton
        icon={<DeleteIcon />}
        onClick={() => deleteTask(task.id)}
        colorScheme="red"
        variant="ghost"
        aria-label="Eliminar tarea"
        _hover={{ bg: "red.100" }}
      />
    </Box>

  );
};

export default Todo;
