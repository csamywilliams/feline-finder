import React from 'react';
import styled from 'styled-components';
import Map from '../Map/Map';

const ContentLayout = styled.div`
    width: 100vw;
`;


function MapContainer() {
    return (
        <div>
            <p>MapContainer</p>
            <Map />
        </div>
    )
}

export default MapContainer;