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
          placeholder="Ingrese una tarea..."
          value={taskText}
          onChange={(e) => setTaskText(e.target.value)}
          borderColor="#1c1917"
          _focus={{ borderColor: "#1c1917" }}
          backgroundColor={"pink.50"}
        />
      </InputGroup>
      <Button
        textColor={"#e5e7eb"}
        type="submit"
        backgroundColor="#1f2937"
        mt={2}
        width="full"
        _hover={{ bg: "#1c1917" }}
        _active={{ bg: "#1f2937" }}
      >
        Agregar tarea
      </Button>
    </form>

  );
};

export default Form;
