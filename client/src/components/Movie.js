import React, { useState} from "react";
import { Col, Card, CardBody, CardTitle, CardText, Button } from "reactstrap";
import { AddMovie } from './Forms/AddMovie';
import { REACT_APP_SERVER_URL} from '../utils/auth_config'

export const Movie = ({ movieData, exposedToken, token }) => {
    const [editing, setEditing] = useState(false)
    const [modalOpen, toggleModal] = useState(false)
    const [movie, setMovie] = useState({
        title: (movieData && movieData.title) || '',
        release_date: (movieData && movieData.release_date) || ''
    })
    const url = `${REACT_APP_SERVER_URL}/movies`;

    const removeItem = async id => {
        await fetch(`${REACT_APP_SERVER_URL}/movies/${id}`, {
            method: 'DELETE',
            headers: {
                'Authorization': 'Bearer ' + token,
                'Content-Type': 'application/json'
            },
        })
    }

    const handleFormSubmit = async () => {
        const data = {
            title: movie.title,
            release_date: movie.release_date,
        }
        const result = await fetch(editing ? `${url}/${movieData.id}` : url, {
            method: editing ? 'PATCH' : 'POST',
            headers: {
                'Authorization': 'Bearer ' + token,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        const response = await result.json()
        setMovie({
            title: response.movie.title,
            release_date: response.movie.release_date
        })
        toggleModal()
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
                                    setEditing(true)
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
                modalOpen ? <AddMovie isOpen={modalOpen} toggleModal={() => toggleModal(!modalOpen)} movieData={movie} handleFormSubmit={handleFormSubmit} /> : null
            }
        </>
    );
}
