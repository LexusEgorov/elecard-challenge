import { useAppSelector } from '../../../hooks/hooks';
import { getPagesCount } from '../../../store/page-data/selectors';
import PaginationElement from './pagination-element/pagination-element';

type PaginationProps = {
  currentPage: number,
}

function Pagination({currentPage} : PaginationProps) : JSX.Element {
  const pagesCount = useAppSelector(getPagesCount);
  const pages = [];

  for(let page = currentPage - 2; page < currentPage + 3; page++){
    if(page > 0 && page <= pagesCount){
      pages.push(
        <PaginationElement
          to={`/${page}`}
          key={page}
          active={page === currentPage}
        >
          {page}
        </PaginationElement>
      );
    }
  }

  return (
    <div className="pagination">
      <PaginationElement
        to='/1'
        disabled={currentPage === 1}
      >
        Начало
      </PaginationElement>
      <PaginationElement
        to={`/${currentPage - 1}`}
        disabled={currentPage === 1}
      >
        Назад
      </PaginationElement>
      {pages}
      <PaginationElement
        to={`/${currentPage + 1}`}
        disabled={currentPage === pagesCount}
      >
        Вперед
      </PaginationElement>
      <PaginationElement
        to={`/${pagesCount}`}
        disabled={currentPage === pagesCount}
      >Конец</PaginationElement>
    </div>
  );
}

export default Pagination;
