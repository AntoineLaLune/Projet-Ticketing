# Projet-Ticketing

## Descriptif

Bienvenue au dépôt git du Projet Ticketing !

Vous pouvez trouver ici la présentation du projet, ainsi que son guide de mise en place.
<br>Souhaitez vous lire la documentation du projet, ou son guide d'usage ? Rendez vous sur le [wiki](https://github.com/AntoineLaLune/Projet-Ticketing/wiki/Accueil).

## Présentation du projet

(Draft)

## Guide de mise en place

### Base de données

#### Installation de Docker

Installez Docker sur votre machine, guide pour [Mac](https://docs.docker.com/desktop/setup/install/mac-install/), [Windows](https://docs.docker.com/desktop/setup/install/windows-install/) et [Linux](https://docs.docker.com/desktop/setup/install/linux/).

#### Téléchargement de l'image MariaDB

```bash
docker pull mariadb:10.11
```

#### Création du conteneur

Créer un compose.yaml où vous souhaitez, à partir de ce schéman remplacez le [] présent dans celui-ci :

```yaml
name: Projet Ticketing
services:

  db:
    container_name: projet-ticketing-db
    image: mariadb:10.11
    restart: no
    environment:
      MARIADB_ROOT_PASSWORD: example
    volumes:
      - [CHEMAIN VERS LE DOSSIER DE VOTRE CHOIX] Ticketing:/var/lib/mysql:Z
    ports:
      - 3306:3306

  adminer:
    container_name: projet-ticketing-adminer
    image: adminer
    restart: no
    ports:
      - 8080:8080
```

Placez le chemain de votre terminal dans le projet, là où se trouve le compose.yaml, puis lancez le conteneur à partir de celui-ci :

```bash
docker compose up
```

#### Création de la base de données

Entrez dans le conteneur :

```bash
docker exec -it projet-ticketing-db bash
```

Puis entrez dans l'environnement de MariaDB, en administrateur :
*Le mot de passe est disponible dans le compose.yaml, définie par MARIADB_ROOT_PASSWORD*

```bash
mariadb -h localhost -u root -p
```

Créer la base de donnée, et entrez dedans :

```bash
CREATE DATABASE IF NOT EXISTS ticket
USE ticket
```

Pour finir, copiez le contenue du fichier 001.init.sql, disponible [ici](https://github.com/AntoineLaLune/Projet-Ticketing/blob/main/back-end/db/migration/001.init.sql).

### Serveur

#### Installation de Deno

Installez Deno sur votre machine, un guide est disponible [ici](https://docs.deno.com/runtime/getting_started/installation/).

#### Cloner le dépôt git, et rentrez dans le back-end de celui-ci

```bash
git clone https://github.com/AntoineLaLune/Projet-Ticketing.git
cd ./Projet-Ticketing/back-end
```

#### Créez un .env

~~À partir du .env.example, créer un .env à la raçine du projet.~~ (Draft)

#### Installez les modules requits au projet

```bash
deno install
```

#### Démarrez le serveur

~~deno run~~ (Draft)
