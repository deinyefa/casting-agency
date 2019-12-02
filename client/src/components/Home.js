import React from "react";
import { Card, CardBody, CardImg, Container, Button } from "reactstrap";
import { Link } from "react-router-dom";
import { useAuth0 } from "../react-auth0-spa";
import ActorsImg from '../assets/actors.jpg'
import MoviesImg from '../assets/movies.jpg'

export const Home = () => {
  const { isAuthenticated } = useAuth0();
  return (
    <>
      <h1>Casting Agency</h1>
      {isAuthenticated ? (
        <Container className="d-flex">
          <Card>
            <CardImg
              top
              width="100%"
              height="300"
              src={MoviesImg}
              alt="Movies img"
            />
            <CardBody>
              <Link to="/movies">Manage movies</Link>
            </CardBody>
          </Card>
          <Card>
            <CardImg
              top
              width="100%"
              height="300"
              src={ActorsImg}
              alt="Actors img"
            />
            <CardBody>
              <Link to="/actors">Manage actors</Link>
            </CardBody>
          </Card>
        </Container>
      ) : (
        <p className="lead text-center">Login to continue</p>
      )}
    </>
  );
};
