import { ThemeProvider, Button, Card } from 'react-bootstrap';

function App() {
  const id = [1,2,3,4,5,6];

  const handleClick = (data: number) => alert(`Вы нажали на карточку #${data}`);

  return (
    <ThemeProvider
      breakpoints={['xs', 'sm', 'md', 'xl']}
    >
      <div className="container row">
        {
          id.map((id) =>
            <Card
              style={{width: '300px', color: '#000'}}
              key={id}
            >
              <Card.Title>Карточка #{id}</Card.Title>
              <Card.Text>
                Очень интересное (нет) описание карточки
              </Card.Text>
              <Button variant='info' onClick={() => handleClick(id)}>Тыцк</Button>
            </Card>
          )
        }
      </div>
    </ThemeProvider>
  );
}

export default App;
