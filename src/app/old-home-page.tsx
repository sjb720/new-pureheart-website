import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
      <video playsInline autoPlay muted loop id="bgvid">
      <source src="bgvid.mp4" type="video/mp4"></source>
    </video>
  )
}
