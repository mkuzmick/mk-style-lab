/** @jsx jsx */
import { jsx, Grid, Box } from 'theme-ui'
import { Link } from 'gatsby'
// import TransitionLink from "gatsby-plugin-transition-link"
import AniLink from "gatsby-plugin-transition-link/AniLink"


const theBoxes = Array(30).fill(<Box><br /></Box>)
const linkLocations = [7, 11, 19, 23, 27, 29]

const theLinks = [
    {
        to: "/",
        text: "main"
    },
    {
        to: "/20210214",
        text: "14 February 2021"
    },
    {
        to: "/20210214/grid",
        text: "testing grid on 14 February 2021"
    },
    {
        to: "/20210214",
        text: "14 February 2021"
    },
    {
        to: "/20210207",
        text: "7 February 2021"
    },
]

for (let i = 0; i < theLinks.length; i++) {
    if (i < (linkLocations.length)) {
        theBoxes[linkLocations[i]]=<AniLink fade to={theLinks[i].to} >
        {theLinks[i].text}
    </AniLink>
    // <Link
    //     to={theLinks[i].to}
    //     sx={{
    //         textDecoration: "none",
    //         color: "#ddd"
    //     }}
    //     activeStyle={{fontWeight:"700"}}
    // >
    //     {theLinks[i].text}
    // </Link>
    }
    
    
}

export default () => {
    return (
        <div sx={{padding: "3em"}}>
            <Grid
                gap={2}
                columns={[1, 1, 5]}
            >
                {theBoxes}
            </Grid>
        </div>
    )
}