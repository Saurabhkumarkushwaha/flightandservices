// const AirplaneRepository = require('./airplane-repository');
// const FlightRepository = require('./flight-repository');

const CrudRespository = require('./crud-repository');

module.exports = {
    CityRepository: require('./city-repository'),
    FlightRepository: require('./flight-repository'),
    AirplaneRepository: require('./airplane-repository'),
    AirportRespository: require('./airport-repository'),
    CrudRespository: require('./crud-repository')

}