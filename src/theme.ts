import { extendTheme, ThemeConfig } from "@chakra-ui/react";

const customTheme = extendTheme({
  config: {
    initialColorMode: "dark", // Set the initial color mode to dark
    useSystemColorMode: false, // Disable system color mode to always start with the specified color mode
  },
});

export default customTheme