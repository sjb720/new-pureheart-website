import Game from "@/types/Game";
import Link from "next/link";
import { useRouter } from "next/router";
import { CSSProperties, useState } from "react"

type GameLinkProps = {
    game: Game
}

export default function GameLink(props: GameLinkProps) {

    const { game } = props;

    const logoWidth = 300;

    const getBanner = (gameTitle : string) => {
        if(gameTitle === "Let's See What You Got") {
            return `url('banners/lswyg.png')`;
        } 
        if(gameTitle === "Music Wave") {
            return `url('banners/music-wave.png')`;
        }
        if(gameTitle === "Halfway Down") {
            return `url('banners/halfway down.jpeg')`;
        }
        return `url('banners/lswyg.png')`;
    }

    const container: CSSProperties = {
        width: "100%",
        height: 150,
        background: "black",
        borderRadius: 4,
        display: 'flex',
        cursor: 'pointer',
        overflow: 'hidden',
    }

    const bannerStyle: CSSProperties = { 
        background: getBanner(game.title), 
        backgroundSize: 'cover',
        width: `calc(100% - ${logoWidth}px)`, 
        position: 'relative' 
    }

    return <Link href={game.href}>
        <div className="gameLink" style={container}>
            <div style={{ width: logoWidth, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                {game.title}
            </div>
            <div style={bannerStyle}>
                <div style={{ background: game.price === "FREE" ? "#DAA520" : "#62971C", fontSize: 16, textShadow: "none", position: 'absolute', right: 0, bottom: 0, padding: 8 }}>{game.price}</div>
            </div>
        </div>
    </Link>

}