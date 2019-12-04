import React, { useState } from "react";
import { Col, Card, CardBody, CardTitle, CardText, Button } from "reactstrap";
import { REACT_APP_SERVER_URL } from "../utils/auth_config";
import { NavLink as RouterNavLink, withRouter } from "react-router-dom";

const MovieItem = ({
    movieData,
    exposedToken,
    token
}) => {
    const [movie, setMovie] = useState({
        title: (movieData && movieData.title) || "",
        release_date: (movieData && movieData.release_date) || ""
    });

    const removeItem = async id => {
        await fetch(`${REACT_APP_SERVER_URL}/movies/${id}`, {
            method: "DELETE",
            headers: {
                Authorization: "Bearer " + token,
                "Content-Type": "application/json"
            }
        });
    };

    return (
        <>
            <Col md="4" className="my-3">
                <Card>
                    <CardBody>
                        <CardTitle>{movie.title}</CardTitle>
                        <CardText>Release Date: {movie.release_date}</CardText>
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
};

export const Movie = withRouter(MovieItem)