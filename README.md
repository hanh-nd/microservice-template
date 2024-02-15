# Microservice Template

## Requirements

-   [Node.js](https://nodejs.org/en)
-   [PM2](https://pm2.keymetrics.io/)
-   [MySQL](https://www.mysql.com/)
-   [Kafka](https://kafka.apache.org/)
-   [Docker](https://docs.docker.com/desktop/)
-   [Docker Compose](https://docs.docker.com/compose/)

In the future:

-   [Kubernetes](https://kubernetes.io/)
-   [Skaffold](https://skaffold.dev/docs/install/#standalone-binary)
-   [Ingress-nginx](https://kubernetes.github.io/ingress-nginx/deploy/#quick-start)

## Installation

Step 1: create `.env.production` file from .env.example

```bash
$ cp .env.example .env.production
```

Step 2: run the application

```bash
$ docker compose up
```
