import React, { useState } from "react";
import {
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Button,
    Form,
    FormGroup,
    Label,
    Input
} from "reactstrap";

export const AddActor = ({
    isOpen,
    toggleModal,
    actorData,
    handleFormSubmit,
    editing
}) => {
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

    return (
        <>
            <Modal isOpen={isOpen} toggle={toggleModal}>
                <ModalHeader toggle={toggleModal}>Add an actor</ModalHeader>
                <ModalBody>
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
                </ModalBody>
                <ModalFooter>
                    <Button color="warning" onClick={toggleModal}>
                        Cancel
          </Button>
                    <Button
                        color="primary"
                        type="submit"
                        onClick={e => {
                            e.preventDefault();
                            handleFormSubmit({
                                name: formValues.name,
                                age: formValues.age,
                                gender: formValues.gender
                            });
                        }}
                    >
                        Add
          </Button>
                </ModalFooter>
            </Modal>
        </>
    );
};
