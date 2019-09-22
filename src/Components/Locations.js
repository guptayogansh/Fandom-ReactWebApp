import React, { Component } from 'react';
import Header from './Header'
import SideBar from './SideBar'
import MainContainer from './MainContainer';
import LDescriptionPanel from './LDescriptonPanel';

class Locations extends Component {
    
  state = {
    locations: {},
    resultsData:[]
  }

  componentDidMount() {
    
    fetch('https://rickandmortyapi.com/api/location/')
    .then(res => res.json())
      .then((data) => {
        this.setState({ locations: data })
        this.setState({ resultsData:data.results})
      })
      .catch(console.log)
  }

    render() {
        return (
            <div>
                <Header />
                <SideBar />
                <MainContainer>
                  <LDescriptionPanel results={this.state.resultsData} />
                </MainContainer>
            </div>
        );
    }
}

export default Locations