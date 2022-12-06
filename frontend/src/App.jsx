import CardsListPage from "./pages/CardsListPage";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./components/Header";
import './styles/App.css'


export default function App(){
    return (
        <div className="App">
            <Header />
            <div className="main">
                <CardsListPage/>
            </div>
        </div>
    )
}