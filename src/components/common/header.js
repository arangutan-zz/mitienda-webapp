import React, { Component } from 'react';
import styled from 'styled-components';

const Container = styled.div `
    display: flex;
`

const Logo = styled.div `
    with: 50%;
    color: red;
`

const ActionsContainer = styled.div `
    with: 50%;

    >p {
        color: green;
    }
`

class Header extends Component {

    render() {
        return (
            <Container>
                <Logo>E.</Logo>
                <ActionsContainer>
                    <p>Don’t have account? SIGN UP</p>
                </ActionsContainer>
            </Container>
        );
    }

}

export default Header;
