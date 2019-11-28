import React, { useState } from 'react'
import { Modal, ModalHeader, ModalBody, ModalFooter, Button, Form, FormGroup, Label, Input } from 'reactstrap'
import { REACT_APP_SERVER_URL } from '../../utils/auth_config'

export const AddActor = ({ isOpen, toggleModal, actorData, editing, token }) => {
    const [formValues, setFormValues] = useState({
        name: (actorData && actorData.name) || '',
        age: (actorData && actorData.age) || '',
        gender: (actorData && actorData.gender) || ''
    })
    const url = `${REACT_APP_SERVER_URL}/actors`;

    const updateFormFields = (field, value) => {
        setFormValues({
            ...formValues,
            [field]: value
        })
    }

    const handleFormSubmit = async () => {
        const data = {
            name: formValues.name,
            age: formValues.age,
            gender: formValues.gender
        }
        await fetch(editing ? `${url}/${actorData.id}` : url, {
            method: editing ? 'PATCH' : 'POST',
            headers: {
                Authorization: 'Bearer ' + token,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        toggleModal()
    }

    return (
        <>
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
        </>
    )
}