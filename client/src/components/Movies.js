import React, { useState } from "react";
import { Container, Row, Button } from "reactstrap";
import jwt from "jwt-decode";
import { useFetch } from "../hooks/useFetch";
import { useAuth0 } from "../react-auth0-spa";
import { Movie } from "./Movie";
import { REACT_APP_SERVER_URL } from "../utils/auth_config";
import { Loader } from "./UI/Loader";

export const Movies = () => {
    const [openModal, setOpenModal] = useState(false);
    const [editing, setEditing] = useState(false);
    const [pageNum, setPageNum] = useState(1);
    const [token, setToken] = useState();
    const { getTokenSilently, user, loading } = useAuth0();

    if (user && !loading) getTokenSilently().then(res => setToken(res));

    let decodedToken;
    if (token) decodedToken = jwt(token);

    const url = `${REACT_APP_SERVER_URL}/movies?page=${pageNum}`;
    const result = useFetch(url, {}, token) || {};

    const selectPage = num => setPageNum(num);
    const create_pagination = () => {
        let pageNumbers = [];
        let maxPage = Math.ceil(result.total_movies / 10);

        for (let i = 1; i <= maxPage; i++) {
            pageNumbers = [
                ...pageNumbers,
                <span
                    key={i}
                    className={`page-num ${i === pageNum ? "active" : ""}`}
                    onClick={() => {
                        selectPage(i);
                    }}
                >
                    {i}
                </span>
            ];
        }
        return pageNumbers;
    };

    return (
        <Container>
            <h1>Movies!</h1>
            {decodedToken &&
                decodedToken.permissions.indexOf("post+delete:movies") !== -1 ? (
                    <Button
                        color="primary"
                        onClick={() => {
                            setOpenModal(!openModal);
                            setEditing(false);
                        }}
                    >
                        Add a movie
                    </Button>
                ) : null}
            <Row>
                {result.movies ? (
                    result.movies.map(movie => (
                        <Movie
                            key={movie.id}
                            movieData={movie}
                            exposedToken={decodedToken}
                            token={token}
                            openModal={openModal}
                            setOpenModal={setOpenModal}
                            editing={editing}
                            setEditing={setEditing}
                        />
                    ))
                    ) : (
                        <Loader />
                )}
            </Row>
            <Row className="justify-content-center">{create_pagination()}</Row>
        </Container>
    );
};
