import React from 'react';
import styled from 'styled-components';
import TableHeader from '../TableHeader/TableHeader';
import TableRow from '../TableRow/TableRow';
import { constants } from '../../context/AppContext';


const TableStyle = styled.table`
    width: 80%;
    border-collapse: collapse;
    border-spacing: 0;
    margin: 15px;
    text-align: center;
`;

class Table extends React.Component {

    render() { 

        const data = constants.cat.data;

        const columns = [{
                name: 'Name',
                accessor: 'name'
            }, {
                name: 'Age',
                accessor: 'age'
            },
            {
                name: 'Sex',
                accessor: 'sex'
            },
            {
                name: 'Colour',
                accessor: 'colour',
            },
            {
                name: 'Location',
                accessor: 'location',
            },
            {
                name: 'Breed',
                accessor: 'breed',
            },
            {
                name: 'Microchip',
                accessor: 'microchip'
            }
        ];

        const headers = columns.map((item, index) => {

            return (
                <TableHeader key={index} name={item.name} />
            )

        });

        const rows = data.map((item) => {
            const filterItem = columns.map((col) => {
                if(item.hasOwnProperty(col.accessor)) return item[col.accessor];
            });

            return (
                <TableRow key={item.id} row={filterItem} columns={columns} />
            )
        });

        return (
            <TableStyle>
                <thead><tr>{headers}</tr></thead>
                <tbody>{rows}</tbody>
            </TableStyle>
        )
    }
}

export default Table;