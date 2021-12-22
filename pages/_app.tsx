import "../styles/globals.css";
import { ChakraProvider, extendTheme, ThemeConfig } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import Navbar from "../components/Header/Header";
// import Footer from '../components/Footer/Footer'

function MyApp({ Component, pageProps }: AppProps) {
  const config: ThemeConfig = {
    initialColorMode: "light",
    useSystemColorMode: false,
  };

  const theme = extendTheme({ config });

  return (
    <ChakraProvider theme={theme}>
      <Navbar />
      <Component {...pageProps} />
      {/* <Footer /> */}
    </ChakraProvider>
  );
}

export default MyApp;
