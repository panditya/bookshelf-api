<a href="https://nodejs.org/en/download">
    <img alt="Node Version" src="https://img.shields.io/badge/node-%3E%3D%2014-brightgreen">
</a>
<a href="https://npmjs.com">
    <img alt="NPM Version" src="https://img.shields.io/badge/npm-%3E%3D%206-red">
</a>

# Bookshelf API Submission by Dicoding

The final project which is a graduation requirement to complete the Back-End Basic Course.

### Getting Started

#### Requirement

1. [Node](https://nodejs.org)
2. [npm](https://npmjs.com)

#### Installation

1. Clone this repository `https://github.com/panditya/bookshelf-api.git`
2. Change directory and copy `.env` from `.env.example` then adjust the configuration
3. Install the required dependencies `npm i` or `yarn install`
3. Run the application
    - Development mode `npm run dev` or `yarn dev`
    - Production mode `npm run start` or `yarn start`

Or if you prefer using Docker

#### Requirement (Docker)

1. [Docker](https://www.docker.com)

#### Installation (Docker)

1. Clone this repository `https://github.com/panditya/bookshelf-api.git`
2. Change directory and copy `.env` from `.env.example` then adjust the configuration
3. Build the application image `docker build -t panditya/bookshelf-api .`
4. Check the image once complete `docker images`
5. Build and run the image `docker run --name bookshelf-api -p 80:5000 -d panditya/bookshelf-api`
6. Inspect the container to make sure is up and running `docker ps`
