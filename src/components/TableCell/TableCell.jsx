import React from 'react';

class TableCell extends React.Component {

    render() { 

        const value = this.props.value;

        return (
            <td>
                { value }
            </td>
        )
    }
}

export default TableCell;