import { Slide } from "@mui/material";

export default function AboutUs() {

    return <div style={{ margin: 24 }}>
        <Slide direction='left' in={true} timeout={500}>
            <div style={{ background: 'black', display: 'flex' }}>
                {/* <Image width={256} height={256} src={'/guitar.jpg'} alt={""} /> */}
                <div style={{
                    height: 256,
                    width: 256,
                    background: `url('guitar.jpg')`,
                    backgroundSize:'cover'
                }}/>
                <div style={{ padding: 24, width: "calc(100% - 256px)", display: 'flex', flexFlow: 'column', gap: 16 }}>
                    <p>{`Well, for now it's just me, Stephen.`}</p>
                    <p>{`I've been playing games my whole life and find inspiration in a lot of older game design. I started making games when I was 12 and it's still one of my favorite hobbies!`}</p>
                    <p>{`If you want to collaborate or talk about game design, shoot me an email.`}</p>
                    <p style={{ color: "#aabfff", fontWeight: "bold" }}>{`pureheartstdio@gmail.com`}</p>
                </div>
            </div>
        </Slide>
    </div>
}