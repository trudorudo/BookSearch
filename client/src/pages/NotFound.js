import React from "react";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";

function NotFound(){
    return (
        <Container fluid>
            <Row>
                <Col size="md-12">
                    <Jumbotron>
                        <h1> Oooops... Page Not Found</h1>
                    </Jumbotron>
                </Col>
            </Row>
        </Container>
    )
}

export default NotFound;
