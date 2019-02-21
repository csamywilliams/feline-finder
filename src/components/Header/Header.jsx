import React from 'react';
import styled from 'styled-components';
import { AppContext } from '../../context/AppContext';

const Heading = styled.div`
    background-color: #73B1F4;
    height: 70px;
    width: 100vw;
`;

const H1 = styled.h1`
    margin-top: 0;
    padding: 15px;
`;

function Header() {

    return (
        <Heading>
            <AppContext.Consumer>
                {(context) => <H1>{context.title}</H1>}
            </AppContext.Consumer>
        </Heading>
    )
}

export default Header;