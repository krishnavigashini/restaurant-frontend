import React, { Component } from 'react';
//import './Signup.css';
import axios from 'axios'

class AddDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
        id:'',
        food_name:'',
        price: '',
        quantity: '',
        rating:''
    };
  }

  handleIdChange = (event) => {
    this.setState({ id: event.target.value });
  };

  handleFoodChange = (event) => {
    this.setState({ food: event.target.value });
  };

  handlePriceChange = (event) => {
    this.setState({ price: event.target.value });
  };

  handleQuantityChange = (event) => {
    this.setState({ quantity: event.target.value });
  };

  handleRatingChange = (event) => {
    this.setState({ rating: event.target.value });
  };

  

  handleSubmit = (event) => {
    event.preventDefault();
    const data = {
        id: this.state.id,
        food_name: this.state.food_name,
        price: this.state.price,
        quantity: this.state.quantity,
        rating:this.state.rating        
      };
    
      axios.post('http://127.0.0.1:8080/post', data)
  };

  render() {
    return (
      <div className="style1">
      <center>
      <form onSubmit={this.handleSubmit} className="sign-form">
        <label className="sign-label">ID</label>
        <br></br>
        <br></br>
        <input
          className="sign-input"
          type="number"
          value={this.state.id}
          placeholder="Enter id"
          onChange={this.handleIdChange}
        />
<br></br>
<br></br>
        <label className="sign-label">Food Name</label>
        <br></br>
        <br></br>
        <input
          className="sign-input"
          type="text"
          value={this.state.food_name}
          placeholder="Enter Food Name"
          onChange={this.handleFoodChange}
        />

        <br></br>
        <br></br>
        <label className="sign-label">Price</label>
        <br></br>
        <br></br>
        <input
        className="sign-input"
        type="number"
        value={this.state.price}
        placeholder="Enter price"
        onChange={this.handlePriceChange}
        />
        <br></br>
        <br></br>
        <label className="login-label">Quantity</label>
        <br></br>
        <br></br>
        <input
        className="login-input"
        type="number"
        value={this.state.quantity}
        placeholder="Enter Quantity"
        onChange={this.handleQuantityChange}
        />
        <br></br>
<br></br>
        <label className="sign-label">Rating</label>
        <br></br>
        <br></br>
        <input
          className="sign-input"
          type="number"
          value={this.state.rating}
          placeholder="Enter Rating"
          onChange={this.handleRatingChange}
        />

        <br></br>
        <br></br>
        
        <button type="submit" className="btn btn-primary btn-lg active" role="button" aria-pressed="true">
              SUBMIT
            </button>
      </form>
      </center>
      </div>
    );
  }
}

export default AddDetails;