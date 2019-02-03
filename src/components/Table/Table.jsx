import React from 'react';
import ReactTable from "react-table";
import 'react-table/react-table.css';

class Table extends React.Component {

    render() { 

        const data = [ {
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
        }]

        const columns = [{
                Header: 'Name',
                accessor: 'name'
            }, {
                Header: 'Age',
                accessor: 'age',
                Cell: props => <span className='number'>{props.value}</span> 
            },
            {
                Header: 'Colour',
                accessor: 'colour',
            },
            {
                Header: 'Location',
                accessor: 'location',
            },
            {
                Header: 'Breed',
                accessor: 'breed',
            },
            {
                Header: 'Microchip',
                accessor: 'microchip',
                Cell: ({ value }) => String(value)
            }
        ]
         
          return <ReactTable
            showPagination={true}
            data={data}
            columns={columns}
          />
    }
}

export default Table;