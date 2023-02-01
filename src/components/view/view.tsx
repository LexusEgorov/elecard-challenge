import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { SortType, ViewMode } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { resetImages } from '../../services/local-storage';
import { fetchDataAction } from '../../store/api-actions';
import { setSort } from '../../store/app-data/app-data';
import { getSortType, getTreeData } from '../../store/app-data/selectors';
import { getPagesCount } from '../../store/page-data/selectors';
import { firstLetterCapitalize } from '../../utils/utils';
import Modal from '../modal/modal';
import Pagination from '../ui-kit/pagination/pagination';
import CardsList from './cards-list/cards-list';
import Tree from './tree/tree';

function View() : JSX.Element {
  const dispatch = useAppDispatch();
  const page = Number(useParams().page);
  const sortTypes = Object.values(SortType);
  
  const pagesCount = useAppSelector(getPagesCount);
  const currentSort = useAppSelector(getSortType);
  const treeData = useAppSelector(getTreeData);
  
  const [viewMode, setViewMode] = useState(ViewMode.Cards); 
  const [imgUrl, setImgUrl] = useState('');
  const [isModalOpened, setIsModalOpened] = useState(false);

  const handleReset = () => {
    resetImages();
    setViewMode(ViewMode.Cards);
    dispatch(fetchDataAction());
  }

  const handleChangeSort = (sortType : SortType) => {
    dispatch(setSort(sortType))
  }

  const handleChangeView = (mode : ViewMode) => {
    setViewMode(mode);
  }

  return(
    <>
      <div className="page-view d-flex flex-column">
        <div className="controls d-flex flex-column">
          {
            viewMode === ViewMode.Cards &&
              <div className="sort d-flex">
                <p className='me-1'>Sort By: </p>
              {
                sortTypes.map((sort) => (
                  <div className="controls-btn me-1" key={sort}>
                    <input
                      type="radio"
                      id={sort}
                      checked={currentSort === sort}
                      onChange={() => handleChangeSort(sort)}
                    />
                    <label htmlFor={sort}>{firstLetterCapitalize(sort)}</label>
                  </div>
                ))
              }      
              </div>
          }
          <div className="view-mode d-flex">
          <p className='me-1'>View mode: </p>
            <div className="view-mode-control me-1">
              <input
                type="radio"
                id={ViewMode.Cards}
                checked={viewMode === ViewMode.Cards}
                onChange={() => handleChangeView(ViewMode.Cards)}
                />
              <label htmlFor={ViewMode.Cards}>Cards</label>
            </div>
            <div className="view-mode-control">
              <input
                type="radio"
                id={ViewMode.Tree}
                checked={viewMode === ViewMode.Tree}
                onChange={() => handleChangeView(ViewMode.Tree)}
              />
              <label htmlFor={ViewMode.Tree}>Tree</label>
            </div>
          </div>
            <button
              className='reset-btn'
              onClick={handleReset}
            >
              Вернуть как было
            </button>
        </div>
        {
          viewMode === ViewMode.Cards ? (
            <>
              <CardsList />
              <Pagination
                pagesCount={pagesCount}
                currentPage={page}
              />
            </>
          ) : (
            <>
              <Tree treeData={treeData} setImg={setImgUrl} modalToggler={setIsModalOpened}/>
              <Modal imgUrl={imgUrl} onClose={setIsModalOpened} isOpened={isModalOpened}/>
            </>
          )
        }
      </div>
    </>
  );
}

export default View;
