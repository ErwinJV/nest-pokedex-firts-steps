<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

# Execute in development

1. Clone the repo
2. Execute

```
yarn install
```

3. Install Nest CLI

```
npm i -g @nest/cli
```

4. Build the database

```
docker compose up -d
```

5. Clone the file **.env.template**

6. Fill the env vars defined in the `.env`

7. Execute the app in dev environment

```
yarn start:dev
```

6. Regenerate the database with the seed

```
http://localhost:3000/api/v2/seed
```

## Used Stack

- MongoDB
- Nest
