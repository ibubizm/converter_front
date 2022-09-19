import { useContext } from 'react'
import Button from 'react-bootstrap/esm/Button'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../../context/context'
import './statusbar.css'

export const Statusbar = () => {
  const { isAuth, setIsAuth, setUser, user } = useContext(UserContext)
  const navigate = useNavigate()

  const logoutButton = () => {
    setIsAuth(false)
    setUser({})
    localStorage.removeItem('token')
    navigate('/login')
  }

  return (
    <Navbar bg="primary" variant="dark">
      <Nav>
        {isAuth ? (
          <>
            <div className="username">{user.username}</div>
            <Button onClick={logoutButton}>logout</Button>
          </>
        ) : (
          <>
            <Nav.Link href="/login">Авторизация</Nav.Link>
            <Nav.Link href="/registration">Регистрация</Nav.Link>
          </>
        )}
      </Nav>
    </Navbar>
  )
}
