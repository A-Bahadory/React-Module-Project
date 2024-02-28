import Card from "@/components/Card/Card";
import "./Deck.scss";
import cardsData from "@/data/fakeCards.json";

const Deck = () => {
  return cardsData.map((cardData) => {
    return (
      <Card title={cardData.title} url={cardData.url} image={cardData.image} />
    );
  });
};

export default Deck;
