import React from 'react'
import { Col, Card, CardBody, CardTitle, CardText, Button } from 'reactstrap';

export const Actor = ({ actor, exposedToken }) => (
    <Col md="4">
        <Card>
            <CardBody>
                <CardTitle>{actor.name}, {actor.age}</CardTitle>
                <CardText>{actor.gender}</CardText>
                <div className="clearfix p-2">
                    {exposedToken.permissions.indexOf("patch:actors+movies") !== -1 ? (
                        <Button color="primary" className="float-left">
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
)