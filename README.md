# basic-api-server

**Author: [Andrew Enyeart](https://github.com/aenyeart)**

HTTP Express API server with endpoints that perform CRUD operations on a SQL database, deployed on Heroku here: [aenyeart-basic-api-server.herokuapp.com](https://aenyeart-basic-api-server.herokuapp.com)

Most recent pull request: [https://github.com/aenyeart/basic-api-server/pull/2](https://github.com/aenyeart/basic-api-server/pull/2)

## Data Flow Diagram
![](./UML.jpg)

## Installation

To install, open your command line and run:

```terminal
git clone git@github.com:aenyeart/basic-api-server.git
cd server-deployment-practice
npm install
```

## Usage

To start the server on your local machine run:

```terminal
npm start
```

To run the built-in tests on the server run:

```terminal
npm test
```

## Routes

Can be tested manually via ThunderClient or any HTTP client:

* GET `/food` returns a list of Food objects
* GET `/food/1` returns the first Food object in the list
* POST `/food` creates a Food object, saves it to the list of foods
* PUT `/food/2` updates the second Food object
* DELETE `/food/3` deletes the third Food object

The routes for `/tableware` follow the same pattern as above.

## Features

* Food:
  * Contains String: dishName
  * Contains Integer: quantity
  * Example:
  
      ```javascript
      { 'dishName': 'wings', 'quantity': '24' }
      ```

* Tableware:
  * Contains String: tablewareName
  * Example:

    ```javascript
    { 'tablewareName': 'large plate' }
    ```
