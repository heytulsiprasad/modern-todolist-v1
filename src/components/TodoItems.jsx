import styled from "styled-components";
import { Checkbox } from "@mantine/core";
import { useState, useEffect } from "react";
import { ThumbDown } from "tabler-icons-react";
import { collection, getDocs } from "firebase/firestore"
import { db } from "../config/firebase";

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


    async function fetchTodos(show) {
      const allTodos = [];
      const todosRef = collection(db, "users", uid, "todos");
      const todosSnap = await getDocs(todosRef)

      todosSnap.forEach((doc) => {
        allTodos.push({
          ...doc.data(),
          id: doc.id
        })
      });

      return allTodos;
    }


  useEffect(() => {
    const doOps = async () => {
        let res;
        if (show === "all") {
          res = fetchTodos();
          console.log(res);
        } else if (show === "active") {
          res = fetchTodos()
          console.log(res);

          // res = res.filter((todos) => todos.completed !== true);
        } else {
          res = fetchTodos()
          console.log(res);

          // res = res.filter((todos) => todos.completed);
        }
    }

    doOps();
  }, [show])


  // all, active, completed

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
