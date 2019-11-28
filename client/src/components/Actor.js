import React, { useState } from 'react'
import { Col, Card, CardBody, CardTitle, CardText, Button } from 'reactstrap';
import { AddActor } from './Forms/AddActor';
import { REACT_APP_SERVER_URL } from '../utils/auth_config'

export const Actor = ({ actor, exposedToken, token }) => {
    const [modalOpen, toggleModal] = useState(false)

    const removeItem = async id => {
        await fetch(`${REACT_APP_SERVER_URL}/actors/${id}`, {
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
                        <CardTitle>{actor.name}, {actor.age}</CardTitle>
                        <CardText>{actor.gender}</CardText>
                        <div className="clearfix p-2">
                            {exposedToken.permissions.indexOf("patch:actors+movies") !== -1 ? (
                                <Button color="primary" className="float-left" onClick={() => {
                                    toggleModal(!modalOpen)
                                }}>
                                    Edit
                            </Button>
                            ) : null}
                            {exposedToken.permissions.indexOf("post+delete:actors") !== -1 ? (
                                <Button color="danger" className="float-right" onClick={() => removeItem(actor.id)}>
                                    Delete
                            </Button>
                            ) : null}
                        </div>
                    </CardBody>
                </Card>
            </Col>
            {
                modalOpen ? <AddActor isOpen={modalOpen} toggleModal={() => toggleModal(!modalOpen)} actorData={actor} editing token={token} /> : null
            }
        </>
    )
}