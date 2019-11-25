import React from 'react';
import { Jumbotron, Card, CardBody, Container } from 'reactstrap';
import { Link } from 'react-router-dom';

export const Home = () => (
    <>
        <Jumbotron>Casting Agency</Jumbotron>
        <Container className="d-flex">
            <Card>
                <CardBody>
                    <Link to='/movies'>Movies</Link>
                </CardBody>
            </Card>
            <Card>
                <CardBody>
                    <Link to='/actors'>Actors</Link>
                </CardBody>
            </Card>
        </Container>


    </>
)