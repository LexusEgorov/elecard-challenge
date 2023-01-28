import { Card } from 'react-bootstrap';
import { APIRoute, URL_API } from '../../../../const';

function ImageCard() : JSX.Element {
  return(
    <Card 
      style={{width: '400px'}}
      className="p-1 m-auto"
    >
      <Card.Img src={`${URL_API}${APIRoute.Test}`} />
      <Card.Body>
        <Card.Text>Filename: animals-2939726__480.jpg</Card.Text>
        <Card.Text>Size: {(74353 / 1024).toFixed(2)} KB</Card.Text>
        <Card.Text>Category: Animal</Card.Text>
        <Card.Text>Date: {new Date(1393824669830).toLocaleDateString()}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default ImageCard;
