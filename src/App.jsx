import 'bootstrap/dist/css/bootstrap.min.css'
import { useState } from 'react'
import { Registration } from './pages/auth/registration'
import { Route, Routes } from 'react-router-dom'
import { Auth } from './pages/auth/auth'
import { Main } from './pages/main/main'
import { UserContext } from './context/context'
import { useEffect } from 'react'
import { auth } from './api/authApi'
import { Statusbar } from './components/statusbar/statusbar'

function App() {
  const [isAuth, setIsAuth] = useState(false)
  const [user, setUser] = useState({})
  useEffect(() => {
    auth().then((authData) => {
      if (authData) {
        console.log(authData)
        setUser(authData)
        setIsAuth(true)
      }
    })
  }, [])
  return (
    <div className="App">
      <UserContext.Provider value={{ isAuth, setIsAuth, user, setUser }}>
        <Statusbar />
        <Routes>
          {isAuth ? (
            <>
              <Route path="/" element={<Main />} />
            </>
          ) : (
            <>
              <Route path="registration" element={<Registration />} />
              <Route path="login" element={<Auth />} />
            </>
          )}
        </Routes>
      </UserContext.Provider>
    </div>
  )
}
export default App
