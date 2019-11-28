import React, { useState} from "react";
import { Col, Card, CardBody, CardTitle, CardText, Button } from "reactstrap";
import { AddMovie } from './Forms/AddMovie';

export const Movie = ({ movie, exposedToken, token }) => {
    const [modalOpen, toggleModal] = useState(false)

    return (
        <>
            <Col md="4" className="my-3">
                <Card>
                    <CardBody>
                        <CardTitle>{movie.title}</CardTitle>
                        <CardText>Release Date: {movie.release_date}</CardText>
                        <div className="clearfix p-2">
                            {exposedToken.permissions.indexOf("patch:actors+movies") !== -1 ? (
                                <Button color="primary" className="float-left" onClick={() => {
                                    toggleModal(!modalOpen)
                                }}>
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
            {
                modalOpen ? <AddMovie isOpen={modalOpen} toggleModal={() => toggleModal(!modalOpen)} movieData={movie} editing token={token} /> : null
            }
        </>
    );
}
