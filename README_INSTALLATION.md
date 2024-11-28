# Cloning and Running Forked Directus

The instructions below will help you clone and run the directus fork into your local machine. Switch your node version
and it should be greater than **v18.18.0**

- **Clone your directus according to the version you need.**

  Note: It's best to get a specific version that fits your needs

  You can clone directus fork using the command below with the specific tag name specified.

```
   git clone --depth 1 --branch <tag_name> <repo_url>
```

**Or you can clone from the main and checkout from a specific tag and create a branch from it.**

- **From the main folder run and build**

  ```
  pnpm install
  ```

  ```
  pnpm build
  ```

- **Before you bootstrap the backend make sure you have backend listed into the .env file in the api's folder like
  this**

  ```
  SECRET="secret"
  DB_CLIENT="pg"
  DB_HOST="localhost"
  DB_PORT="5432"
  DB_DATABASE="postgres"
  DB_USER="directus"
  DB_PASSWORD=""
  ADMIN_EMAIL="admin@admin.com"
  ADMIN_PASSWORD="password"
  ```

- Run the bootstrap and follow the instructions from the link below

  `https://docs.directus.io/contributing/running-locally.html`
