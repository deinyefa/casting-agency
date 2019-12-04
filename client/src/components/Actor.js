import React from "react";
import { Col, Card, CardBody, CardTitle, CardText, Button } from "reactstrap";
import { NavLink as RouterNavLink, withRouter } from "react-router-dom";

const ActorItem = ({
    actorData,
    exposedToken,
    token,
    removeItem
}) => (
        <>
            <Col md="4" className="my-3">
                <Card>
                    <CardBody>
                        <CardTitle>
                            {actorData.name}, {actorData.age}
                        </CardTitle>
                        <CardText>{actorData.gender}</CardText>
                        <div className="clearfix p-2">
                            {exposedToken.permissions.indexOf("patch:actors+movies") !==
                                -1 ? (
                                    <Button
                                        color="primary"
                                        className="float-left"
                                        tag={RouterNavLink}
                                        to={{
                                            pathname: '/actors/add-actor',
                                            state: { actorData, editing: true, token }
                                        }}
                                    >
                                        Edit
                                </Button>
                                ) : null}
                            {exposedToken.permissions.indexOf("post+delete:actors") !== -1 ? (
                                <Button
                                    color="danger"
                                    className="float-right"
                                    onClick={() => removeItem(actorData.id)}
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

export const Actor = withRouter(ActorItem)