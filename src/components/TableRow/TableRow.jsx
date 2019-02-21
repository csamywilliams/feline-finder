import React from 'react';
import styled from 'styled-components';
import TableCell from '../TableCell/TableCell';


class TableRow extends React.Component {

    showRecord(record) {
        //open modal using the record details
    }

    render() { 

        const Tr = styled.tr`
            &:nth-child(even) {
                background: #E5E8EC;
            }

            &:nth-child(odd) {
                background: #FFFFFF;
            }
        `;

        const cells = Object.keys(this.props.row).map((prop, value) => {
            return <TableCell key={value} value={this.props.row[prop]} />
        });

        return (
            <Tr onClick={()=>this.showRecord(this.props.row)}>
                {cells}
            </Tr>
        )
    }
}

export default TableRow;