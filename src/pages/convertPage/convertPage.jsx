import { useEffect } from 'react'
import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup'
import { useState } from 'react'
import { convert } from '../../api/featch'
import './convertPage.scss'

export const ConvertPage = () => {
  const [result, setResult] = useState(0)
  const [value, setValue] = useState({
    firstValue: 'usd',
    secondValue: 'eur',
    amount: 1,
  })

  useEffect(() => {
    convert(value).then((data) => {
      setResult(data)
    })
  }, [value])
  return (
    <form>
      <Form.Select
        onChange={(e) => setValue({ ...value, firstValue: e.target.value })}
        name="select"
      >
        <option value="usd">usd</option>
        <option value="eur">eur</option>
        <option value="rub">rub</option>
        <option value="jpy">jpy</option>
      </Form.Select>
      <br />
      <Form.Select
        defaultValue={'eur'}
        onChange={(e) => setValue({ ...value, secondValue: e.target.value })}
        name="select2"
      >
        <option value="usd">usd</option>
        <option value="eur">eur</option>
        <option value="rub">rub</option>
        <option value="jpy">jpy</option>
      </Form.Select>
      <br />
      <InputGroup className="mb-3">
        <Form.Control
          placeholder="Введите сумму"
          type="number"
          value={value.amount}
          onChange={(e) => setValue({ ...value, amount: e.target.value })}
        />
      </InputGroup>
      <h2>{`${value.firstValue.toUpperCase()} ${
        value.amount
      } =  ${value.secondValue.toUpperCase()} ${result}`}</h2>
    </form>
  )
}
// ¥€$₽
