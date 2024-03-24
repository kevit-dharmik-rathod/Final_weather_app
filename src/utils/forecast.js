const axios = require("axios");
const forecast2 = async (latitude, longitude, callback) => {
  try {
    const fetchData = await axios.get(
      "http://api.weatherstack.com/current?access_key=0defa7086afdd6f16ab5524619e035cf&query=" +
        latitude +
        "," +
        longitude +
        "&units=f"
    );
    if (fetchData.data.success === false) {
      callback("Unable to find location. Try another Search", undefined);
    } else {
      const TEMP_IN_CELSIUS = Math.floor(
        (fetchData.data["current"]["temperature"] - 32) * (5 / 9)
      );
      callback(
        undefined,
        fetchData.data["current"]["weather_description"] +
          " It is currently " +
          TEMP_IN_CELSIUS +
          " degrees out. It feels like " +
          TEMP_IN_CELSIUS +
          " degrees out"
      );
    }
  } catch (error) {
    callback("Unable to connect to location services!", undefined);
  }
};
module.exports = forecast2;
