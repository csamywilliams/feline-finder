import React from 'react';
import styled from 'styled-components';
import MapContainer from '../MapContainer/MapContainer';
import Results from '../Results/Results';

const ContentLayout = styled.div`
    background-color: #F4F6F9;
    width: 100vw;
    height: 100vh;
`;

function Content() {
    return (
        <ContentLayout>
            <MapContainer />
            <Results />
        </ContentLayout>
    )
}

export default Content;