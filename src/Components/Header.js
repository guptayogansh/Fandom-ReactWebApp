import React,{Component} from 'react';
import './Header.css'

class Header extends Component{
    render(){
        return(
            <div className = 'header'>
                <img className ='rickmortylogo' 
                src={require('./rickmorty.jpg')}
                alt='Rick and Morty Logo'/>
            </div>
        );

    }
}

export default Header