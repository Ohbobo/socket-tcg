import { useState } from "react"
import type { Card } from "../../entities/cards"
import { CardTemplate } from "../ui/Card";
import { BackButton } from "../ui/BackButton";
import { CircleArrowLeft } from 'lucide-react';
import { CircleArrowRight } from 'lucide-react';

export const CardsCollectionSlider = ({ arr }: {arr: Card[] }) => {
    const [pageIndex, setPageIndex] = useState(0);
    
    const cardsPerPage = 6;
    const totalPages = Math.ceil(arr.length / cardsPerPage);


    const previousPage = () => {
        const newIndex = pageIndex - 1 < 0 ? 0 : pageIndex -1;
        setPageIndex(newIndex);
    }

    const nextPage = () => {
        const newIndex = pageIndex + 1 >= totalPages ? totalPages - 1 : pageIndex + 1;
        setPageIndex(newIndex);
    }

    const renderCards = () => {
        const startIndex = pageIndex * cardsPerPage;
        const endIndex = Math.min(startIndex + cardsPerPage, arr.length);
        const displayedCards = arr.slice(startIndex, endIndex);
    
        return (
            <div className="grid grid-cols-3 gap-2 h-full">
                {
                    displayedCards.map((card, index) => (
                        <CardTemplate 
                            key={card.title}
                            title={card.title}
                            description={card.description}
                            img={card.img}
                            cost={card.cost}
                        />
                    ))
                }
            </div>
        )
      };

    return (
        <div className="h-full">
            <div className="flex justify-between mb-5">
                <BackButton />
                <div className="flex gap-5 items-center">
                    <button onClick={previousPage} disabled={pageIndex === 0}>
                        <CircleArrowLeft />
                    </button>
                    
                    <span>page {pageIndex + 1} sur {totalPages}</span>

                    <button onClick={nextPage} disabled={pageIndex === totalPages - 1}>
                        <CircleArrowRight />
                    </button>
                </div>
            </div>
            
            <div className="h-full">
                {renderCards()}
            </div>
      </div>
)
}
