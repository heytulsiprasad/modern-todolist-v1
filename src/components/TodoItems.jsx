import styled from "styled-components";
import { Checkbox } from "@mantine/core";
import { useState, useEffect } from "react";
import { IconX } from "@tabler/icons-react";
import { collection, getDocs, query, updateDoc, where, doc, onSnapshot, deleteDoc, increment } from "firebase/firestore"
import { db } from "../config/firebase";
import { Bars } from "react-loader-spinner";

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
  const [loading, setLoading] = useState(true)

  // show: all, active, completed
  useEffect(() => {
    if (uid) {

      const todosRef = collection(db, "users", uid, "todos");
      const unsubscribe = onSnapshot(todosRef, (querySnapshot) => {
        setLoading(true);

        const allTodos = [];

        querySnapshot.forEach((doc) => {
          allTodos.push({
            id: doc.id,
            ...doc.data()
          })
        })

        setTodos(allTodos);
        setLoading(false);
      })


      return () => {
        unsubscribe(); // when component unmounts
      }
    }
  }, [show])

  const handleToggleComplete = async (todoId, status) => {
    const todoRef = doc(db, "users", uid, "todos", todoId);

    await updateDoc(todoRef, {
      completed: !!status
    })
  }

  const handleDelete = async (todoId) => {
    const todoRef = doc(db, "users", uid, "todos", todoId);
    await deleteDoc(todoRef);
  }

  return (
    <Container>
      {loading ? (
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", marginTop: "4rem" }}>
          <Bars
            height="60"
            width="60"
            color="#2f80ed"
            ariaLabel="bars-loading"
            wrapperClass=""
            visible={true}
          />
        </div>
      ) : (
        todos
          .filter((todo) =>
            show === "active"
              ? !todo.completed
              : show === "completed"
              ? todo.completed
              : true
          )
          .map((todo) => (
            <CheckboxContainer key={todo.id}>
              <Checkbox
                checked={todo.completed}
                onChange={() => handleToggleComplete(todo.id, !todo.completed)}
                styles={{
                  label: {
                    textDecoration: todo.completed ? "line-through" : "none",
                  },
                }}
                size="md"
                label={todo.title}
              />
              <IconX
                size={24}
                strokeWidth={1}
                color={"black"}
                onClick={() => handleDelete(todo.id)}
                style={{ cursor: "pointer" }}
              />
            </CheckboxContainer>
          ))
      )}
    </Container>  
  );
};

export default TodoItems;
