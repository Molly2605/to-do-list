import React, { useState } from "react";
import { Input, Button, InputGroup, InputLeftElement, Icon } from "@chakra-ui/react";
import { MdAdd } from "react-icons/md";

const Form = ({ addTask }) => {
  const [taskText, setTaskText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskText.trim()) {
      addTask({ id: Date.now(), text: taskText });
      setTaskText("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <InputGroup>
        <InputLeftElement pointerEvents="none">
          <Icon as={MdAdd} />
        </InputLeftElement>
        <Input
          type="text"
          placeholder="Añadir tarea..."
          value={taskText}
          onChange={(e) => setTaskText(e.target.value)}
          borderColor="pink.400"
          _focus={{ borderColor: "pink.500" }}
        />
      </InputGroup>
      <Button
        type="submit"
        colorScheme="pink"
        mt={2}
        width="full"
        _hover={{ bg: "pink.600" }}
        _active={{ bg: "pink.700" }}
      >
        Agregar tarea
      </Button>
    </form>

  );
};

export default Form;
