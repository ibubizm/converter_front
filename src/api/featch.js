import axios from 'axios'

export const getCurrentRate = async () => {
  try {
    const { data } = await axios.get('http://localhost:4000/api/getCurrentRate')
    return data
  } catch (e) {
    console.log(e)
  }
}

export const convert = async ({ firstValue, secondValue, amount }) => {
  try {
    const { data } = await axios.get('http://localhost:4000/api/convert', {
      params: {
        firstValue,
        secondValue,
        amount,
      },
    })
    console.log(data)
    return data
  } catch (e) {
    console.log(e)
  }
}
