import Badge from "./Badge";

type AboutConfig = {
    githubURL?: string,
    linkedinURL?: string,
    email?: string,
    about: string,
    badges?: Array<Badge>
}

export default AboutConfig;