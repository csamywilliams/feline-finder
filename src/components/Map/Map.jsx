import React from 'react';
import styled from 'styled-components';

const MapContainer = styled.div`
    border: 1px solid grey;
    width: 70vw;
    height: 70vh;
    margin: 10px;
`;

function Map() {
    return (
        <MapContainer></MapContainer>
    )
}

export default Map;