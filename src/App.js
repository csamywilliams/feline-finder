import React, { Component } from 'react';
import styled from 'styled-components';

import SideNavBar from './components/SideNavBar/SideNavBar';
import Content from './components/Content/Content';

const MainLayout = styled.div`
  display: grid;
  grid-template-columns: 15% 75%;
`;

class App extends Component {
  render() {
    return (
      <MainLayout>
        <SideNavBar />
        <Content />
      </MainLayout>
    );
  }
}

export default App;
