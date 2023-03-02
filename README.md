# realworld-docker
## Common

```
docker run -p 1234:4000 -d --name lab node-docker
```

## Rebuild image and run app

```
docker-compose up --build
```

## Build application with dev* config

```
docker-compose -f docker-compose.yml -f docker-compose.development.yml up --build
```