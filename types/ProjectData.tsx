type ProjectData = {
    tags: string[],
    projectID: string, //used in page route
    markdown?: string,
    description: string,
    title: string,
    imageURL: string,
    githubLink?: string,
    deployedLink?: string
}

export default ProjectData;