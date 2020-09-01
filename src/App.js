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
  background: #67bc98;
  height: 100vh;
`;
