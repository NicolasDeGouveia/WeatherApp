# Weather App

Il s'agit d'une application web conçue pour voir la météo du jour ainsi que des cinq prochains jours.

## Prérequis

Avant de commencer, assurez-vous d'avoir les prérequis suivants installés sur votre machine :

- Node.js version 18.X ou supérieure. Node.js est une plateforme logicielle qui vous permet d'exécuter du code JavaScript sur votre machine. Vous pouvez télécharger Node.js à partir de [ici](https://nodejs.org/en/download/).
- Git, un système de contrôle de version. Git est un outil essentiel pour tout développeur, permettant de suivre les modifications apportées au code et de collaborer avec d'autres développeurs. Vous pouvez le télécharger à partir de [ici](https://git-scm.com/downloads).


## Commencer

> [!IMPORTANT]  
> Assure-vous d'avoir un compte OpenWeatherMap afin de récupérer votre clé API.


Suivez ces étapes pour installer et exécuter le projet sur votre machine locale :

### 1. Cloner le dépôt

Ouvrez un terminal et exécutez la commande suivante pour cloner le dépôt :

```bash
git clone https://github.com/NicolasDeGouveia/WeatherApp
```

### 2. Accéder au répertoire du projet

Naviguez vers le répertoire du projet en utilisant la commande suivante :

```bash
cd weatherapp
```

### 3. Installer les dépendances

Installez toutes les dépendances nécessaires en utilisant la commande suivante :

```bash
npm install
```

### 4. Créer le fichier .env.local

Assurez-vous que vous êtes dans le répertoire du projet (`weatherapp`) et créez un fichier `.env.local` à la racine du projet.

### 5. Ajouter la clé API au fichier .env.local

Ajoutez la clé API d'OpenWeatherMap au fichier `.env.local` :

```plaintext
API_KEY='YOUR_API_KEY'

Remplacez 'YOUR_API_KEY' par votre clé API.
```


### 6. Exécuter l'application

 Dans un terminal, exécutez l'application en utilisant la commande suivante :

```bash
npm run build
npm run start
```

### 7. Accéder à l'application

Ouvrez votre navigateur web et accédez à [http://localhost:3000](http://localhost:3000) pour voir le résultat.
