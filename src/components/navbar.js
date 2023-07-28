import React from "react";
import "../styles/navbar.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const lengthItems = useSelector((state) => state.cartDetail.value);
  console.log(`lengthItems`, lengthItems);
  return (
    <div className="navbar">
      <div className="nav_box">
        <span className="my_shop">
          <Link to={`/`} style={{ color: "white", textDecoration: "none" }}>
            E-commerce
          </Link>

          <Link to={`/addProduct`} style={{ textDecoration: "none" }}>
            <span className="mx-5 text-white" style={{ fontSize: "15px" }}>
              Add a Product
            </span>
          </Link>
          <span style={{ fontSize: "15px" }}>Help</span>
        </span>
        <div className="cart">
          <Link to={`/Cart`} style={{ textDecoration: "none" }}>
            <span>
              <i className="fas fa-cart-plus"></i>
            </span>
            <span>{lengthItems?.length}</span>
          </Link>
        </div>
        <div className="user-info">
          {/* Replace "user-image-url" with the actual URL of the user's image */}
          <img
            src="https://imgv3.fotor.com/images/homepage-feature-card/ai-sunglasses-design-from-fotor.jpg"
            alt="User"
            style={{ width: "30px", height: "30px", borderRadius: "50%", marginLeft: "0px", marginRight: "0px" }}
          />
          <span style={{ fontSize: "14px", marginLeft: "5px" }}>
            John Doe
          </span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
