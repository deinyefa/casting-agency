import React, { useState } from "react";
import { Container, Row, Button } from "reactstrap";
import jwt from "jwt-decode";
import { useFetch } from "../hooks/useFetch";
import  { Switch, Route, NavLink as RouterNavLink } from "react-router-dom";
import { Actor } from "./Actor";
import { useAuth0 } from "../react-auth0-spa";
import { REACT_APP_SERVER_URL } from "../utils/auth_config";
import { Loader } from "./UI/Loader";
import { AddActor } from "./Forms/AddActor";

const Actors = () => {
    const [editing, setEditing] = useState(false);
    const [pageNum, setPageNum] = useState(1);
    const [token, setToken] = useState();
    const { getTokenSilently, user, loading } = useAuth0();

    if (user && !loading) getTokenSilently().then(res => setToken(res));

    let decodedToken;
    if (token) decodedToken = jwt(token);

    const url = `${REACT_APP_SERVER_URL}/actors?page=${pageNum}`;
    const result = useFetch(url, {}, token);

    const selectPage = num => setPageNum(num);
    const create_pagination = () => {
        let pageNumbers = [];
        let maxPage = Math.ceil(result.total_actors / 10);

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
            <h1>Actors</h1>
            {decodedToken &&
                decodedToken.permissions.indexOf("post+delete:actors") !== -1 ? (
                    <Button
                        color="primary"
                        to={{
                            pathname: "/actors/add-actor",
                            state: { editing: false, actorData: null, token }
                        }}
                        tag={RouterNavLink}
                    >
                        Add an actor
                    </Button>
            ) : null}
            <Row>
                {result.actors ? (
                    result.actors.map(actor => (
                        <Actor
                            key={actor.id}
                            actorData={actor}
                            exposedToken={decodedToken}
                            token={token}
                            editing={editing}
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

export const RouteActors = () => (
    <Switch>
        <Route path="/actors/add-actor" component={AddActor} />
        <Route path="/actors" component={Actors} />
    </Switch>
)