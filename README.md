# Dan Abramov blog with Next

## Getting Started

For run the development mode:

```bash
yarn install && yarn dev
```

For run the production mode:

```bash
yarn install && yarn build && yarn start
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Deploy Production With Docker Compose

First Build prod using new BuildKit engine

```bash
COMPOSE_DOCKER_CLI_BUILD=1 DOCKER_BUILDKIT=1 docker-compose -f docker-compose.prod.yml build --parallel
```

Finally Up prod in detached mode

```bash
docker-compose -f docker-compose.prod.yml up -d
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.