import { Slide } from "@mui/material";

export default function ContactPage() {
    return <div style={{ margin: 24 }}>
        <Slide direction='left' in={true} timeout={500}>
            <div style={{ padding: 48, background: 'black', textAlign: 'center' }}>
                For collaborations, questions, or support please email:
                <div style={{ color: '#aabfff', fontWeight: 'bold', paddingTop: 24 }}>pureheartstdio@gmail.com</div>
            </div>
        </Slide>
    </div>
}