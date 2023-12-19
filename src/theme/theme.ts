import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  semanticTokens: {
    colors: {
      text: {
        default: 'gray.600',
        _dark: 'gray.200',
      },
      bg: {
        default: 'gray.50',
        _dark: 'gray.900',
      },
      'cma.red': {
        default: '#E84142',
        _dark: 'white',
      },
    }
  }
})
export default theme;