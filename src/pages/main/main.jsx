import { Course } from '../course/course'
import Tab from 'react-bootstrap/Tab'
import Tabs from 'react-bootstrap/Tabs'
import { useEffect, useState } from 'react'
import { ConvertPage } from '../convertPage/convertPage'
import { History } from '../history/history'
import { getCurrentRate } from '../../api/featch'

export const Main = () => {
  const [currentCourese, setCurrentCourse] = useState({})
  const [activeLink, setActivelink] = useState('course')

  useEffect(() => {
    getCurrentRate().then((data) => {
      setCurrentCourse(data[0])
    })
  }, [])
  return (
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
      <Tab className="p-3" eventKey="history" title="История">
        <History />
      </Tab>
      <div>ass</div>
    </Tabs>
  )
}
