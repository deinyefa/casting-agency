import React, { useState } from "react";
import { Col, Card, CardBody, CardTitle, CardText, Button } from "reactstrap";
import { AddActor } from "./Forms/AddActor";
import { REACT_APP_SERVER_URL } from "../utils/auth_config";

export const Actor = ({
    actorData,
    exposedToken,
    token,
    editing,
    setEditing,
    openModal,
    setOpenModal
}) => {
    const [openEditModal, setEditModal] = useState(false)
    const [actor, setActor] = useState({
        name: (actorData && actorData.name) || "",
        age: (actorData && actorData.age) || "",
        gender: (actorData && actorData.gender) || ""
    });
    const url = `${REACT_APP_SERVER_URL}/movies`;

    const removeItem = async id => {
        await fetch(`${REACT_APP_SERVER_URL}/actors/${id}`, {
            method: "DELETE",
            headers: {
                Authorization: "Bearer " + token,
                "Content-Type": "application/json"
            }
        });
    };

    const handleFormSubmit = async (id, data) => {
        console.log(id)
        console.log(data)
        const result = await fetch(editing ? `${url}/${id}` : url, {
            method: editing ? "PATCH" : "POST",
            headers: {
                Authorization: "Bearer " + token,
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        });
        const response = await result.json();

        setActor({
            name: response.actor.name,
            age: response.actor.age,
            gender: response.actor.gender
        });
        setOpenModal();
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
                                        onClick={() => {
                                            setEditing(true);
                                            setOpenModal(true);
                                            console.log('clicked')
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
            {openModal ? (
                <AddActor
                    isOpen={openModal}
                    toggleModal={() => setOpenModal(!openModal)}
                    actorData={actor}
                    handleFormSubmit={handleFormSubmit}
                    editing={editing}
                />
            ) : null}
        </>
    );
};
