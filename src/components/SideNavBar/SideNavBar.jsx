import React from 'react';
import styled from 'styled-components';

const Nav = styled.nav`
    background-color: #d0d4c7;
    height: 100%;
`;

const Li = styled.li`
    list-style: none;
`

function SideNavBar() {
    return (
        <Nav>
            <ul>
                <Li>
                    List item 1
                </Li>
                <Li>
                    List item 2
                </Li>
            </ul>
        </Nav>
    )
}

export default SideNavBar;