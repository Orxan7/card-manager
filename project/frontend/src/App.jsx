import CardsListPage from "./pages/CardsListPage";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./components/Header";
import './styles/App.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import CardListPage from "./pages/CardListPage";


export default function App(){
    return (
        <div className="App">
            <Header />
            <div className="main">
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<CardsListPage/>}/>
                        <Route path="cards/:id" element={<CardListPage />} />
                    </Routes>
                </BrowserRouter>

            </div>
        </div>
    )
}