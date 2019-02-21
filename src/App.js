import React, { Component } from 'react';
import {AppContext, constants} from './context/AppContext';
import styled from 'styled-components';
import Header from './components/Header/Header';
import SideNavBar from './components/SideNavBar/SideNavBar';
import Content from './components/Content/Content';

const MainLayout = styled.div`
  display: grid;
  grid-template-columns: 15% 75%;
`;

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      type: constants.cat
    }
  }

  render() {

    return (
      <div>
        <AppContext.Provider value={this.state.type}>
          <Header  />
          <MainLayout>
            <SideNavBar />
            <Content />
          </MainLayout>
        </AppContext.Provider>
      </div>
    );
  }
}

export default App;
