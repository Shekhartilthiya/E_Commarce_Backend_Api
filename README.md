#chandrashekhar tilthiya 23/Feb/25
# It deployed on Render you can use

# E-commerce API

This API provides endpoints for creating, reading, updating and deleting products, users and carts.

## Endpoints

### Products

- **GET /api/product/get**: Returns all products in the database.
- **GET /api/product/get/:id**: Returns a product by its id.
- **POST /api/product/add**: Creates a new product.
- **PUT /api/product/update/:id**: Updates a product by its id.
- **DELETE /api/product/delete/:id**: Deletes a product by its id.

### Users

- **POST /api/user/register**: Registers a new user.
- **POST /api/user/login**: Logs in an existing user.

### Cart

- **POST /api/cart/add**: Adds a product to the user's cart.
- **GET /api/cart/get**: Returns all products in the user's cart.
- **DELETE /api/cart/remove/:productId**: Removes a product from the user's cart.
- **PUT /api/cart/update/:productId**: Updates the quantity of a product in the user's cart.

## How to use

### Register a new user

POST /api/user/register
{
    "name": "John Doe",
    "email": "john@example.com",
    "password": "password123"
}

### Login an existing user

POST /api/user/login
{
    "email": "john@example.com",
    "password": "password123"
}

### Add a product to cart

POST /api/cart/add
{
    "productId": "5f5f5f5f5f5f5f5f5f5f5f5",
    "qty": 2
}

### Get all products in cart

GET /api/cart/get

### Remove a product from cart

DELETE /api/cart/remove/5f5f5f5f5f5f5f5f5f5f5f5

### Update the quantity of a product in cart

PUT /api/cart/update/5f5f5f5f5f5f5f5f5f5f5f5
{
    "qty": 3
}
