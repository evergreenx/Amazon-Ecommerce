import React from "react";

import "./Home.css";
import Product from "./Product";

const Home = () => {
  return (
    <div className="home">
      <div className="home__container">
        <img
          src="https://fortheloveblog.com/wp-content/uploads/2016/07/Amazon-Prime-Banner.jpg"
          alt="banner"
          class="home__image"
        />

    
      
        <div className="home__row">
          <Product title="The Clean Code" price={50.66} image='https://images-na.ssl-images-amazon.com/images/I/41xShlnTZTL._SX376_BO1,204,203,200_.jpg'
          
          

          rating={5}
          
           />
          <Product />
        </div>

        <div className="home__row">
          <Product />
          <Product />
          <Product />

        </div>
      </div>
    </div>
  );
};

export default Home;
