import { useEffect, useRef, useState } from 'react';
import ImageCard from './image-card/image-card';

const CARD_WIDTH = 400;

function CardsList() : JSX.Element {
  const cards = [1,2,3,4,5,6,7,8,9];  
  const listRef = useRef<HTMLDivElement | null>(null);
  const [cardsPerRow, setCardsPerRow] = useState(1);
  const position = cardsPerRow === 1 ? 'center' : 'around';

  const handleResize = () => {
    const containerWidth = listRef.current?.clientWidth ?? 0;
    const cardsCount = Math.floor(containerWidth / CARD_WIDTH);
    setCardsPerRow(cardsCount);
  };

  useEffect(() => {
    if(!listRef){
      return;
    }

    handleResize();
    window.addEventListener('resize', handleResize);
  }, [listRef]);

  return (
    <>
      <div className="text-center">{cardsPerRow}</div>
      <div className={`cards-list d-flex flex-row justify-content-${position} flex-wrap`} ref={listRef}>
        {
          cards.map((card) => <ImageCard key={card}/>)
        }
      </div>
    </>
  )
}

export default CardsList;
