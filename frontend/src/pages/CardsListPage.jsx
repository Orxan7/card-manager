import React, { useState, useEffect } from 'react';
import Table from "react-bootstrap/Table";
import moment from "moment";

const CardsListPage = () => {
    let [cards, setCards] = useState([])
    let [searchValue, setSearchValue] =  useState([])

    const changeInput = (event)=>{
        setSearchValue(event.target.value)
    }

    useEffect(() => {
        getCards()
        document.querySelector('.form-control').addEventListener('input', changeInput)
    }, [])

    let getCards = async () => {
        let response = await fetch('http://127.0.0.1:8000/api/cards/')
        let data = await response.json()
        setCards(data)
    }

    return (
        <div className="cards-list">
            <Table striped bordered hover>
                <thead>
                <tr>
                    <th>#</th>
                    <th>Seria</th>
                    <th>Number</th>
                    <th>Release Date</th>
                    <th>Expiry Date</th>
                    <th>Last Use Date</th>
                    <th>Sum</th>
                    <th>Status</th>
                </tr>
                </thead>
                <tbody>
                {cards.filter(item =>
                    item.status.includes(searchValue)||
                    item.seria.toString().includes(searchValue)||
                    item.number.toString().includes(searchValue)||
                    moment(item.release_date).format('YYYY/MM/DD h:mm:ss a').includes(searchValue)||
                    moment(item.expiry_date).format('YYYY/MM/DD h:mm:ss a').includes(searchValue)
                ).map((card)=>(
                    <tr key={card.id}>
                        <td>{card.id}</td>
                        <td>{card.seria}</td>
                        <td>{card.number}</td>
                        <td>{moment(card.release_date).format('YYYY/MM/DD h:mm:ss a')}</td>
                        <td>{moment(card.expiry_date).format('YYYY/MM/DD h:mm:ss a')}</td>
                        <td>{moment(card.use_date).format('YYYY/MM/DD h:mm:ss a')}</td>
                        <td>{card.sum}</td>
                        <td><select defaultValue={card.status} key-atr={card.id}>
                            <option>Not Active</option>
                            <option>Active</option>
                            <option>Expired</option>
                        </select>
                        </td>
                    </tr>
                ))}
                </tbody>
            </Table>
        </div>
    )
}

export default CardsListPage;
