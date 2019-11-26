import React, { useState } from 'react';
import { Container, Row } from 'reactstrap';
import { useFetch } from '../hooks/useFetch';
import { Actor } from './Actor';
import { useAuth0 } from '../react-auth0-spa';

export const Actors = () => {
    const [pageNum, setPageNum] = useState(1)
    const [token, setToken] = useState()
    const { getTokenSilently } = useAuth0()
    getTokenSilently().then(res => setToken(res))
    
    const url = `/actors?page=${pageNum}`
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
            <h1>Actors!</h1>
            <Row>
                {result.actors ? result.actors.map(actor => <Actor key={actor.id} actor={actor} />) : <p>Loading...</p>}
            </Row>
            <Row>
                {create_pagination()}
            </Row>
        </Container>
    )
}