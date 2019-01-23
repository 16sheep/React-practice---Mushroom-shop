# React practice - Mushroom shop

In this practice challenge you will be building a mushroom shop
This project has a rails backend. You will need to cd into mushrooms-back and run bundle install and migrate and seed the database and start the server.

mushrooms-front holds the frontend of this practice, you will need to run npm install and npm start from that directory.

1. Check if the rails api is working by navigating to 'http://localhost:3000/products'

2. In your frontend directory you have App which should render <ProductsContainer/>, <NavBar/> and <SearchForm/>. <ProductsContainer/> is responsible for rendering <ProductCard/> which holds the information for each product

3. Pull the product data into the app from 'http://localhost:3000/products'. Show all of the products using ProductsContainer and ProductCard.

4. Implement search utilising <SearchForm/> component. The products should be filtered dynamically by name where the products shown are the ones which name includes the search term.

5. Implement a way to add items to cart when a user clicks Add to Cart button, show the number of items in cart next to cart icon in the NavBar.

6. When a user clicks cart button in NavBar the page should render Cart component instead of ProductsContainer

7. Cart component should render a list of names and price of the items the user has added to the cart and a total sum of cart items.

BONUS

Add the functionality of adding a new product
