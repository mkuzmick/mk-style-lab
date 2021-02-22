/** @jsx jsx */
import { jsx } from 'theme-ui'
import '@fontsource/lato/900.css'

export default (props) => { 
    return (
        <span
            sx={{
                fontFamily: "Lato",
                fontSize: "5em"
            }}
        >{props.children}</span>
    )
   
}