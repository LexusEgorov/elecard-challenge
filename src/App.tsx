import { useEffect } from 'react';
import Footer from './components/footer/footer';
import Header from './components/header/header';
import CardsList from './components/view/cards-list/cards-list';
import { useAppDispatch } from './hooks/hooks';
import { fetchDataAction } from './store/api-actions';

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchDataAction());
  }, [dispatch]);

  return (
    <>
      <Header />
      <CardsList />
      <Footer />
    </>
  );
}

export default App;
