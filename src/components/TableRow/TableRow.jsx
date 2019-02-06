import React from 'react';
import TableCell from '../TableCell/TableCell';

class TableRow extends React.Component {

    render() { 

        var cells = Object.keys(this.props.row).map((prop, value) => {
            return <TableCell key={value} value={this.props.row[prop]} />
        });

        return (
            <tr>
                {cells}
            </tr>
        )
    }
}

export default TableRow;