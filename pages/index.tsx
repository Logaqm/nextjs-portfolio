import type { NextPage, NextPageContext } from 'next'
import AboutConfig from '../types/AboutConfig'
import About from './about'
import fs from "fs"

export async function getStaticProps(context: NextPageContext) {
  // sets props to the config file data
  let config: AboutConfig = JSON.parse(fs.readFileSync(`./aboutConfig.json`, "utf-8"))
  
  return {
      props: {
          config
      },
  }
}

const Home: NextPage = (props: any) => {
  return (
    <div>
      <main >
        <About {...props} />
      </main>
    </div>
  )
}

export default Home
