const restaurantController = require('../controllers/restaurant.controller');

module.exports = function(app){

    app.post("/api/restaurant/add", restaurantController.addRestaurant);

    app.get("/api/restaurant", restaurantController.allRestaurants);

    app.get("/api/restaurant/categories", restaurantController.restaurantCategories);

    app.get("/api/restaurant/categories/:category", restaurantController.restaurantByCategories);

    app.get("/api/restaurant/:id", restaurantController.restaurantById);

    app.get("/api/restaurant/rating/:rating", restaurantController.restaurantByRating);

    app.put("/api/restaurant/:id", restaurantController.updateRestaurant);

    app.delete("/api/restaurant/:id", restaurantController.deleteRestaurant);

    app.delete("/api/restaurant/", restaurantController.deleteAllRestaurant);

}