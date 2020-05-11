# todo-list

## Requirements

[Docker](https://docs.docker.com/engine/installation)

[Docker Compose](https://docs.docker.com/compose/install)

## Init containers

```bash
# todo-list/api
$ cd api
$ cp .env.example .env
$ docker-compose up -d
```

```bash
# todo-list/front-end
$ cd front-end
$ cp .env.example .env
$ cd docker-compose up -d
```

**Go to** [http://localhost:3000](http://localhost:3000)
