import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Card from 'react-bootstrap/Card'
import './reg.css'
import { useState } from 'react'
import { login } from '../../api/authApi'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { UserContext } from '../../context/context'
import { useNavigate } from 'react-router-dom'

export const Auth = () => {
  const [data, setData] = useState({})
  const { setIsAuth, setUser } = useContext(UserContext)
  const navigate = useNavigate()

  const onSubmit = (e) => {
    e.preventDefault()
    login(data).then((d) => {
      if (d) {
        setIsAuth(true)
        setUser(d)
        navigate('/')
      }
    })
  }
  return (
    <div className="cover" style={{ height: '100vh' }}>
      <Card className="reg__card">
        <Card.Title>Авторизация</Card.Title>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              onChange={(e) => setData({ ...data, email: e.target.value })}
              type="email"
              placeholder="Enter email"
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
            Войти
          </Button>
          <Link style={{ marginLeft: '20px' }} to={'/registration'}>
            регистрация
          </Link>
        </Form>
      </Card>
    </div>
  )
}
