import React, {useEffect, useState} from 'react';
import Table from "react-bootstrap/Table";
import TableData from "../components/TableData";
import moment from "moment/moment";
import Buttons from "../components/Buttons";
import Generate from "../components/Generate";
import Search from "../components/Search";


const CardsListPage = () => {
    let [cards, setCards] = useState([])
    let [change, setChange] = useState(0)
    let array = []
    const activeChange = (event)=>{
        const el = event.target.getAttribute('key-atr');
        let ch = 0;
        array.filter((value)=>{
            if(value.id===el){
                value.val = event.target.value
                ch =1
            }
            return value
        })
        if(ch===0){
            array.push({
                id: el,
                val: event.target.value,
            })
        }
    }

    const csrf = document.cookie
        .split('; ')
        .find(row => row.startsWith('csrftoken'))
        .split('=')[1];

    const generate = (seria, value, month)=>{
        fetch(`/api/cards/`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                "X-CSRFToken": csrf
            },
            body: JSON.stringify({
                seria: seria,
                status: 'Not Active',
                expiry_date: moment().add(month, 'M').format(),
                use_date: moment().format(),
                number: value
            })
        }).then(()=>{setChange(1)})
    }


    let getCards = async () => {
        let response = await fetch('/api/cards/')
        let data = await response.json()
        setCards(data)
    }

    useEffect(() => {
        getCards()
        return ()=>{
            setChange(0)
        }
    }, [change])

    const deleteCard = (event)=>{
        const key = (event.target.parentElement.parentElement).childNodes[6].firstChild.getAttribute('key-atr');
        fetch(`/api/cards/${key}/`, {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json',
                "X-CSRFToken": csrf
            }
        }).then(() => {setChange(1)})
    }

    const putStatus = () =>{
        array.map((item)=>{
            fetch(`/api/cards/${item.id}/`, {
                method: "PUT",
                headers: {
                    'Content-Type': 'application/json',
                    "X-CSRFToken": csrf
                },
                body: JSON.stringify({
                    status: item.val,
                })
            })
            return item
        })
        setChange(1)
    }


    return (
        <>
        <Search />
        <div className="cards-list">
            <Table striped bordered hover>
                <thead>
                <tr>
                    <th>Seria</th>
                    <th>Number</th>
                    <th>Release Date</th>
                    <th>Expiry Date</th>
                    <th>Last Use Date</th>
                    <th>Sum</th>
                    <th>Status</th>
                    <th>Delete</th>
                </tr>
                </thead>
                <TableData cards={cards} deletecard={deleteCard} activeChange={activeChange} />
            </Table>
        </div>
        <Buttons putStatus={putStatus}/>
        <Generate generateRequest={generate}/>
        </>
    )
}

export default CardsListPage;
