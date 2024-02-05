# Utilisation de l'image Node.js version 18 basée sur Alpine Linux, une distribution Linux légère.
FROM node:18-alpine

# Définition du répertoire de travail à l'intérieur du conteneur où seront exécutées les commandes suivantes.
WORKDIR /app

# Copie du fichier package.json de l'hôte vers le répertoire de travail du conteneur.
COPY package.json ./

# Installation des dépendances définies dans package.json dans le conteneur.
RUN npm install

# Copie de tous les fichiers de l'application de l'hôte vers le répertoire de travail du conteneur.
COPY . .

# Construction de l'application Next.js. Cela peut inclure la génération de fichiers statiques ou la compilation des fichiers JavaScript.
RUN npm run build

# Copie des fichiers construits (généralement situés dans le répertoire .next) de l'hôte vers le répertoire de travail du conteneur.
COPY .next ./.next

# Commande de démarrage du conteneur. Dans ce cas, le mode de développement de l'application Next.js est lancé.
CMD ["npm", "run", "dev"]


