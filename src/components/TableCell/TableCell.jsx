import React from 'react';
import styled from 'styled-components';

const Cell = styled.td`
    padding: 5px;
`;

class TableCell extends React.Component {

    render() { 

        const value = (this.props.value).toString();

        return (
            <Cell>
                { value }
            </Cell>
        )
    }
}

export default TableCell;