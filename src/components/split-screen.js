import React from "react";
import { styled } from "styled-components";

const Container = styled.div`
display: flex;
`;
const Panel = styled.div`
flex: 1
`;

export const SplitScreen = ({ children }) => {
    const [left, right] = children;
    return (
        <Container>
            <Panel>{left}</Panel>
            <Panel>{right}</Panel>
        </Container>
    )
}