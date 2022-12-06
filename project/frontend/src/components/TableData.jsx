import moment from "moment/moment";
import CloseButton from "react-bootstrap/CloseButton";
import React, { useEffect, useState } from "react";
import {Link} from "react-router-dom";


export default function TableData ({ cards, deletecard, activeChange }) {
    let [searchValue, setSearchValue] =  useState([])


    const changeInput = (event)=>{
        setSearchValue(event.target.value)
    }

    useEffect(() => {
        document.querySelector('.search-generate').addEventListener('input', changeInput)
    }, [])

    return (
        <tbody>
        {cards.filter(item =>
                (item.status).toLowerCase().includes((searchValue).toString().toLowerCase())||
                item.seria.toString().includes(searchValue)||
                item.number.toString().includes(searchValue)||
                moment(item.release_date).format('YYYY/MM/DD h:mm:ss a').includes(searchValue)||
                moment(item.expiry_date).format('YYYY/MM/DD h:mm:ss a').includes(searchValue)
            ).map((card)=>(
                <tr key={card.id}>

                    <td>{card.seria}</td>
                    <td><Link to={`/cards/${card.id}`}>{card.number}</Link></td>
                    <td>{moment(card.release_date).format('YYYY/MM/DD h:mm:ss a')}</td>
                    <td>{moment(card.expiry_date).format('YYYY/MM/DD h:mm:ss a')}</td>
                    <td>{moment(card.use_date).format('YYYY/MM/DD h:mm:ss a')}</td>
                    <td>{card.sum}</td>
                    <td><select defaultValue={card.status} onInput={activeChange} key-atr={card.id}>
                        <option>Not Active</option>
                        <option>Active</option>
                        <option>Expired</option>
                    </select>
                    </td>
                    <td><CloseButton onClick={deletecard}/></td>

                </tr>
        ))}
        </tbody>
    );
};