function Header() : JSX.Element {
  return(
    <header className='page-header container-fluid p-1 d-flex flex-row justify-content-center align-items-center'>
      <h2 className="text-center me-4">Вас преследует шапка</h2>
      <img src="header.png" alt="" width='100'/>
    </header>
  );
}

export default Header;
