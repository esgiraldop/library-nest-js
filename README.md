## Project setup

```bash
$ yarn install
```

## Compile and run the project

```bash
# development
$ yarn run start

# watch mode
$ yarn run start:dev

# production mode
$ yarn run start:prod
```

## Run tests

```bash
# unit tests
$ yarn run test

# e2e tests
$ yarn run test:e2e

# test coverage
$ yarn run test:cov
```

## Resources

Check out a few resources that may come in handy when working with NestJS:

- Visit the [NestJS Documentation](https://docs.nestjs.com) to learn more about the framework.
- For questions and support, please visit our [Discord channel](https://discord.gg/G7Qnnhy).
- To dive deeper and get more hands-on experience, check out our official video [courses](https://courses.nestjs.com/).
- Visualize your application graph and interact with the NestJS application in real-time using [NestJS Devtools](https://devtools.nestjs.com).
- Need help with your project (part-time to full-time)? Check out our official [enterprise support](https://enterprise.nestjs.com).
- To stay in the loop and get updates, follow us on [X](https://x.com/nestframework) and [LinkedIn](https://linkedin.com/company/nestjs).
- Looking for a job, or have a job to offer? Check out our official [Jobs board](https://jobs.nestjs.com).

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://twitter.com/kammysliwiec)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](https://github.com/nestjs/nest/blob/master/LICENSE).

# Commits Guide

This project follows the **Conventional Commits** standard for maintaining a clear and structured commit history. The following describes the rules and how to commit correctly.

## Commit Message Structure

A commit message must follow the following structure:

<type>[optional scope]: <description>.

[optional body]

[optional footer]

### Example

```bash
feat(auth): add login functionality

Added login feature to the authentication module.
```

```bash
BREAKING CHANGE: removed old login API endpoints
```

## Commit types

The allowed commit types are as follows:

- **build**: Changes that affect the build system or external dependencies (e.g. webpack, npm).
- **chore**: Changes in the development process that do not affect the production code (e.g. tool configuration).
- **CI**: Changes to CI configuration files and scripts (e.g. GitHub Actions, CircleCI).
- **docs**: Changes to documentation (e.g. README, wiki).
- **feat**: New end-user feature.
- **fix**: Bug fixes.
- **perf**: Changes that improve performance.
- **refactor**: Changes to code that do not fix bugs or add features (e.g. renaming variables).
- **style**: Changes that do not affect the meaning of the code, only the way it is written (e.g. formatting).
- **test**: Adding tests or correcting existing tests.
- **reverting**: Reverting a previous commit.

## Commit rules

- **non-empty type**: The type of the commit must not be empty.
- **Non-empty subject**: The subject of the commit must not be empty.
- **Header length**: The commit header must have a maximum length of 72 characters.
- **Valid type**: The type of the commit must be in the list of allowed types.
- **Body formatting**: The body of the commit, if included, must start with a blank line after the description and may contain multiple paragraphs.

## Commit messages

Here are some examples of how to structure your commit messages:
t

- **add a new feature**:
  feat(auth): add login functionalityty

- **Fix a bug**:
  fix(parser): handle empty input

- **Change API**:
  feat(api)!: remove deprecated endpoints

- **Update documentation**:
  docs: update README with installation instructions

- **Revert a change**:
  revert: let us never again speak of the noodle incident

Reverts commit 676104e.

## Commit Hook Configuration

To ensure that commit messages comply with these rules, we use the `commit-msg` hook provided by Husky. Make sure the configuration file is present and correctly configured in `.husky/commit-msg`.

### Commitlint Configuration File

The configuration file for `commitlint` in the project is located in `.commitlintrc.js` and contains the following rules:

```js
module.exports = {
  extends: [‘@commitlint/config-conventional’],
  rules: {
    header-max-length': [2, “always”, 72],
    ‘type-empty’: [2, ‘never’],
    ‘type-enum’: [
      2,
      ‘always’,
      [
        ‘build’,
        ‘chore’,
        ‘ci’,
        ‘docs’,
        ‘feat’,
        ‘fix’,
        ‘perf’,
        ‘refactor’,
        ‘style’,
        ‘test’,
        ‘revert’,
      ],
    ],
    ‘subject-empty’: [2, ‘never’],
    ‘subject-case’: [0],
  },
};
```

## How to Install and Configure Husky

To install and configure Husky in your project, follow these steps:

#### Install Husky:

```bash
npm install husky --save-dev
```

#### Enable Git hooks:

```bash
npx husky install
```

#### Add commit-msg hook:

```bash
npx husky add .husky/commit-msg ‘npx --no-install commitlint --edit $1’
```

## Why Use Conventional Commits

- Automatic generation of CHANGELOGs:\*\* Makes it easy to create changelogs.
- Automatic determination of version incrementation:\*\* Based on the types of commits made.
- Clear communication of changes:\*\* Facilitates understanding of changes for team members and other stakeholders.
- Enabling build and release processes:\*\* Enables automation of continuous integration and delivery.
- Facilitates contributions:\*\* Makes commit history more accessible to new contributors.
