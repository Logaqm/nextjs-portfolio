import { Stack, Image, Heading, Flex, Link } from "@chakra-ui/react"
import fs from "fs"
import path from "path"
import ReactMarkdown from "react-markdown"
import ProjectData from "../../types/ProjectData"
import ChakraUIRenderer from 'chakra-ui-markdown-renderer';
import remarkToc from "remark-toc"
import remarkGfm from "remark-gfm"
import rehypeSlug from 'rehype-slug'
import rehypeRaw from "rehype-raw"
import GithubLink from "../../components/githubLink"
import ExternalLink from "../../components/externalLink"

export async function getStaticPaths() {
  // tells next to generate a page for every .json file that exists under /projectdata of which also contains markdown data
  const projectsDirectory = path.join(process.cwd(), 'projectdata')
  let projectFiles = fs.readdirSync(projectsDirectory, "utf-8")
  projectFiles = projectFiles.filter((fileName) => {
    if (fileName.slice(-5) == ".json") {
      const data: ProjectData = JSON.parse(fs.readFileSync(path.join(projectsDirectory, fileName), "utf-8"))
      return data.markdown != undefined || null
    } else return false
  })
  const paths = projectFiles.map((filename) => {
    return {
      params: { pid: `${filename.slice(0, -5)}` }
    }
  })
  return {
    paths,
    fallback: true
  };
}

export async function getStaticProps({ params }: any) {
  // sets the project data .json file and corrosponding markdown data as props 
  let projectID = params.pid
  const fileData = await fs.promises.readFile(`${process.cwd()}/projectdata/${projectID}.json`, "utf-8")
  const data = JSON.parse(fileData)
  const markdown = await fs.promises.readFile(`${process.cwd()}/projectdata/${data.markdown}.md`, "utf-8")
  return {
    props: {
      data,
      markdown
    }
  }
}

const ProjectPage = (props: any) => {

  const data: ProjectData = props.data
  if(!data) return null

  const OverridedTheme = {
    h1: LinkedHeader,
    h2: LinkedHeader,
    h3: LinkedHeader,
    h4: LinkedHeader,
    // overrided to add color to links
    a: ({href, children}: any) => {
      return <Link href={href} color='blue.500'>{children[0]}</Link>
    }
  }

  return (
    <Stack>
      <Image p={5} src={data.imageURL ? data.imageURL : ""} alt="Project Thumbnail"/>
      <Flex direction="row" px="5" >
        <Heading size="2xl" w="100%" textAlign="left" >{data.title}</Heading>
        {data.githubLink == undefined ? null : <GithubLink url={data.githubLink} />}
        {data.deployedLink == undefined ? null : <ExternalLink url={data.deployedLink} />}
      </Flex>
      <Flex direction="column" p={5}>
        <ReactMarkdown  components={ChakraUIRenderer(OverridedTheme)} remarkPlugins={[remarkToc, remarkGfm]} rehypePlugins={[rehypeSlug, rehypeRaw]} >
          {props.markdown}
        </ReactMarkdown>
      </Flex>
    </Stack>
  )
}

const sizes = ["4xl", "3xl", "2xl", "xl", "lg", "md", "sm", "xs"]
// header which sets its id property to allow for auto scrolling when clicking on table of contents items
// also sets size dependant on its depth/level 
const LinkedHeader = (props: any) => <Heading id={props.id} size={sizes[props.level + 2]} py={2}>{props.children[0]}</Heading>


export default ProjectPage