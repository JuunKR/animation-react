import styled from "styled-components";
import { motion } from "framer-motion"
import { Link } from "react-router-dom";

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

function Gestures() {
    return (
        <Wrapper>
            <Link to="/" style={{ margin: 10 }}>Home</Link>
        </Wrapper>
    );
}

export default Gestures;