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

export const AddMovie = props => {
    const url = `${REACT_APP_SERVER_URL}/movies`;
    const { editing, movieData, token } = props.location.state
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
            title: response.movie.title,
            release_date: response.movie.release_date
        });
        props.history.push('/movies')
    };

    return (
        <Card>
            <CardHeader>Add a movie</CardHeader>
            <CardBody>
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
            </CardBody>
            <CardFooter className="d-flex justify-content-between">
                <Button tag={RouterNavLink} to="/movies" color="warning">
                    Cancel
                </Button>
                <Button
                    color="primary"
                    type="submit"
                    onClick={e => {
                        e.preventDefault();
                        handleFormSubmit((movieData && movieData.id )|| null, {
                            title: formValues.title,
                            release_date: formValues.release_date
                        });
                    }}
                >
                    Add
                </Button>
            </CardFooter>
        </Card>
    );
};
