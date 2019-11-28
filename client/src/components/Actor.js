import React, { useState } from 'react'
import { Col, Card, CardBody, CardTitle, CardText, Button } from 'reactstrap';
import { AddActor } from './Forms/AddActor';

export const Actor = ({ actor, exposedToken, token }) => {
    const [modalOpen, toggleModal] = useState(false)

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
                                <Button color="danger" className="float-right">
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