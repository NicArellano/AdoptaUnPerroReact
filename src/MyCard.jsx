
import Card from 'react-bootstrap/Card';
import "./style/style.css"
import {Tag} from './Tags'

export const MyCard = ({titulo , descripcion, imagen , tagColor , tagTitle}) => {
  return (

    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={imagen} />
      <Card.Body>
        <Card.Title>{titulo}</Card.Title>
        <Card.Text>
         {descripcion}
        </Card.Text>
        <Tag color={tagColor} title={tagTitle} />
      </Card.Body>
    </Card>
    
  )
}
