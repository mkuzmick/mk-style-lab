/** @jsx jsx */
import { jsx, Button } from 'theme-ui'
import { Link } from "gatsby"

const theLinks = [
    {
        to: "/20210207",
        text: "7 February 2021"
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
    {
        to: "/20210214",
        text: "14 February 2021"
    },
    {
        to: "/20210207",
        text: "7 February 2021"
    },
    {
        to: "/20210214",
        text: "14 February 2021"
    },
    {
        to: "/20210207",
        text: "7 February 2021"
    },
    {
        to: "/20210214",
        text: "14 February 2021"
    },
    {
        to: "/20210207",
        text: "7 February 2021"
    },
    {
        to: "/20210214",
        text: "14 February 2021"
    },
    {
        to: "/20210207",
        text: "7 February 2021"
    },
    {
        to: "/20210214",
        text: "14 February 2021"
    },
    {
        to: "/20210207",
        text: "7 February 2021"
    },
    {
        to: "/20210214",
        text: "14 February 2021"
    },
    {
        to: "/20210207",
        text: "7 February 2021"
    },
    {
        to: "/20210214",
        text: "14 February 2021"
    },
    {
        to: "/20210207",
        text: "7 February 2021"
    },
    {
        to: "/20210214",
        text: "14 February 2021"
    },
]

const List = ({ elements }) => {
    return (
        <ul
            sx={{
                listStyleType: "none",
                margin: "0",
                padding: "0",
            }}
        >
            {elements.map(el=>(
                <li
                    sx={{
                        display: "inline"
                    }}
                >
                    <Link 
                        to={el.to}
                        sx={{
                            color: "white",
                            textDecorationThickness: ".5px",
                            fontSize: ".75em",
                            // display: "block",
                            // padding: "5px"
                        }}
                    >
                        <Button mr={2} mb={2} bg="#444">{el.text}</Button>
                    </Link> 
                </li>
            ))}
        </ul>
)}

const PileOfBoxes = ({elements}) => {
    return (
        <div
            sx={{
                listStyleType: "none",
                margin: "0",
                padding: "0",
                marginLeft: "2em"
            }}
        >
            {elements.map(el=>(
                <div>
                    <Link 
                        to={el.to}
                        sx={{
                            color: "white",
                            textDecoration: "none",
                            // fontFamily: "Avenir Next",
                            fontSize: "1em",
                            // display: "block",
                        }}
                    >
                        <div>{el.text}</div>
                    </Link> 
                 </div>   
            ))}
        </div>
)
}

export default () => {
    return (<PileOfBoxes elements={theLinks} />)
}