import React from 'react';
import styled from 'styled-components';
import TableCell from '../TableCell/TableCell';


class TableRow extends React.Component {

    render() { 

        const Tr = styled.tr`
            &:nth-child(even) {
                background: #ccc;
            }

            &:nth-child(odd) {
                background: #fff;
            }
        `;

        const cells = Object.keys(this.props.row).map((prop, value) => {
            return <TableCell key={value} value={this.props.row[prop]} />
        });

        return (
            <Tr>
                {cells}
            </Tr>
        )
    }
}

export default TableRow;