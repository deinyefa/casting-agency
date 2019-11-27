import React, { useState } from 'react'
import { Modal, ModalHeader, ModalBody, ModalFooter, Button, Form, FormGroup, Label, Input } from 'reactstrap'

export const AddActor = ({ isOpen, toggleModal }) => {
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
            <ModalHeader toggle={toggleModal}>Add an actor</ModalHeader>
            <ModalBody>
                <Form onSubmit={handleFormSubmit}>
                    <FormGroup>
                        <Label>Actor name</Label>
                        <Input
                            type="text"
                            name="name"
                            id="name"
                            value={formValues.name}
                            onChange={e => updateFormFields('name', e.target.value)} />
                    </FormGroup>
                    <FormGroup>
                        <Label>Actor age</Label>
                        <Input
                            type="text"
                            name="age"
                            id="age"
                            value={formValues.age}
                            onChange={e => updateFormFields('age', e.target.value)} />
                    </FormGroup>
                    <FormGroup>
                        <Label>Actor gender</Label>
                        <Input
                            type="text"
                            name="gender"
                            id="gender"
                            value={formValues.gender}
                            onChange={e => updateFormFields('gender', e.target.value)} />
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