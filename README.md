# test-node-app

`hello world` node app to test docker / k8s deployment.
The development environment allows for interactive applicaiton changes.

After running `docker compose...`, view the app by navigating to `localhost:3000` in your browser.

## Requirements

* `docker`
* `docker compose`

## Usage

### Development

**Build**
```sh
docker compose -f docker-compose.yml -f docker-compose.development.yml up -d --build
```

**Teardown**
```sh
docker compose -f docker-compose.yml -f docker-compose.development.yml down -v 
```

### Production

**Build**
```sh
docker compose -f docker-compose.yml -f docker-compose.production.yml up -d --build 
```

**Teardown**
```sh
docker compose -f docker-compose.yml -f docker-compose.production.yml down -v
```



## TODO

The development build creates an empty `node_modules` directory in your repo.  It's annoying.

