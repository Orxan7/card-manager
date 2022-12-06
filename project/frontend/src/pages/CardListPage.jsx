import {useParams} from "react-router-dom";

const CardsListPage = () => {
    const { id } = useParams();
    return (
        <div>
            <h2>Card id: {id}</h2>
            <h1>Purchase history</h1>
        </div>
    )
}

export default CardsListPage;