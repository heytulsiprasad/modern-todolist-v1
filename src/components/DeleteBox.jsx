import styled from "styled-components";
import { Button } from "@mantine/core";
import { ThumbDown } from "tabler-icons-react";
import { showNotification } from "@mantine/notifications";

const Container = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 1.875rem;
`;

const DeleteBox = ({ uid }) => {
  const handleDelete = () => {
    if (!uid) {
      showNotification({
        title: "Auth error",
        message: "Please login to delete a todo!",
        color: "red"
      })
    }
  }

  return (
    <Container>
      <Button
        onClick={handleDelete}
        variant="filled"
        color="red"
        leftIcon={<ThumbDown size={16} />}
      >
        Delete
      </Button>
    </Container>
  );
};

export default DeleteBox;
