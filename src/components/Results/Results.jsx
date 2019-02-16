import React from 'react';
import Table from '../Table/Table';
import styled from 'styled-components';

const H2 = styled.h2`
    text-align: center;
`

function Results() {
    return (
        <div>
            <H2>Results</H2>
            <Table />
        </div>
    )
}

export default Results;