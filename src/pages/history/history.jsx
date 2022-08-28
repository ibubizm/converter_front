import { useEffect } from 'react'
import { useState } from 'react'
import ListGroup from 'react-bootstrap/ListGroup'
import { getHistory } from '../../api/featch'

export const History = () => {
  const [history, setHistory] = useState([])

  useEffect(() => {
    getHistory().then((data) => setHistory(data))
  }, [])
  return (
    <>
      {history &&
        history.map((breakpoint) => (
          <ListGroup
            key={breakpoint.id}
            horizontal={breakpoint}
            className="my-2"
          >
            <ListGroup.Item variant="info">
              Курс на {new Date(breakpoint.date).toLocaleString().split(',')[0]}
            </ListGroup.Item>
            <ListGroup.Item>EUR {breakpoint.eur}</ListGroup.Item>
            <ListGroup.Item>RUB {breakpoint.rub}</ListGroup.Item>
            <ListGroup.Item>JPY {breakpoint.jpy}</ListGroup.Item>
          </ListGroup>
        ))}
    </>
  )
}
