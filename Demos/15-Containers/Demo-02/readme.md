# Creating & Managing Containers

> Note: Use FoodApp from folder "99 FoodApp"

## Docker

Create Images for .NET Core Api & Angular UI using `*.dockerfile`

### Create Image & Deploy to Dockerhub / Azure

#### Api

Inspect `../Skills/net-api/Dockerfile`:

```docker
FROM mcr.microsoft.com/dotnet/sdk:5.0 AS build
WORKDIR /build

COPY . .
RUN dotnet restore "skills-api.csproj"
RUN dotnet publish -c Release -o /app

FROM mcr.microsoft.com/dotnet/aspnet:5.0 AS final
WORKDIR /app
COPY --from=build /app .
ENTRYPOINT ["dotnet", "skills-api.dll"]
```

Build & Run Image:

```
docker build --rm -f "Dockerfile" -t skillsservice .
docker run -it --rm -p 8085:80 skillsservice
```

Browse using `http://localhost:5050/api/food`

Publish Image to Azure Container Registry:

```
docker tag skillsservice arambazamba/skillsservice
docker push arambazamba/skillsservice
```

#### UI

Inspect `./Skills/ng-ui/Dockerfile`:

```docker
FROM node:12.10 as node
LABEL author="Alexander Pajer"
WORKDIR /app
COPY package.json package.json
RUN npm install
COPY . .
RUN npm run build -- --prod

FROM nginx:alpine
VOLUME /var/cache/nginx

COPY --from=node /app/dist/FoodUI /usr/share/nginx/html
COPY ./config/nginx.conf /etc/nginx/conf.d/default.conf
```

Build & Run Image:

```
docker build --rm -f "app.prod.dockerfile" -t foodui .
docker run -d --rm -p 8086:80 foodui
```

Publish Image to Docker Hub:

```
docker tag foodui arambazamba/foodui
docker push arambazamba/foodui
```

## Azure Container Registry

Publish to ACR:

Execute `create-container-reg` and upload:

```
docker tag foodui foodacr-1234.azurecr.io/foodui:1.1.0
docker push foodacr-1234.azurecr.io/foodui:1.1.0
```
