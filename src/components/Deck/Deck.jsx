import Card from "@/components/Card/Card";
import "./Deck.scss";
import cardsData from "@/data/fakeCards.json";


const Deck = () => {

    return (
        <>
        {cardsData.map((card, index) =>(
            <div key={index}>
                <p>City: {card.title}</p>
                <p>URL: {card.url}</p>
                <p>Child: {card.image}</p>
            </div>
        ))}
        </>
    )
    
}
// you will need to map over the cardsData array and render a Card component for each card object
// how will you pass props to the Card component?

// };

export default Deck;
