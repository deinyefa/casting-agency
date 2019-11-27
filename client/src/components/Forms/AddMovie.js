import React, { useState } from 'react'
import { Modal, ModalHeader, ModalBody, ModalFooter, Button, Form, FormGroup, Label, Input } from 'reactstrap'

export const AddMovie = ({ isOpen, toggleModal }) => {
    const [formValues, setFormValues] = useState({
        title: '',
        release_date: ''
    })

    const updateFormFields = (field, value) => {
        setFormValues({
            ...formValues,
            [field]: value
        })
    }

    const handleFormSubmit = (e) => {
        e.preventDefault()
        console.log('adding...')
        toggleModal();
    }

    return (
        <Modal isOpen={isOpen} toggle={toggleModal}>
            <ModalHeader toggle={toggleModal}>Add a movie</ModalHeader>
            <ModalBody>
                <Form onSubmit={handleFormSubmit}>
                    <FormGroup>
                        <Label>Movie title</Label>
                        <Input
                            type="text"
                            name="title"
                            id="title"
                            value={formValues.title}
                            onChange={e => updateFormFields('title', e.target.value)} />
                    </FormGroup>
                    <FormGroup>
                        <Label>Movie release date</Label>
                        <Input
                            type="date"
                            name="release_date"
                            id="release_date"
                            value={formValues.release_date}
                            onChange={e => updateFormFields('release_date', e.target.value)} />
                    </FormGroup>
                </Form>
            </ModalBody>
            <ModalFooter>
                <Button color="warning" onClick={toggleModal}>Cancel</Button>
                <Button color="primary" type='submit' onClick={handleFormSubmit}>Add</Button>
            </ModalFooter>
        </Modal>
    )
}