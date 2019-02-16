import React from 'react';
import styled from 'styled-components';

const Header = styled.th`
    background-color: #F5BA45;
    color: #444;
    padding: 5px;
`;

class TableHeader extends React.Component {
    

    render() {
        
        const heading = this.props.name;

        return (
            <Header>{heading}</Header>
        )
    }
}

export default TableHeader;