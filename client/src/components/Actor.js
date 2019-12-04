import React, { useState } from "react";
import { Col, Card, CardBody, CardTitle, CardText, Button } from "reactstrap";
import { REACT_APP_SERVER_URL } from "../utils/auth_config";
import { NavLink as RouterNavLink, withRouter } from "react-router-dom";

const ActorItem = ({
    actorData,
    exposedToken,
    token
}) => {
    const [actor, setActor] = useState({
        name: (actorData && actorData.name) || "",
        age: (actorData && actorData.age) || "",
        gender: (actorData && actorData.gender) || ""
    });

    const removeItem = async id => {
        await fetch(`${REACT_APP_SERVER_URL}/actors/${id}`, {
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
                        <CardTitle>
                            {actor.name}, {actor.age}
                        </CardTitle>
                        <CardText>{actor.gender}</CardText>
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
                                    onClick={() => removeItem(actor.id)}
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

export const Actor = withRouter(ActorItem)