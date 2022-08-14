import 'bootstrap/dist/css/bootstrap.min.css'
import { useEffect } from 'react'
import { useState } from 'react'
import { getCurrentRate } from './api/featch'
import { ConvertPage } from './pages/convertPage/convertPage'
import Tab from 'react-bootstrap/Tab'
import Tabs from 'react-bootstrap/Tabs'
import { Course } from './pages/course/course'

function App() {
  const [currentCourese, setCurrentCourse] = useState({})
  const [activeLink, setActivelink] = useState('course')

  useEffect(() => {
    getCurrentRate().then((data) => {
      setCurrentCourse(data[0])
    })
  }, [])

  return (
    <div className="App">
      <Tabs
        id="controlled-tab-example"
        activeKey={activeLink}
        onSelect={(k) => setActivelink(k)}
        className="mb-3"
      >
        <Tab className="p-3" eventKey="course" title="Курсы валют">
          <Course currentCourese={currentCourese} />
        </Tab>
        <Tab className="p-3" eventKey="convert" title="Конвертер">
          <ConvertPage />
        </Tab>
      </Tabs>
    </div>
  )
}

export default App
