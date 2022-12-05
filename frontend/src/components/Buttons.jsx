import React, { useEffect } from "react";
import Button from 'react-bootstrap/Button';

export default function Buttons() {
    let array = [];

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

    useEffect(()=>{
        document.querySelector('.cards-list').addEventListener('change', activeChange)
    })

    const putStatus = () =>{
        array.map((item)=>{
            fetch(`http://127.0.0.1:8000/api/cards/${item.id}/`, {
                    method: "PUT",
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        status: item.val,
                    })
            })
            return item
        })
    }


    return (
        <div className="buttons">
            <Button variant="primary">Generate</Button>
            <Button onClick={putStatus} variant="success">Submit changes</Button>
        </div>
    );
};