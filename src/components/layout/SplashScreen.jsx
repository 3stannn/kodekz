import { useEffect, useState } from 'react'

const DISPLAY_TIME = 1400
const EXIT_TIME = 500

function SplashScreen() {
  const [isLeaving, setIsLeaving] = useState(false)
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    document.body.classList.add('splash-active')

    const exitTimer = window.setTimeout(() => setIsLeaving(true), DISPLAY_TIME)
    const removeTimer = window.setTimeout(() => setIsVisible(false), DISPLAY_TIME + EXIT_TIME)

    return () => {
      window.clearTimeout(exitTimer)
      window.clearTimeout(removeTimer)
      document.body.classList.remove('splash-active')
    }
  }, [])

  useEffect(() => {
    if (!isVisible) {
      document.body.classList.remove('splash-active')
    }
  }, [isVisible])

  if (!isVisible) return null

  return (
    <div
      className={`splash-screen${isLeaving ? ' splash-screen--leaving' : ''}`}
      role="status"
      aria-label="Loading Kodekz portfolio"
    >
      <img
        className="splash-screen__hello"
        src="/hello-en.svg"
        alt=""
        aria-hidden="true"
      />
    </div>
  )
}

export default SplashScreen
