import React from "react";
import { Col, Card, CardBody, CardTitle, CardText, Button } from "reactstrap";
import { NavLink as RouterNavLink, withRouter } from "react-router-dom";

const MovieItem = ({
    movieData,
    exposedToken,
    token,
    removeItem
}) => (
        <>
            <Col md="4" className="my-3">
                <Card>
                    <CardBody>
                        <CardTitle>{movieData.title}</CardTitle>
                        <CardText>Release Date: {movieData.release_date}</CardText>
                        <div className="clearfix p-2">
                            {exposedToken.permissions.indexOf("patch:actors+movies") !==
                                -1 ? (
                                    <Button
                                        color="primary"
                                        className="float-left"
                                        tag={RouterNavLink}
                                        to={{
                                            pathname: '/movies/add-movie',
                                            state: { movieData, editing: true, token }
                                        }}
                                    >
                                        Edit
                                </Button>
                                ) : null}
                            {exposedToken.permissions.indexOf("post+delete:movies") !== -1 ? (
                                <Button
                                    tag={RouterNavLink}
                                    to="/movies"
                                    color="danger"
                                    className="float-right"
                                    onClick={() => removeItem(movieData.id)}
                                >
                                    Delete
                            </Button>
                            ) : null}
                        </div>
                    </CardBody>
                </Card>
            </Col>
        </>
    );

export const Movie = withRouter(MovieItem)