import React, { Component } from 'react';
import styled from 'styled-components';




const Input = styled.input`
    padding: 0.5em;
    margin: 0.5em;
    color: ${props => props.inputColor || "palevioletred"};
    background: papayawhip;
    border: none;
    border-radius: 3px;
`;

const Wrapper = styled.section`
    padding: 6em;
    background: lightblue;

`;


class MainPage extends Component {


// got to Basics - Coming from CSS - Define Style Components outside of the render method



    render() {



        return (
            <Wrapper>
                <Input defaultValue="@probablyup" type="text" />
                <Input defaultValue="@geelen" type="text" inputColor="rebeccapurple" />
            </Wrapper>

        )
    }
}

export default MainPage;