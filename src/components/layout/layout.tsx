import { Navigate, Outlet, useParams } from 'react-router-dom';
import Footer from '../footer/footer';
import Header from '../header/header';
import PagePagination from '../ui-kit/pagination/pagination';

function Layout() : JSX.Element {
  const {page} = useParams();

  if(!page || +page < 1){
    return <Navigate to='/1' />;
  }

  return (
    <div className="d-flex flex-column">
      <Header />
      <Outlet />
      <PagePagination currentPage={+page} pagesCount={100}/>
      <Footer />
    </div>
  )
}

export default Layout;
