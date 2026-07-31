import { useEffect, useState } from 'react'

const format = () =>
  new Intl.DateTimeFormat('en-CA', {
    timeZone: 'America/Vancouver',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false,
  }).format(new Date())

export default function LocalTime() {
  const [time, setTime] = useState(format)

  useEffect(() => {
    const id = setInterval(() => setTime(format()), 1000)
    return () => clearInterval(id)
  }, [])

  return <span className="tabular-nums">{time}</span>
}
