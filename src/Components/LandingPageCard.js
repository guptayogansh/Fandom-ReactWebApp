import React, { Component } from 'react';
import {Card} from 'react-bootstrap'
import './MainContainer.css';

class LandingPageCard extends Component {
    render() {
        return (
            <div>
                 <Card>
                    <Card.Header className="cardTitle">Rick and Morty</Card.Header>
                    <Card.Body>
                        <Card.Text>
                            Rick and Morty is an American adult animated science fiction 
                            sitcom created by Justin Roiland and Dan Harmon for 
                            Cartoon Network's late-night programming block Adult Swim. 
                            The series follows the misadventures of cynical mad scientist
                            Rick Sanchez and his good-hearted but fretful grandson Morty Smith,
                             who split their time between domestic life and interdimensional adventures.
                             <br/>
                            Roiland voices the eponymous characters, with Chris Parnell, Spencer Grammer
                            and Sarah Chalke voicing the rest of the family. The series originated from
                            an animated short parody film of Back to the Future, created by Roiland for
                            Channel 101, a short film festival co-founded by Harmon. The series has been
                            acclaimed by critics for its originality, creativity and humor.

                        </Card.Text>
                    </Card.Body>
                </Card>
            
            </div>
        );

    }
}

export default LandingPageCard