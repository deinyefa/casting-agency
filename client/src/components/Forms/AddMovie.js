import React, { useState } from 'react'
import { Modal, ModalHeader, ModalBody, ModalFooter, Button, Form, FormGroup, Label, Input } from 'reactstrap'
import { REACT_APP_SERVER_URL } from '../../utils/auth_config'

export const AddMovie = ({ isOpen, toggleModal, movieData, token, editing }) => {
    const [formValues, setFormValues] = useState({
        title: (movieData && movieData.title) || '',
        release_date: (movieData && movieData.release_date) || ''
    })
    const [result, setResult] = useState()
    const url = `${REACT_APP_SERVER_URL}/movies`;

    const updateFormFields = (field, value) => {
        setFormValues({
            ...formValues,
            [field]: value
        })
    }

    const handleFormSubmit = async () => {
        const data = {
            title: formValues.title,
            release_date: formValues.release_date,
        }
        setResult(await fetch(editing ? `${url}/${movieData.id}` : url, {
            method: editing ? 'PATCH' : 'POST',
            headers: {
                'Authorization': 'Bearer ' + token,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }))
        toggleModal()
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