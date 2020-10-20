# Структура

frontend-v1-route -> frontend-v1-service: 5001 OS -> 8080 Container
backend-v1-route -> backend-v1-service: 6001 OS -> 8080 Container

frontend-v2-route -> frontend-v2-service: 5002 OS -> 8080 Container
backend-v2-route -> backend-v2-service: 6002 OS -> 8080 Container

# Запуск

Запускаем Minishift:

```bash
minishift start --vm-driver=virtualbox
```

Используем Docker от Minishift:

```bash
minishift oc-env
minishift docker-env
docker login -u developer -p $(oc whoami -t) $(minishift openshift registry)
```

Собираем фронт (из папок frontend-v1 и frontend-v2 соответственно):

```bash
docker build . -t frontend-v1
docker tag frontend-v1 $(minishift openshift registry)/myproject/frontend-v1
docker push $(minishift openshift registry)/myproject/frontend-v1

docker build . -t frontend-v2
docker tag frontend-v2 $(minishift openshift registry)/myproject/frontend-v2
docker push $(minishift openshift registry)/myproject/frontend-v2
```

Собираем бэк (из папок backend-v1 и backend-v2 соответственно):

```bash
docker build . -t backend-v1
docker tag backend-v1 $(minishift openshift registry)/myproject/backend-v1
docker push $(minishift openshift registry)/myproject/backend-v1

docker build . -t backend-v2
docker tag backend-v2 $(minishift openshift registry)/myproject/backend-v2
docker push $(minishift openshift registry)/myproject/backend-v2
```
