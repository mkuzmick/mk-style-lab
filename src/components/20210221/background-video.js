/** @jsx jsx */
import { jsx } from 'theme-ui'
import ReactPlayer from 'react-player'

export default (props) => { 
    return (
        <div
            sx={{
                position: "absolute",
                top: "0%",
                left: "0",
                paddingTop: "56.25",
                width: "100%",
                zIndex: "-1"
            }}
        >
            <ReactPlayer 
                url={props.url}
                width="110%"
                height="110vh"
                volume="0"
                loop="true"
                playing="true"
                sx={{
                    position: "absolute"
                }}
            />
        </div>
    )
}