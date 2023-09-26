import styled from "styled-components";
import { Checkbox } from "@mantine/core";
import { useState } from "react";
import { ThumbDown } from "tabler-icons-react";

const Container = styled.div`
  margin-top: 2rem;
`;

const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem 0;
`;

const TodoItems = ({ show, uid }) => {
  const [todos, setTodos] = useState([]);

  return (
    <Container>
      {todos.map((todo) => (
        <CheckboxContainer key={todo.id}>
          <Checkbox
            checked={todo.completed}
            onChange={() => {}}
            styles={{
              label: {
                textDecoration: todo.completed ? "line-through" : "none",
              },
            }}
            size="md"
            label={todo.title}
          />
          <ThumbDown
            size={24}
            strokeWidth={1}
            color={"black"}
            onClick={() => {}}
            sx={{ cursor: "pointer" }}
          />
        </CheckboxContainer>
      ))}
    </Container>
  );
};

export default TodoItems;
