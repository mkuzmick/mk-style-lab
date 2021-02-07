/** @jsx jsx */
import { jsx, Box, Embed } from 'theme-ui'

import Card from "./card"
import Layout from "./layout"

const LandingDiv = (props) => {
    return (
        <div
            sx={{
                height:"115vh",
                padding: "4em",
                paddingBottom: "0"
            }}
        >
            {props.children}
        </div>
    )
}

const LandingTitle = (props) => {
    return (
        <div
            sx={{
                position: "sticky",
                top: "55%"
            }}
        >
            <h1
                    sx={{
                        variant: 'text.jumbo',
                        textAlign: "right",
                    }}
                >{props.title}</h1>
        </div>
    )
}

const Spacer = (props) => {
    return (
        <div
            sx={{
                height: "35vh"
            }}
        >
        </div>
    )
}

const FlexBox = (props) => {
    return (
        <div
            sx={{
                width: "100px",
                margin: "20px",
                bg: "#444"
            }}
        >
            {props.children}
        </div>
    )
}

const Divider = (props) => {
    return (
        <div
            sx={{
                width: "100%",
                height: "3px",
                borderRadius: "3px",
                backgroundColor: "#ccc"
            }}
        ></div>
    )
}

const FlexContainer = ({children}) => {
    return (
        <div
            sx={{
                display: "flex",
                flexDirection: "row",
                flexWrap: "wrap",
                width: "100%",
                margin: "auto",
                justifyContent: "center",
                marginTop: "-65px"
            }}
        >
            {children}
        </div>
    )
}

export default () => {
    return (
        <Layout>
            <LandingDiv>
                <Spacer />
                <LandingTitle title="styleLab" />
            </LandingDiv>
            <FlexContainer>
                <Divider />
                <div
                    sx={{
                        height: "200vh",
                        textAlign: "left",
                        width: "100%",
                        paddingLeft: "2em"
                    }}
                >
                     <p
                        sx={{
                            textAlign: "left"
                        }}
                     >other stuff will go down here.</p>
                </div>
                <Embed src="https://www.youtube.com/embed/0RONImrGtZE" />

            </FlexContainer>
        </Layout>
    )
}