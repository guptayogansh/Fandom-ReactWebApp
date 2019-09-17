import React ,{Component} from 'react';
import Header from './Components/Header'
import SideBar from './Components/SideBar'
import MainContainer from './Components/MainContainer'
import LandingPageCard from './Components/LandingPageCard';


class App extends Component{
  render(){
    return(
      <div>
      <Header />
      <SideBar />
      <MainContainer >
         <LandingPageCard/>
      </MainContainer>

      </div>
    );
  }
}
export default App;
