## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development and watch mode
$ docker-compose build
$ docker-compose up

## production mode
#$ docker-compose up prod
```

## Test

```bash
# unit tests
$ docker-compose run --rm client_dev npm run test

# e2e tests
$ docker-compose run --rm client_dev npm run test:e2e

# test coverage
$ docker-compose run --rm client_dev npm run test:cov
```

## Commit
I have used husky to safe guard.
Use the following command to commit
```bash
npm run cz
```
## Stay in touch

- Author - [Amarendra Kumar](https://www.linkedin.com/in/amarendra-kumar-25117217/)
