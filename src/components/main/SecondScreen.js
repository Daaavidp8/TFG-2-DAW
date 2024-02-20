import { FoodCard } from '../cards/FoodCard';
import {useParams} from "react-router-dom";

export function SecondScreen() {
    const { id } = useParams();
    return (
        <>
            <h1>Codigo del pedido: {id}</h1>
            <FoodCard/>
        </>
    );
}