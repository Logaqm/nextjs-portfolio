// import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ChakraProvider, ColorModeScript, Container } from '@chakra-ui/react'
import Navbar from '../components/navbar'
import Head from 'next/head'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider >
     <Head>
      <title>Portfolio</title>
      <meta name="description" content="Software Developer Portfolio" />
      <link rel="icon" href="/favicon.ico" />
     </Head>
      <Container maxW={"4xl"}>
        <ColorModeScript initialColorMode={"dark"} />
        <Navbar />
        <Component {...pageProps} />
      </Container>
    </ChakraProvider>
  )
}

export default MyApp
