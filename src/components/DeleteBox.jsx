import styled from "styled-components";
import { Button } from "@mantine/core";
import { ThumbDown } from "tabler-icons-react";

const Container = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 1.875rem;
`;

const DeleteBox = ({ uid }) => {
  return (
    <Container>
      <Button
        onClick={() => {}}
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
