/** @jsx jsx */
import { jsx, Box, Embed, ThemeProvider, Styled } from 'theme-ui'

const theme = {
    colors: {
        background: "#222",
        text: "#ddd",
        modes: {
            dark: {
              text: '#fff',
              background: '#000',
              primary: '#0cf',
            }
          }
    },
    styles: {
        root: {
        },
        h1: {
            color: "red"
        }
      }
}

export default () => {
    return (
        <ThemeProvider theme={theme}>
            <div>
                the page
                <Styled.h1>test</Styled.h1>
            </div>
        </ThemeProvider>   
    )
}