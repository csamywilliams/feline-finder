import React from 'react';
import styled from 'styled-components';

const Nav = styled.nav`
    background-color: #35BB9B;
    height: 100%;
`;

function SideNavBar() {
    return (
        <Nav>
            <ul>
                <li>
                    List item 1
                </li>
                <li>
                    List item 2
                </li>
            </ul>
        </Nav>
    )
}

export default SideNavBar;