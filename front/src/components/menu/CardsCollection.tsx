import { type Card } from "../../entities/cards";
import { UseDataFetching } from "../../hooks/UseDataFetching";
import { BackButton } from "../ui/BackButton";
import { CardTemplate } from "../ui/Card";

export const CardsCollection = () => {
    const { data, loading, error, refreshData } = UseDataFetching<Card[]>('http://localhost:3000/api/cards'); 

    if(loading) {
        return (
            <div>
                <p>Chargement ....</p>
            </div>
        )
    }

    if(error) {
        return (
            <div>
                <p>Erreur...</p>
            </div>
        )
    }

    return (
        <div>
            <BackButton />
            {data?.map(card => (
                <CardTemplate 
                    title={card.title}
                    description={card.description}
                    img={card.img}
                    cost={card.cost}
                />
            ))}
        </div>
    )    
}