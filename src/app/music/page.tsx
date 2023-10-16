import { Slide } from "@mui/material";

export default function MusicPage() {

    return <div style={{ margin: 24 }}>
        <Slide direction='left' in={true} timeout={500}>
            <div>
                <iframe width="100%" height={450} scrolling="no" frameBorder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/921945592&color=%23aabfff&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true" />
                <div style={{ fontSize: '10px', color: '#cccccc', lineBreak: 'anywhere', wordBreak: 'normal', overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis', fontFamily: 'Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif', fontWeight: 100 }}></div>
            </div>
        </Slide>
    </div>
}