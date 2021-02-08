/** @jsx jsx */
import { jsx, ThemeProvider } from 'theme-ui'
import theme from '../../themes/20210207-theme'

export default (props) => {
    return (
        <ThemeProvider theme={theme}>
            {props.children}
        </ThemeProvider>
    )
}