import React, { useState } from 'react';
import { Container, Row, Button } from 'reactstrap';
import jwt from 'jwt-decode';
import { useFetch } from '../hooks/useFetch';
import { Actor } from './Actor';
import { useAuth0 } from '../react-auth0-spa';
import { AddActor } from './Forms/AddActor';
import { REACT_APP_SERVER_URL } from '../utils/auth_config'

export const Actors = () => {
    const [openModal, setOpenModal] = useState(false)
    const [pageNum, setPageNum] = useState(1)
    const [token, setToken] = useState()
    const { getTokenSilently, user, loading } = useAuth0()

    if (user && !loading) getTokenSilently().then(res => setToken(res))

    let decodedToken;
    if (token) decodedToken = jwt(token)

    const url = `${REACT_APP_SERVER_URL}/actors?page=${pageNum}`
    const result = useFetch(url, {}, token)

    const selectPage = num => setPageNum(num)
    const create_pagination = () => {
        let pageNumbers = [];
        let maxPage = Math.ceil(result.total_actors / 10)

        for (let i = 1; i <= maxPage; i++) {
            pageNumbers = [...pageNumbers, <span
                key={i}
                className={`page-num ${i === pageNum ? 'active' : ''}`}
                onClick={() => { selectPage(i) }}>{i}
            </span>]
        }
        return pageNumbers
    }

    return (
        <Container>
            <h1>Actors</h1>
            {
                (decodedToken && decodedToken.permissions.indexOf("post+delete:actors") !== -1) ?
                    <Button color="primary" onClick={() => setOpenModal(!openModal)}>Add an actor</Button> :
                    null
            }
            { openModal ? <AddActor isOpen={openModal} toggleModal={() => setOpenModal(!openModal)} token={token} /> : null }
            <Row>
                {result.actors ? result.actors.map(actor => <Actor key={actor.id} actor={actor} exposedToken={decodedToken} token={token} />) : <p>Loading...</p>}
            </Row>
            <Row className="justify-content-center">
                {create_pagination()}
            </Row>
        </Container>
    )
}