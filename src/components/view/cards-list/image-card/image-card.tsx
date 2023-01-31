import { Card } from 'react-bootstrap';
import { URL_API } from '../../../../const';

const BYTES_TO_KB = 1024;

type ImageCardProps = {
  filename: string,
  size: number,
  category: string,
  date: number,
}

function ImageCard({filename, size, category, date} : ImageCardProps) : JSX.Element {
  return(
    <Card 
      style={{width: '400px'}}
      className="p-1 mb-3"
    >
      <Card.Img src={`${URL_API}${filename}`} width={390} height={260}/>
      <Card.Body>
        <Card.Text>Filename: {filename}</Card.Text>
        <Card.Text>Size: {(size / BYTES_TO_KB).toFixed(2)} KB</Card.Text>
        <Card.Text>Category: {category}</Card.Text>
        <Card.Text>Date: {new Date(date).toLocaleDateString()}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default ImageCard;
