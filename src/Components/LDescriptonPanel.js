import React from 'react';
import {
    MDBCard, MDBCardBody, MDBCardText, MDBCardHeader, MDBCardFooter,
    MDBContainer, MDBCardGroup
} from "mdbreact";
import { Grid} from '@material-ui/core';

const LDescriptionPanel = ({ results }) => {

    return (
        
        <Grid direction="column">

        <div>
            {(results === undefined)?(console.log("waiting...")):
                (
                    results.map((values) => (
                        <div>
                            <MDBContainer>
                                <MDBCardGroup >
                                        <MDBCard border="dark" style={{ maxWidth: "17rem" }}>
                                            <MDBCardHeader transparent border="light" style={{ textAlign: "center" }}>
                                                {values.type}
                                            </MDBCardHeader>
                                            <MDBCardBody className="dark" style={{ background: "#E8E8E8" }}>
                                                <MDBCardText style={{ textAlign: "center" }}>
                                                    {values.dimension}
                                                </MDBCardText>
                                            </MDBCardBody>
                                            <MDBCardFooter transparent border="light" style={{ textAlign: "center" }}>
                                                {values.residents.length + " Residents"}
                                            </MDBCardFooter>
                                        </MDBCard>
                                        </MDBCardGroup>

                    </MDBContainer>
                </div>
                 ) ))} 

                
        </div>
        </Grid>

                            )
                            
                        }
                        
                        export default LDescriptionPanel
                        
                        
