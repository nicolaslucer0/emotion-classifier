import styled from "@emotion/styled";

const Text = styled.div`
  color: white;
  position: absolute;
  bottom: 0;
  margin-top: 10px;
`;

export const Error = () => <Text>Tu frase no puede estar vacía.</Text>;
