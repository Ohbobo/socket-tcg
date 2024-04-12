import { type Card } from "../../entities/cards";
import { UseDataFetching } from "../../hooks/UseDataFetching";
import { BackButton } from "../ui/BackButton";
import { CardTemplate } from "../ui/Card";
import { CardsCollectionSlider } from "./CardsCollectionSlider";

export const CardsCollection = () => {
    const { data, loading, error, refreshData } = UseDataFetching<Card[] | null>('http://localhost:3000/api/cards'); 

    if(loading) {
        return (
            <section className="p-10 h-full">
                <div className="p-5 h-full border rounded-lg">
                    <BackButton />
                    <div>
                        <p>Chargement ....</p>
                    </div>
                </div>
            </section>
        )
    }

    if(error) {
        return (
            <section className="p-10 h-full">
                <div className="p-5 h-full border rounded-lg">
                    <BackButton />
                    <div>
                        <p>Erreur</p>
                    </div>
                </div>
            </section>
        )
    }

    if(data !== null) {
        return (
            <section className="p-10 h-full">
                <div className="p-5 h-full w-[70%] border rounded-lg">
                    <CardsCollectionSlider arr={data}/>
                </div>
            </section>
        )
    }
    
    return null;   
}