import React, { useState} from "react";
import { Col, Card, CardBody, CardTitle, CardText, Button } from "reactstrap";
import { AddMovie } from './Forms/AddMovie';
import { REACT_APP_SERVER_URL} from '../utils/auth_config'

export const Movie = ({ movie, exposedToken, token }) => {
    const [modalOpen, toggleModal] = useState(false)

    const removeItem = async id => {
        await fetch(`${REACT_APP_SERVER_URL}/movies/${id}`, {
            method: 'DELETE',
            headers: {
                Authorization: 'Bearer ' + token,
                'Content-Type': 'application/json'
            },
        })
    }

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
                                <Button color="danger" className="float-right" onClick={() => removeItem(movie.id)}>
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
