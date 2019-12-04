import React, { useState } from "react";
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Button,
    Form,
    FormGroup,
    Label,
    Input
} from "reactstrap";
import { REACT_APP_SERVER_URL } from "../../utils/auth_config";
import { NavLink as RouterNavLink } from "react-router-dom";

export const AddActor = props => {
    const url = `${REACT_APP_SERVER_URL}/actors`;
    const { editing, actorData, token } = props.location.state;
    const [formValues, setFormValues] = useState({
        name: (editing && actorData && actorData.name) || "",
        age: (editing && actorData && actorData.age) || "",
        gender: (editing && actorData && actorData.gender) || ""
    });

    const updateFormFields = (field, value) => {
        setFormValues({
            ...formValues,
            [field]: value
        });
    };

    const handleFormSubmit = async (id, data) => {
        const result = await fetch(editing ? `${url}/${id}` : url, {
            method: editing ? "PATCH" : "POST",
            headers: {
                Authorization: "Bearer " + token,
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        });
        const response = await result.json();

        setFormValues({
            name: response.actor.name,
            age: response.actor.age,
            gender: response.actor.gender
        });
        props.history.push('/actors')
    };

    return (
        <>
            <Card>
                <CardHeader>Add an actor</CardHeader>
                <CardBody>
                    <Form
                        onSubmit={e => {
                            e.preventDefault();
                            handleFormSubmit({
                                name: formValues.name,
                                age: formValues.age,
                                gender: formValues.gender
                            });
                        }}
                    >
                        <FormGroup>
                            <Label>Actor name</Label>
                            <Input
                                type="text"
                                name="name"
                                id="name"
                                value={formValues.name}
                                onChange={e => updateFormFields("name", e.target.value)}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label>Actor age</Label>
                            <Input
                                type="text"
                                name="age"
                                id="age"
                                value={formValues.age}
                                onChange={e => updateFormFields("age", e.target.value)}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label>Actor gender</Label>
                            <Input
                                type="text"
                                name="gender"
                                id="gender"
                                value={formValues.gender}
                                onChange={e => updateFormFields("gender", e.target.value)}
                            />
                        </FormGroup>
                    </Form>
                </CardBody>
                <CardFooter className="d-flex justify-content-between">
                    <Button color="warning" tag={RouterNavLink} to="/actors">
                        Cancel
                    </Button>
                    <Button
                        color="primary"
                        type="submit"
                        onClick={e => {
                            e.preventDefault();
                            handleFormSubmit((actorData && actorData.id) || null ,{
                                name: formValues.name,
                                age: formValues.age,
                                gender: formValues.gender
                            });
                        }}
                    >
                        Add
                    </Button>
                </CardFooter>
            </Card>
        </>
    );
};
