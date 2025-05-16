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
<<<<<<< HEAD
  }
  -once you've added your db config as listed above, go to the src folder from your terminal and execute 'npx sequelize db:create'

  `npx sequelize db:migrate`

  ## Database Design
   -Airplane table
   -Flight
   -Airport
   -City

   -A flight belong to an airplane but one airplane can be used in multiple flights
   -A city has many airports but one airport belong to a city
   -One airport can have many flights,but a flight belong to one airport
=======
  }
>>>>>>> f97a096970cf8ba6e824fd208fc7287f915fdfa5

## Tables 

### City -> id, name , created_at,updated_at
### Airport -> id, name, address, city_id, created_at, updated_at
    Relationship -> City has many airports belong to  a city (one to many)
  ```npx sequelize model:generate --name Airport --attributes name:String,address:String,cityId:integer```