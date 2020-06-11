import React from "react";
import styled from "styled-components";
import Navbar from "./Navbar";

const App = () => {
  return (
    <Container>
      <Navbar />
    </Container>
  );
};

export default App;

const Container = styled.div`
  background: rgb(131, 58, 180);
  background: linear-gradient(
    0deg,
    rgba(131, 58, 180, 1) 0%,
    rgba(253, 29, 29, 1) 30%,
    rgba(252, 176, 69, 1) 60%,
    rgba(255, 255, 255, 1) 90%
  );
  height: 100vh;
`;
