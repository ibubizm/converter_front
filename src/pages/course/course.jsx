import ListGroup from 'react-bootstrap/ListGroup'
import Card from 'react-bootstrap/Card'

export const Course = ({ currentCourese }) => {
  return (
    <>
      <Card.Title className="mb-2">
        Курс к $ на {new Date(currentCourese.date).toLocaleDateString()}
      </Card.Title>
      <ListGroup>
        <ListGroup.Item>{`EUR ${currentCourese.eur}`}</ListGroup.Item>
        <ListGroup.Item>RUB {currentCourese.rub}</ListGroup.Item>
        <ListGroup.Item>JPY {currentCourese.jpy}</ListGroup.Item>
      </ListGroup>
    </>
  )
}
