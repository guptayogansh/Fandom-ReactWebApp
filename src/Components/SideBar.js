import React,{Component} from 'react';
import './SideBar.css'

class SideBar extends Component{
    render(){
        return(
                <div className="sideBarColumn">
                    <p>Locations</p><br/>
                    <p>Characters</p><br/>
                    <p>Episodes</p><br/>
                </div>
        );

    }
}

export default SideBar