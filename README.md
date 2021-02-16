<div align="center" id="top"> 
  <img src="./.github/app.gif" alt="Metascrapper Workshop" />

&#xa0;

  <!-- <a href="https://metascrapperworkshop.netlify.app">Demo</a> -->
</div>

<h1 align="center">Metascrapper Workshop</h1>

<p align="center">
  <img alt="Github top language" src="https://img.shields.io/github/languages/top/{{YOUR_GITHUB_USERNAME}}/metascrapper-workshop?color=56BEB8">

  <img alt="Github language count" src="https://img.shields.io/github/languages/count/{{YOUR_GITHUB_USERNAME}}/metascrapper-workshop?color=56BEB8">

  <img alt="Repository size" src="https://img.shields.io/github/repo-size/{{YOUR_GITHUB_USERNAME}}/metascrapper-workshop?color=56BEB8">

  <img alt="License" src="https://img.shields.io/github/license/{{YOUR_GITHUB_USERNAME}}/metascrapper-workshop?color=56BEB8">

  <!-- <img alt="Github issues" src="https://img.shields.io/github/issues/{{YOUR_GITHUB_USERNAME}}/metascrapper-workshop?color=56BEB8" /> -->

  <!-- <img alt="Github forks" src="https://img.shields.io/github/forks/{{YOUR_GITHUB_USERNAME}}/metascrapper-workshop?color=56BEB8" /> -->

  <!-- <img alt="Github stars" src="https://img.shields.io/github/stars/{{YOUR_GITHUB_USERNAME}}/metascrapper-workshop?color=56BEB8" /> -->
</p>

<!-- Status -->

<!-- <h4 align="center">
	🚧  Metascrapper Workshop 🚀 Under construction...  🚧
</h4>

<hr> -->

<p align="center">
  <a href="#dart-about">About</a> &#xa0; | &#xa0; 
  <a href="#sparkles-features">Features</a> &#xa0; | &#xa0;
  <a href="#rocket-technologies">Technologies</a> &#xa0; | &#xa0;
  <a href="#white_check_mark-requirements">Requirements</a> &#xa0; | &#xa0;
  <a href="#checkered_flag-starting">Starting</a> &#xa0; | &#xa0;
  <a href="#memo-license">License</a> &#xa0; | &#xa0;
  <a href="https://github.com/{{YOUR_GITHUB_USERNAME}}" target="_blank">Author</a>
</p>

<br>

## :dart: About

This repo includes a RESTful API to scrape an input URL and parse its OG metadata. If the page has OG parameters set exclusively, then the API will return all the OG parameters. If
they are not set, the API will parse the webpage to get relevant details such as title, description, images etc. The API works similar to the tool provided by Facebook:
https://developers.facebook.com/tools/debug/

## :sparkles: Features

:heavy_check_mark: Implemented RESTful API POST method using serverless framework that returns JSON response;\
:heavy_check_mark: Request validation using Joi;\
:heavy_check_mark: Added Unit Testing with 100% coverage;

## :rocket: Technologies

The following tools were used in this project:

- [Serverless](https://www.serverless.com/)
- [Node.js](https://nodejs.org/en/)
- [Javascript](https://javascript.info/js)

## :white_check_mark: Requirements

Before starting :checkered_flag:, you need to have [Git](https://git-scm.com) and [Node](https://nodejs.org/en/) installed.

## :checkered_flag: Starting

```bash
# Clone this project
$ git clone https://github.com/cbsaikumar/metascrapper-workshop

# Access
$ cd metascrapper-workshop

# Install dependencies
$ npm i

# Run the project
$ sls offline

# The serverless offline will provide an API to test the code in offline mode <POST | http://localhost:3000/dev/api/getMetadataFromUrl >
```

## :memo: License

This project is under license from MIT. For more details, see the [LICENSE](LICENSE.md) file.

Made with :heart: by <a href="https://github.com/cbsaikumar" target="_blank">Bhargava Sai Kumar C</a>

&#xa0;

<a href="https://ph0b09g797.execute-api.us-east-1.amazonaws.com/dev/api/getMetadataFromUrl">Live URL</a>
&#xa0;
<a href="#top">Back to top</a>
