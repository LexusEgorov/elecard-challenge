import { useEffect } from 'react';
import CardsList from './components/view/cards-list/cards-list';
import { useAppDispatch } from './hooks/hooks';
import { fetchDataAction } from './store/api-actions';

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchDataAction());
  }, [dispatch]);

  return (
    <div className="container">
      <CardsList />
    </div>
  );
}

export default App;
