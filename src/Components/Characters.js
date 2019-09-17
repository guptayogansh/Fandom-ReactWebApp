import React, { Component } from 'react';
import { Card } from 'react-bootstrap';
import Header from './Header'
import SideBar from './SideBar'
import MainContainer from './MainContainer';

class Characters extends Component {
    state = {
        apiData: {}
    }

    componentDidMount() {
        fetch('https://rickandmortyapi.com/api/character/')
            .then(res => res.json())
            .then((data) => {
                this.setState({ apiData: data })
                console.log(this.state.apiData);
            })
            .catch(console.log)
    }
    render() {
        return (
            <div>
                <Header />
                <SideBar />
                <MainContainer />
                {/* <Card>
                    <Card.Header as="h5">Featured</Card.Header>
                    <Card.Body>
                        <Card.Title>Special title treatment</Card.Title>
                        <Card.Text>
                            With supporting text below as a natural lead-in to additional content.
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card> */}
            </div>
        );
    }
}

export default Characters