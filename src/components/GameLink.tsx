import Game from "@/types/Game";
import { CSSProperties, useState } from "react"

type GameLinkProps = {
    game: Game
}

export default function GameLink(props: GameLinkProps) {
    const { game } = props;

    const logoWidth = 300;

    const container: CSSProperties = {
        width: "100%",
        height: 150,
        background: "black",
        borderRadius: 4,
        display: 'flex',
        cursor: 'pointer',
        overflow: 'hidden',
    }

    return <div className="gameLink" style={container}>
        <div style={{ width: logoWidth, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            {game.title}
        </div>
        <div style={{ background: '#121212', width: `calc(100% - ${logoWidth}px)`, position: 'relative' }}>
            <div style={{ background: "#62971C", fontSize: 16, textShadow: "none", position: 'absolute', right: 0, bottom: 0, padding: 8 }}>{game.price}</div>
        </div>
    </div>
}