# Documentation API - Système de Ticketing

## Vue d'ensemble

Ceci est la documentation API pour le système de ticketing du backend. Tout les appels retournent des réponses JSON.



<img src="https://auclair-antoine.2024.mtp.iris-occitanie.fr/wp-content/uploads/2026/04/MCD.webp" alt="MCD" width="256"/>



---

## Appel - Tickets

### 1. Récupérer tous les tickets

**URL:** `/tickets`  
**Méthode:** `GET`

**Paramètres:** Aucun

**Réponse:**

```json
[
  {
    "id": "int",
    "user_mail": "string",
    "creation_date": "datetime",
    "asked_by_name": "string",
    "asked_by_last_name": "string",
    "content": "string",
    "priority": "int",
    "technician_id": "int ou null",
    "technician_answer": "string ou null",
    "answer_date": "datetime ou null",
    "closing_date": "datetime ou null",
    "latest_update": "datetime"
  }
]
```

**Code de statut:** 200 OK

---

### 2. Récupérer un ticket spécifique

**URL:** `/tickets/:id`  
**Méthode:** `GET`

**Paramètres URL:**

| Nom | Type | Obligatoire | Description  |
| --- | ---- | ----------- | ------------ |
| id  | int  | Oui         | ID du ticket |

**Réponse:**

```json
[
  {
    "id": "int",
    "user_mail": "string",
    "creation_date": "datetime",
    "asked_by_name": "string",
    "asked_by_last_name": "string",
    "content": "string",
    "priority": "int",
    "technician_id": "int ou null",
    "technician_answer": "string ou null",
    "answer_date": "datetime ou null",
    "closing_date": "datetime ou null",
    "latest_update": "datetime"
  }
]
```

**Code de statut:** 200 OK

---

### 3. Créer un ticket

**URL:** `/tickets`  
**Méthode:** `POST`

**Corps de la requête:**

| Nom      | Type   | Obligatoire | Description                   |
| -------- | ------ | ----------- | ----------------------------- |
| mail     | string | Oui         | Email du client               |
| name     | string | Oui         | Prénom du client              |
| lastName | string | Oui         | Nom du client                 |
| content  | string | Oui         | Description/contenu du ticket |
| priority | int    | Oui         | Niveau de priorité du ticket  |

**Exemple de requête:**

```json
{
  "mail": "client@exemple.com",
  "name": "Jean",
  "lastName": "Dupont",
  "content": "Problème avec mon compte",
  "priority": 2
}
```

**Réponse:**

```json
{
  "affectedRows": "int",
  "insertId": "int"
}
```

**Code de statut:** 201 Créé

---

### 4. Mettre à jour un ticket

**URL:** `/tickets/:id`  
**Méthode:** `PUT`

**Paramètres URL:**

| Nom | Type | Obligatoire | Description  |
| --- | ---- | ----------- | ------------ |
| id  | int  | Oui         | ID du ticket |

**Paramètres de requête:**

| Nom    | Type   | Obligatoire | Description                                       |
| ------ | ------ | ----------- | ------------------------------------------------- |
| action | string | Oui         | Action à effectuer: `close`, `affect` ou `answer` |

#### 4.1 Fermer un ticket

**Requête:** `?action=close`

**Corps de la requête:** Aucun

**Réponse:**

```json
{
  "affectedRows": "int"
}
```

**Code de statut:** 200 OK

#### 4.2 Assigner un ticket à un technicien

**Requête:** `?action=affect`

**Corps de la requête:**

| Nom           | Type | Obligatoire | Description                 |
| ------------- | ---- | ----------- | --------------------------- |
| technician_id | int  | Oui         | ID du technicien à assigner |

**Exemple de requête:**

```json
{
  "technician_id": 5
}
```

**Réponse:**

```json
{
  "affectedRows": "int"
}
```

**Code de statut:** 200 OK

#### 4.3 Répondre à un ticket

**Requête:** `?action=answer`

**Corps de la requête:**

| Nom    | Type   | Obligatoire | Description                |
| ------ | ------ | ----------- | -------------------------- |
| answer | string | Oui         | Réponse/solution du ticket |

**Exemple de requête:**

```json
{
  "answer": "Nous avons résolu votre problème. Veuillez vérifier votre compte."
}
```

**Réponse:**

```json
{
  "affectedRows": "int"
}
```

**Code de statut:** 200 OK

---

## Points de terminaison - Utilisateurs

### 5. Récupérer tous les utilisateurs

**URL:** `/users`  
**Méthode:** `GET`

**Paramètres:** Aucun

**Réponse:**

```json
[
  {
    "id": "int",
    "name": "string",
    "last_name": "string",
    "mail": "string",
    "technician": "boolean"
  }
]
```

**Code de statut:** 200 OK

---

### 6. Créer un utilisateur

**URL:** `/users`  
**Méthode:** `POST`

**Corps de la requête:**

| Nom      | Type   | Obligatoire | Description                    |
| -------- | ------ | ----------- | ------------------------------ |
| name     | string | Oui         | Prénom de l'utilisateur        |
| lastName | string | Oui         | Nom de l'utilisateur           |
| mail     | string | Oui         | Adresse email de l'utilisateur |

**Exemple de requête:**

```json
{
  "name": "Marie",
  "lastName": "Martin",
  "mail": "marie.martin@exemple.com"
}
```

**Réponse:**

```json
{
  "affectedRows": "int",
  "insertId": "int"
}
```

**Code de statut:** 201 Créé

**Note:** Les utilisateurs créés avec cet endpoint sont automatiquement des utilisateurs normaux (non-techniciens).

---

## Réponses d'erreur

### Argument invalide

**Code de statut:** 401 Non autorisé

```json
{
  "error": "Bad argument",
  "message": "The query has to be close, affect or answer"
}
```

Retourné lorsqu'un paramètre de requête invalide est fourni pour l'action de mise à jour du ticket.

---

## URL de base

Tous les points de terminaison sont relatifs à l'URL de base:

```
http://localhost:4000/api
```

---

## Configuration de la base de données

La base de données est configurée via des variables d'environnement:

- **DB_HOST:** Adresse du serveur MySQL
- **DB_USER:** Utilisateur de la base de données
- **DB_PASSWORD:** Mot de passe de la base de données
- **DB_TABLE:** Nom de la base de données
