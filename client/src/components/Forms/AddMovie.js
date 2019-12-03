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

export const AddMovie = ({
    isOpen,
    toggleModal,
    movieData,
    handleFormSubmit,
    editing
}) => {
    const [formValues, setFormValues] = useState({
        title: (editing && movieData && movieData.title) || "",
        release_date: (editing && movieData && movieData.release_date) || ""
    });

    const updateFormFields = (field, value) => {
        setFormValues({
            ...formValues,
            [field]: value
        });
    };

    return (
        <Modal isOpen={isOpen} toggle={toggleModal}>
            <ModalHeader toggle={toggleModal}>Add a movie</ModalHeader>
            <ModalBody>
                <Form
                    onSubmit={e =>{
                        e.preventDefault()
                        handleFormSubmit({
                            title: formValues.title,
                            release_date: formValues.release_date
                        })}
                    }
                >
                    <FormGroup>
                        <Label>Movie title</Label>
                        <Input
                            type="text"
                            name="title"
                            id="title"
                            value={formValues.title}
                            onChange={e => updateFormFields("title", e.target.value)}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label>Movie release date</Label>
                        <Input
                            type="date"
                            name="release_date"
                            id="release_date"
                            value={formValues.release_date}
                            onChange={e => updateFormFields("release_date", e.target.value)}
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
                            title: formValues.title,
                            release_date: formValues.release_date
                        });
                    }}
                >
                    Add
                </Button>
            </ModalFooter>
        </Modal>
    );
};
