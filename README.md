# Next.js Portfolio Generator &middot; 

A Next.js and React project to build a static portfolio website from a set of JSON files. 

An example can be found on [my portfolio](laqm.dev).
## Getting started

After forking and cloning the repo, run

```shell
npm install
```
To install dependencies, and
```shell 
npm run dev
```

To get up and running with the mock data. 

## Configuration

### Adding Project

To configure additional projects, add a new file, ```MyProjectData.json``` to the ```/projectData``` directory.

The following values are present:

```
{
    "tags": ["Example tag 1", "Example tag 2"],
    "projectID": "myProject",
    "markdown": "myMarkdownFileName",
    "description": "Example Description",
    "title": "Example Title",
    "imageURL": "https://example.com/a.png",
    "githubLink": "https://github.com/profile/example",
    "deployedLink": "https://example.com"
}

```

To include more information on the project and generate an additional page, a markdown file should be made in the same directory and referenced in the project data (Note: the .md extension should not be included). This will add a "Read more" button to the project listing which links to the generated page. 

Note that the ```projectID``` field should match the name of the projectData file.

The exclusion of either ```deployedLink``` or ```githubLink``` will simply result in the relevant buttons not being rendered.  


### Configuring Entry Page

In ```/aboutConfig.json```, the following values are present.
```
{
    "githubURL": "https://github.com/example",
    "linkedinURL": "https://linkedin.com/in/example",
    "email": "example@example.com",
    "about" : "Example description",
    "badges: [...]
}
```
Note that only the ```about``` field is required. 

Additionally, certifications can be added as small badges beneath the description that will open the relevent verfication link when clicked. 

To do so, simply add an object resembling the following to the ```badges``` array field:

```
{
    "url": "https://www.credly.com/badges/example",
    "image": "./badgeExample.png"
}
```
By default, badge images are fit to 120px x 120px

## Deployment

Deployment should be like any other Next.js project. For simplicities sake, I recommend Vercel or AWS Amplify Hosting.