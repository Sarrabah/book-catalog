FROM node:21 

# Crée un répertoire de travail dans le conteneur
WORKDIR /app

# Copie du package.json et du package-lock.json
COPY package*.json ./

# Installation des dépendances
RUN npm install

# Copie du reste des fichiers de l'application
COPY ./controllers ./controllers
COPY ./models ./models
COPY ./routes ./routes
COPY ./server.js  ./server.js

# Exposer le port utilisé par l'application
EXPOSE 3001

# Commande pour démarrer l'application
CMD [ "node", "server.js" ]


