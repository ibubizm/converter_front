import axios from 'axios'

export const registration = async ({ userName, email, password }) => {
  try {
    const { data } = await axios.post(
      'http://localhost:4000/auth/registration',
      {
        email,
        password,
        userName,
      }
    )
    console.log(data``)
    return data.msg
  } catch (e) {
    console.log(e)
  }
}

export const login = async ({ email, password }) => {
  try {
    const { data } = await axios.post('http://localhost:4000/auth/login', {
      email,
      password,
    })
    localStorage.setItem('token', data.token)
    return data.user
  } catch (e) {
    alert('bad password')
    console.log(e)
  }
}

export const auth = async () => {
  try {
    const { data } = await axios.get('http://localhost:4000/auth/auth', {
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
    })
    localStorage.setItem('token', data.token)
    console.log(data)
    return data.user
  } catch (e) {
    console.log(e)
  }
}

export const logout = () => {
  localStorage.removeItem('token')
}
