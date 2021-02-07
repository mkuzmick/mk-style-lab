/** @jsx jsx */
import { jsx, Box } from 'theme-ui'



const Card = (props) => {
    return (
        <div
            sx={{
                width: "300px",
                height: "500px",
                bg: "#999",
                borderRadius: "10px",
                margin: "10px"
            }}
        >
            <Box
                p={4}
                color="white"
                bg="rgba(30, 50, 120, 0.7)"
                // overflow="hidden"
            >
                this is a box
            </Box>
            
            {props.children}
        </div>
    )
}

export default Card