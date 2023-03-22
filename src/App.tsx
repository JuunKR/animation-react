import styled from "styled-components";
import { motion } from "framer-motion"
import Router from "./Router";

const Wrapper = styled(motion.div)`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;





function App() {
  return (
    <Wrapper>
      <Router />
    </Wrapper>
  );
}

export default App;
