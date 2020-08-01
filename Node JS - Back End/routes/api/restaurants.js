const express = require('express');
const router = express.Router();
const { protect } = require('../../middleware/auth');

const { getAllRestaurants,
    getAllRestaurantsByCity,
    addRestaurant
 } = require('../../controllers/restaurants');

/**
 * @swagger
 * path:
 *  /api/v1/restaurants:
 *    get:
 *      summary: Fetch all restaurants in the database
 *      tags: [Restaurants]
 *      responses:
 *        "200":
 *          description: Restaurants fetched successfully
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                  success:
 *                    type: boolean
 *                    description: true when request is successful, false otherwise.
 *                    example: true
 *                  count:
 *                    type: number
 *                    description: Number of restaurants returned in the response body
 *                  example: 1
 *                  data:
 *                    schema:
 *                    type: array
 *                    description: restaurants
 *                    items:
 *                      $ref: '#/components/schemas/User'
 *    post:
 *      summary: Add a restaurant in the database  
 *      tags: [Restaurants]
 *      requestBody:
 *          required: true
 *          content: 
 *              application/json:
 *                  schema:
 *                      type: object
 *                        - param
 * 
 */
router.route('/')
.get(getAllRestaurants)
.post(protect, addRestaurant);;

/**
 * @swagger
 * path:
 *  /api/v1/restaurants/{city}:
 *    get:
 *      summary: Fetch all restaurants in the database
 *      tags: [Restaurants]
 *      parameters:
 *        - in: path
 *          name: city
 *          schema:
 *            type: string
 *          required: true
 *          description: Fetch restaurants of a city
 *      responses:
 *        "200":
 *          description: Restaurants fetched successfully
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                  success:
 *                    type: boolean
 *                    description: true when request is successful, false otherwise.
 *                    example: true
 *                  count:
 *                    type: number
 *                    description: Number of restaurants returned in the response body
 *                  example: 1
 *                  data:
 *                    schema:
 *                    type: array
 *                    description: restaurants
 *                    items:
 *                      $ref: '#/components/schemas/User'
 */
router.route('/:city').get(getAllRestaurantsByCity);

module.exports = router;
