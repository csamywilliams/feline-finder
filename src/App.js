import React, { Component } from 'react';
import styled from 'styled-components';
import Header from './components/Header/Header';
import SideNavBar from './components/SideNavBar/SideNavBar';
import Content from './components/Content/Content';

const MainLayout = styled.div`
  display: grid;
  grid-template-columns: 15% 75%;
`;

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <MainLayout>
          <SideNavBar />
          <Content />
        </MainLayout>
      </div>
    );
  }
}

export default App;
