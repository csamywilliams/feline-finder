import React from 'react';
import styled from 'styled-components';
import TableHeader from '../TableHeader/TableHeader';
import TableRow from '../TableRow/TableRow';

const TableStyle = styled.table`
    width: 80%;
    border-collapse: collapse;
    border-spacing: 0;
    margin: 15px;
    text-align: center;
`;

class Table extends React.Component {

    render() { 

        const data = [ {
            id: 0,
            name: 'Blackie',
            age: 2,
            measurement: 'Year',
            colour: 'Black and White', 
            location: 'Swansea',
            postcode: 'SA7',
            breed: 'dsh',
            type: 'cat',
            stray: false,
            feral: false,
            neutored: false,
            microchip: true,
            missing_time: "5 days"
        },
        {
            id: 1,
            name: 'Charlie',
            age: 2,
            measurement: 'Year',
            colour: 'Black and White', 
            location: 'Swansea',
            postcode: 'SA7',
            breed: 'dsh',
            type: 'cat',
            stray: false,
            feral: false,
            neutored: false,
            microchip: true,
            missing_time: "5 days"
        }];


        const columns = [{
                name: 'Name',
                accessor: 'name'
            }, {
                name: 'Age',
                accessor: 'age'
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