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

# Guía de Commits

Este proyecto sigue el estándar **Conventional Commits** para mantener un historial de commits claro y estructurado. A continuación, se describen las reglas y cómo hacer commits correctamente.

## Estructura del Mensaje de Commit

Un mensaje de commit debe seguir la siguiente estructura:

<tipo>[alcance opcional]: <descripción>

[cuerpo opcional]

[pie opcional]

### Ejemplo

```bash
feat(auth): add login functionality

Added login feature to the authentication module.
```

```bash
BREAKING CHANGE: removed old login API endpoints
```

## Tipos de Commit

Los tipos permitidos para el commit son los siguientes:

- **build**: Cambios que afectan el sistema de construcción o dependencias externas (ej. webpack, npm).
- **chore**: Cambios en el proceso de desarrollo que no afectan el código de producción (ej. configuración de herramientas).
- **ci**: Cambios en los archivos de configuración y scripts de CI (ej. GitHub Actions, CircleCI).
- **docs**: Cambios en la documentación (ej. README, wiki).
- **feat**: Nueva característica para el usuario final.
- **fix**: Corrección de un error.
- **perf**: Cambios que mejoran el rendimiento.
- **refactor**: Cambios en el código que no corrigen errores ni agregan características (ej. renombrar variables).
- **style**: Cambios que no afectan el significado del código, solo la forma en que está escrito (ej. formateo).
- **test**: Agregar pruebas o corregir pruebas existentes.
- **revert**: Revertir un commit anterior.

## Reglas de Commit

- **Tipo no vacío**: El tipo del commit no debe estar vacío.
- **Asunto no vacío**: El asunto del commit no debe estar vacío.
- **Longitud del encabezado**: El encabezado del commit debe tener una longitud máxima de 72 caracteres.
- **Tipo válido**: El tipo del commit debe estar en la lista de tipos permitidos.
- **Formato del cuerpo**: El cuerpo del commit, si se incluye, debe comenzar con una línea en blanco después de la descripción y puede contener múltiples párrafos.

## Mensajes de Commit

Aquí hay algunos ejemplos de cómo estructurar tus mensajes de commit:
t

- **Agregar una nueva característica**:
  feat(auth): add login functionalityty

- **Corregir un error**:
  fix(parser): handle empty input

- **Cambiar la API**:
  feat(api)!: remove deprecated endpoints

- **Actualizar la documentación**:
  docs: update README with installation instructions

- **Revertir un cambio**:
  revert: let us never again speak of the noodle incident

Reverts commit 676104e.

## Configuración del Hook de Commit

Para garantizar que los mensajes de commit cumplan con estas reglas, utilizamos el hook de `commit-msg` proporcionado por Husky. Asegúrate de que el archivo de configuración esté presente y correctamente configurado en `.husky/commit-msg`.

### Archivo de Configuración de Commitlint

El archivo de configuración para `commitlint` en el proyecto está ubicado en `.commitlintrc.js` y contiene las siguientes reglas:

```js
module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'header-max-length': [2, 'always', 72],
    'type-empty': [2, 'never'],
    'type-enum': [
      2,
      'always',
      [
        'build',
        'chore',
        'ci',
        'docs',
        'feat',
        'fix',
        'perf',
        'refactor',
        'style',
        'test',
        'revert',
      ],
    ],
    'subject-empty': [2, 'never'],
    'subject-case': [0],
  },
};
```

## Cómo Instalar y Configurar Husky

Para instalar y configurar Husky en tu proyecto, sigue estos pasos:

#### Instalar Husky:

```bash
npm install husky --save-dev
```

#### Habilitar hooks de Git:

```bash
npx husky install
```

#### Agregar el hook commit-msg:

```bash
npx husky add .husky/commit-msg 'npx --no-install commitlint --edit $1'
```

## Por Qué Usar Conventional Commits

- **Generación automática de CHANGELOGs:** Facilita la creación de registros de cambios.
- **Determinación automática del aumento de versión:** Basado en los tipos de commits realizados.
- **Comunicación clara de los cambios:** Facilita la comprensión de los cambios para los miembros del equipo y otros interesados.
- **Activación de procesos de construcción y publicación:** Permite automatizar la integración y entrega continua.
- **Facilita las contribuciones:** Hace que el historial de commits sea más accesible para nuevos colaboradores.
