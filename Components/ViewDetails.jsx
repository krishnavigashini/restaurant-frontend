import axios from "axios";
import React, { Component } from "react";
// import "./ViewDetails.css"
class ViewDetails extends Component {
  state = {
  data: []
  }

  componentDidMount() {
  axios.get('http://127.0.0.1:8080/get')
    .then(response => {
      this.setState({ data: response.data });
    })
    .catch(error => {
      console.log(error);
    });
}


  render() {   
    return (
        
      <table  className="style1">
      <thead>
        <tr>
          <th>Id</th>
          <th>Food Name</th>
          <th>Price</th>
          <th>Quantity</th>
          <th>Rating</th>
        </tr>
      </thead>
      <tbody>
        {this.state.data.map(user => (
          <tr key={user.id}>
            <td>{user.id}</td>
            <td>{user.food_name}</td>
            <td>{user.price}</td>
            <td>{user.quantity}</td>
            <td>{user.rating}</td>
          </tr>
        ))}
      </tbody>
    </table>
    );
  }}
  
export default ViewDetails;