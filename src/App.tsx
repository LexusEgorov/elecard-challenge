import { useEffect } from 'react';
import { useAppDispatch } from './hooks/hooks';
import { fetchDataAction } from './store/api-actions';

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchDataAction());
  }, [dispatch]);

  return (
    <></>
  );
}

export default App;
