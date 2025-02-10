'use client'
import Container from '@/components/container'
import { useState,useEffect } from 'react'


export default function Countdown(props) {
  let [leftdays, setLeftDays] = useState(null)
  let [lefthr, setLefthr] = useState(null)
  let [leftmin, setLeftMins] = useState(null)
  let [leftsec, setLeftSec] = useState(null)

  useEffect(() => {
    let interval = setInterval(() => {
      const newyr = new Date('May 17, 2024 00:00:00')
      const newyeartime = newyr.getTime()
      const todaytm = new Date()
      const todaytime = todaytm.getTime()
      const timeleft = newyeartime - todaytime
      setLeftDays(Math.floor(timeleft / (24 * 60 * 60 * 1000)))
      setLefthr(23 - todaytm.getHours())
      setLeftMins(59 - todaytm.getMinutes())
      setLeftSec(59 - todaytm.getSeconds())
    }, 1000)
    return () => {
      clearInterval(interval)
    }
  })

  return (
    <Container>
      <div className='text-brand-primary flex flex-col lg:flex-row mx-auto gap-10 justify-center lg:mt-32'>
        <div className='flex flex-col justify-center text-center'>
          <h1 className="text-6xl font-bold">{leftdays}</h1>
          <h2 className={"text-2xl font-light pt-6"}>Days</h2>
        </div>
        <div className='flex flex-col justify-center align-baseline text-center'>
          <h1  className="text-6xl font-bold" >{lefthr}</h1 >
          <h2 className={"text-2xl font-light pt-6"}>Hours</h2>
        </div>
        <div className='flex flex-col justify-center align-baseline text-center'>
          <h1  className="text-6xl font-bold">{leftmin}</h1 >
          <h2 className={"text-2xl font-light pt-6"}>Minutes</h2>
        </div>
        <div className='flex flex-col justify-center align-baseline text-center'>
          <h1 className="text-6xl font-bold">{leftsec}</h1 >
          <h2 className={"text-2xl font-light pt-6"}>Seconds</h2>
        </div>
      </div>
    </Container>
  )
}