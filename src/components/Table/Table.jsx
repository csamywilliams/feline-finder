import React from 'react';
import TableHeader from '../TableHeader/TableHeader';
import TableRow from '../TableRow/TableRow';
import PropTypes from "prop-types";

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

        const rows = data.map((item) => {

            return (
                <TableRow key={item.id} row={item} columns={columns} />
            )

        });

        const headers = columns.map((item, index) => {

            return (
                <TableHeader key={index} name={item.name} />
            )

        });

        return (
            <table>
                <thead><tr>{headers}</tr></thead>
                <tbody>{rows}</tbody>
            </table>
        )
    }
}

export default Table;