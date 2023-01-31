import { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/layout/layout';
import CardsList from './components/view/cards-list/cards-list';
import { AppRoute } from './const';
import { useAppDispatch } from './hooks/hooks';
import { fetchDataAction } from './store/api-actions';

function App() {
  const dispatch = useAppDispatch();
    
  useEffect(() => {
    dispatch(fetchDataAction());
  }, [dispatch]);
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.Root} element={<Layout />}>
          <Route path={AppRoute.Page} element={<CardsList />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
