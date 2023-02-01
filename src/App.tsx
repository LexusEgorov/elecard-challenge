import { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/layout/layout';
import Loader from './components/loader/loader';
import View from './components/view/view';
import { AppRoute } from './const';
import { useAppDispatch, useAppSelector } from './hooks/hooks';
import { fetchDataAction } from './store/api-actions';
import { getIsLoading } from './store/app-data/selectors';

function App() {
  const dispatch = useAppDispatch();  

  const isLoading = useAppSelector(getIsLoading);
  const [delayedLoadingStatus, setDelayedLoadingStatus] = useState(true);

  useEffect(() => {
    if(isLoading){
      setTimeout(() => {
        setDelayedLoadingStatus(false);
      }, 2000);
    } else {
      setDelayedLoadingStatus(true)
    }
  }, [isLoading]);

  useEffect(() => {
    dispatch(fetchDataAction());
  }, [dispatch]);
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.Root} element={<Layout />}>
          <Route path={AppRoute.Page} element={
            delayedLoadingStatus ?
              <Loader /> : 
              <View />
          }/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
