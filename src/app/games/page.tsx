import GameLink from "@/components/GameLink"
import Game from "@/types/Game"
import { Slide } from "@mui/material"
import { CSSProperties } from "react"


const games : Game[] = [
    {
        title: `Let's See What You Got`,
        href: `https://store.steampowered.com/app/1126070/Lets_See_What_You_Got`,
        price: '$4.99',
    },
    {
        title: `Music Wave`,
        href: `https://store.steampowered.com/app/740270/MusicWave/`,
        price: 'FREE',
    },
    {
        title: `Halfway Down`,
        href: `https://yoman47.itch.io/halfway-down`,
        price: 'FREE',
    },
]

export default function GamesPage() {

    const gamesContainer: CSSProperties = {
        margin: 24,
        display: 'flex',
        flexFlow: 'column',
        gap: 24,
    }
    return <div style={gamesContainer}>
        {games.map((game, i) =>
            <Slide key={game.href} direction='left' in={true} timeout={(200 * i) + 500}>
                <GameLink game={game} />
            </Slide>
        )}

    </div>
}