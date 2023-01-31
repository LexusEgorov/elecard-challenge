import { useCallback, useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router';
import { useAppDispatch, useAppSelector } from '../../../hooks/hooks';
import { getPageData } from '../../../store/app-data/selectors';
import { setGridSize } from '../../../store/page-data/page-data';
import ImageCard from './image-card/image-card';

const CARD_WIDTH = 400;

function CardsList() : JSX.Element {
  const dispatch = useAppDispatch();

  const { page } = useParams();
  const listRef = useRef<HTMLDivElement | null>(null);
  const [columnsCount, setColumnsCount] = useState(1);
  const position = columnsCount === 1 ? 'center' : 'around';
  const cards = useAppSelector(getPageData(page ?? '1', columnsCount));  

  const handleResize = useCallback(() => {
    const containerWidth = listRef.current?.clientWidth ?? 0;
    const cardsCount = Math.floor(containerWidth / CARD_WIDTH);
    setColumnsCount(cardsCount > 0 ? cardsCount : 1);
    dispatch(setGridSize(cardsCount));
  }, [dispatch]);

  useEffect(() => {
    if(!listRef){
      return;
    }

    handleResize();
    window.addEventListener('resize', handleResize);
  }, [handleResize, listRef]);

  return (
    <div className={`cards-list d-flex flex-row justify-content-${position} flex-wrap`} ref={listRef}>
      {
        cards.map(({id, filesize, image, category, timestamp}) => 
          <ImageCard
            key={id}
            filename={image}
            size={filesize}
            category={category}
            date={timestamp}
          />
        )
      }
    </div>
  )
}

export default CardsList;
