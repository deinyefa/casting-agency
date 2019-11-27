import React from "react";
import { Col, Card, CardBody, CardTitle, CardText, Button } from "reactstrap";

export const Movie = ({ movie, exposedToken }) => (
    <Col md="4">
        <Card>
            <CardBody>
                <CardTitle>{movie.title}</CardTitle>
                <CardText>Release Date: {movie.release_date}</CardText>
                <div className="clearfix p-2">
                    {exposedToken.permissions.indexOf("patch:actors+movies") !== -1 ? (
                        <Button color="primary" className="float-left">
                            Edit
                        </Button>
                    ) : null}
                    {exposedToken.permissions.indexOf("post+delete:movies") !== -1 ? (
                        <Button color="danger" className="float-right">
                            Delete
                        </Button>
                    ) : null}
                </div>
            </CardBody>
        </Card>
    </Col>
);
