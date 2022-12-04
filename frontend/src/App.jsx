import React, { Component } from 'react';
import CardsListPage from "./pages/CardsListPage";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./components/Header";
import Buttons from "./components/Buttons";
import './styles/App.css'

export default class App extends Component{
    render(){
        return (
            <div className="App">
                <Header />
                <div className="main">
                    <CardsListPage />
                    <Buttons />
                </div>
            </div>
        )
    }
}