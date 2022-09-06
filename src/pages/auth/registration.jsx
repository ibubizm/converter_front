import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Card from 'react-bootstrap/Card'
import './reg.css'
import { useState } from 'react'
import { registration } from '../../api/authApi'
import { Link, useNavigate } from 'react-router-dom'

export const Registration = () => {
  const [data, setData] = useState({})
  const navigate = useNavigate()

  const onSubmit = (e) => {
    e.preventDefault()
    registration(data).then((data) => {
      alert(data)
      navigate('/login')
    })
  }
  return (
    <div className="cover" style={{ height: '100vh' }}>
      <Card className="reg__card">
        <Card.Title>Регистрация</Card.Title>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              onChange={(e) => setData({ ...data, email: e.target.value })}
              type="email"
              placeholder="Enter email"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Имя пользователя</Form.Label>
            <Form.Control
              onChange={(e) => setData({ ...data, userName: e.target.value })}
              type="text"
              placeholder="Имя пользователя"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Пароль</Form.Label>
            <Form.Control
              onChange={(e) => setData({ ...data, password: e.target.value })}
              type="password"
              placeholder="Password"
            />
          </Form.Group>
          <Button onClick={onSubmit} variant="primary" type="submit">
            Регистрация
          </Button>
          <Link style={{ marginLeft: '20px' }} to={'/login'}>
            У меня есть аккаунт
          </Link>
        </Form>
      </Card>
    </div>
  )
}
