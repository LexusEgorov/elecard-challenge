import { Navigate, Outlet, useParams } from 'react-router-dom';
import { useAppSelector } from '../../hooks/hooks';
import { getPagesCount } from '../../store/page-data/selectors';
import Footer from '../footer/footer';
import Header from '../header/header';

function Layout() : JSX.Element {
  const page = Number(useParams().page);
  const pagesCount = useAppSelector(getPagesCount);
  

  if(!page || page < 1){
    return <Navigate to='/1' />;
  }

  if(page > pagesCount){
    return <Navigate to={`/${pagesCount}`} />;
  }

  return (
    <div className="d-flex flex-column">
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}

export default Layout;
