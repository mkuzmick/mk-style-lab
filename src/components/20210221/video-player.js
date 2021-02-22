/** @jsx jsx */
import { jsx } from 'theme-ui'
import ReactPlayer from 'react-player'

export default (props) => { 
    return (
        <div
            sx={{
                
            }}
        >
            <p>player</p>
            <ReactPlayer 
                url={props.url}
            />
        </div>
    )
}