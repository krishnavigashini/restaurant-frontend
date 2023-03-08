

import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate ,useParams} from "react-router-dom";

export default function AddUser() {
  let navigate = useNavigate();
  // const { id } = useParams();
  const [user, setUser] = useState({

    food_name:"",
    price:"",
    quantity:"",
    rating:""
  });

  const { food_name,price,quantity,rating} = user;

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:8080/post", user);
    navigate("/");
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Register User</h2>

          <form onSubmit={(e) => onSubmit(e)}>
            
            <div className="mb-3">
              <label htmlFor="Foodname" className="form-label">
                Food Name
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter the Food Name"
                name="food_name"
                value={food_name}
                onChange={(e) => onInputChange(e)}
              />
              </div>
              <div className="mb-3">
                <label htmlFor="Price" className="form-label">
                  Price
                </label>
                <input
                  type={"number"}
                  className="form-control"
                  placeholder="Enter the Price"
                  name="price"
                  value={price}
                  onChange={(e) => onInputChange(e)}
                />
              </div>
              
            <div className="mb-3">
              <label htmlFor="Quantity" className="form-label">
                Quantity
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter the Quantity"
                name="quantity"
                value={quantity}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            
            <div className="mb-3">
              <label htmlFor="Rating" className="form-label">
                Rating
              </label>
              <input
                type={"number"}
                className="form-control"
                placeholder="Enter the Rating"
                name="rating"
                value={rating}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <button type="submit" className="btn btn-outline-primary">
              Submit
            </button>
            <Link className="btn btn-outline-danger mx-2" to="/">
              Cancel
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}