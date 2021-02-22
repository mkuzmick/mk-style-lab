/** @jsx jsx */
import { jsx } from 'theme-ui'
import BigText from '../../components/20210221/big-text'
import VideoPlayer from '../../components/20210221/video-player'
import BackgroundVideo from '../../components/20210221/background-video'

const Post = (props) => {
    return (
        <div
            sx={{
                borderRadius:"10px",
                backgroundColor: "rgba(0,0,0,0.5)",
                width: "300px",
                position: "fixed",
                top: "10vh",
                right: "10%",
                padding: "20px",
                overflow: "scroll",
                height: "80vh"
            }}
        >
            <p>
                Working on react-player today. Getting some simple YouTube background components going.
            </p>
            <p>
                If we try to integrate some of the web stuff in person next year, mechanics like this react youtube-sync machine could be useful.
            </p>
            <p>
                But I actually got there while looking for info on how perfectly you could sync playback of 2 videos on a single client for mashup and beat-matching purposes. Kindof like what's under the hood of this YouTube DJ web app.
            </p>
        </div>
    )
}

export default () => {
    return (
        <div>
            <BigText>videoPlayer</BigText>
            <div 
                sx={{
                    margin: "auto",
                    alignContent: "center",
                    width: "90%"
                }}
            >
                 <VideoPlayer
                 
                  url="https://www.youtube.com/watch?v=Dkk9gvTmCXY"/>
            </div>
            <Post></Post>
            <BackgroundVideo url="https://www.youtube.com/watch?v=Dkk9gvTmCXY"/>
        </div>
    )
}