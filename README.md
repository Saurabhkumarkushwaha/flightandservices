/
    -src/
       index.js // server
       models/
       controllers/
       middlewares/
       services/
       utils/
       config/
       ripository/
    -tests/[later]
    -static/
    -temp/
    #####Welcome  to flight service
    #######Project setup
    -clone the project on your local
    -Execute 'npm install' on same path as of your root directory of the downloaded project
    -create a `.env` file in the root directory and add the following environment variable
       -`PORT:3000`
    -inside the `src/config` folder create a new file `config.json` and the add the following piece of json
    {
  "development": {
    "username": "your_db_login_name",
    "password": "<Your password>",
    "database": "flight_search_DB_DEV",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }