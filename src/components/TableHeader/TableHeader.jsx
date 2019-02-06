import React from 'react';

class TableHeader extends React.Component {

    render() {
        
        const heading = this.props.name;

        return (
            <th>{heading}</th>
        )
    }
}

export default TableHeader;