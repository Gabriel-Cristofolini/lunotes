# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)


## Backend

You can use `docker` or `podman` here, feel free to choose the one you prefer, the commands are the same.

#### Start the database:
`podman run --rm --name=my-mysql --env MYSQL_ROOT_PASSWORD=password --detach --publish 3306:3306 mysql`

#### Access the database
`podman exec -it 03ead173b86c mysql -u root -p`

### Create database
`CREATE DATABASE database_development;`

#### Generate migration models
criar migracao: `sequelize model:generate --name Usuario --attributes email:string,senha:string`

#### Run the generated migration
rodar migracao: `sequelize db:migrate`

#### Start the server
`npm run server`


## Endpoints

### Criar Usuario

POST: `api/usuarios`

Body:
```
{
  "email": "teste@teste.com",
  "senha": "banana"
}
```

### Validar Usuario

GET: `api/usuarios?email=teste@teste.com&senha=banana`

Result: 201 (OK) ou 401 (Unauthorized)

---

### Criar Materia

POST: `api/materias`

Body:
```
{
  "nome": "Etica",
  "descricao": "Uma descricao"
}
```

### Buscar Todas as Materias

GET: `api/materias`

### Buscar Materia

GET: `api/materias/:id`

---

### Criar Turma

POST: `api/turmas`

Body:
```
{
  "nome": "Etica",
  "descricao": "Uma descricao",
  "semestre": 2,
  "ano": 2023,
  "materiaId": 1,
  "alunos": [
    { "nome": "Murilo", "matricula": "123321" },
    { "nome": "Gabs", "matricula": "333222" }
  ]
}
```

### Buscar Todas as Turmas de uma Materia

GET: `api/turmas?materiaId=1`

### Buscar Turma

GET: `api/turmas/:id`

---

### Criar Aula

POST: `api/aulas`

Body:
```
{
  "nome": "Etica",
  "descricao": "Uma descricao",
  "semestre": 2,
  "ano": 2023,
  "materiaId": 1,
  "alunos": [
    { "nome": "Murilo", "matricula": "123321" },
    { "nome": "Gabs", "matricula": "333222" }
  ]
}
```

### Buscar Todas as Aulas de uma Turma

GET: `api/aulas?turmaId=1`

### Buscar Turma

GET: `api/aulas/:id`

### Criar Anotacao de uma Aula

POST: `api/aulas/:id/anotacao`

### Criar Conteudo de uma Aula

POST: `api/aulas/:id/conteudo`

---

### Buscar Todos os Alunos de uma Turma

GET: `api/alunos?turmaId=1`

### Buscar Aluno

GET: `api/alunos/:id`

---

### Criar Avaliacao


POST: `api/avaliacoes`

Body:
```
{
  "nome": "Etica",
  "descricao": "Uma descricao",
  "peso": 0.2,
  "aulaId": 1,
  "avaliacaoAlunos": [
    { "alunoId": 1, "nota": 9.5 },
    { "alunoId": 2, "nota": 8.0 }
  ]
}
```

### Buscar Todas as Avaliacoes de uma Aula

GET: `api/avaliacoes?aulaId=1`

### Buscar Avaliacao

GET: `api/avaliacoes/:id`
