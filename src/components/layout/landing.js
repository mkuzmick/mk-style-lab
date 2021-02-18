/** @jsx jsx */
import { jsx } from 'theme-ui'

const LandingDiv = (props) => {
    return (
        <div
            sx={{
                height:"100vh",
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
                top: "45%"
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
                height: "15vh"
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

export default ({title, text}) => {
    return (
        <div>
            <LandingDiv>
                {/* <Spacer /> */}
                <LandingTitle title={title} />
            </LandingDiv>
            <FlexContainer>
                <Divider />
                <div
                    sx={{
                        // height: "200vh",
                        textAlign: "left",
                        width: "100%",
                        paddingLeft: "2em"
                    }}
                >
                     <p
                        sx={{
                            textAlign: "left"
                        }}
                     >{text}</p>
                </div>
           
            </FlexContainer>
        </div>
    )
}