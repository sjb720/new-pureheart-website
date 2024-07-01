import Image from 'next/image'
import Link from 'next/link'

export default function Heart() {

    return <div className="heart" style={{width:150,height:150, display:'flex', justifyContent:'center', alignItems:'center'}}>
        <Link href={"/"}>
        <Image style={{
                animation: "heartbeat 3s infinite",
                }} width={40} height={40} src={'/heart.png'} alt={''}></Image>
        </Link>
            
    </div>
}