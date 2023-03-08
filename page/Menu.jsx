// [8:07 am, 08/03/2023] +91 93458 63509: import axios from "axios";
// import '../components/form1.css'
// import React, { Component } from "react";

// class Form extends Component {
//     constructor(props){
//         super(props);
//         this.state={
//             academyName:" ",
//             danceType:" ",
//             fee:"",
//             location:" ",
//             contact:"",
//         }
//         this.msg=this.msg.bind(this);
        


//     }
// handleacadChange = (event) => {
//     this.setState({ academyName:event.target.value});
// }

// msg(){
//     alert("New academy has been added!!")
//   }



// handledanceChange = (event) => {
//     this.setState({ danceType:event.target.value});
// }
// handlefeeChange = (event) => {
//     this.setState({ fee:event.target.value});
// }
// handlelocationChange = (event) => {
//     this.setState({ location:event.target.value});
// }
// handlecontactChange = (event) => {
//     this.setState({ contact:event.target.value});
// }

// handleSubmit = (event) =>{
//     event.preventDefault();
//     const data = {
//         academyName : this.state.academyName,
//         danceType : this.state.danceType,
//         fee : this.state.fee,
//         location: this.state.location,
//         contact : this.state.contact       
//     }
//     axios.post('http://127.0.0.1:8080/post',data)
// };
// render(){
//     return ( 
//         <div align="center" className="for1">
//             <h1>NEW ACADEMY DETAILS</h1>
//         <form onSubmit={this.handleSubmit} className="login-form" >
//             <label className="login-label" style={{color:'black'}}>Academy</label>
//             <br/>
//             <input
//                 className="login-input" 
//                 type="text" 
//                 value={this.state.academyName}
//                 onChange ={this.handleacadChange}
//             />
//             <br/>
//             <label className="login-label" style={{color:'black'}}>DanceType</label>
//             <br/>
//             <input
//                 className="login-input" 
//                 type="text" 
//                 value={this.state.danceType}
//                 onChange ={this.handledanceChange}
//             />
//             <br/>
//             <label className="login-label" style={{color:'black'}}>Fee</label>
//             <br/>
//             <input
//                 className="login-input" 
//                 type="text" 
//                 value={this.state.fee}
//                 onChange ={this.handlefeeChange}
//             />
//            <br/>
//             <label className="login-label" style={{color:'black'}}>Location</label>
//             <br/>
//             <input
//                 className="login-input" 
//                 type="text" 
//                 value={this.state.location}
//                 onChange ={this.handlelocationChange}
//             />
//             <br/>
//             <label className="login-label" style={{color:'black'}}>Contact</label>
//             <br/>
//             <input
//                 className="login-input" 
//                 type="text" 
//                 value={this.state.contact}
//                 onChange ={this.handlecontactChange}
//             />
//             <button className="login-button" type="submit" onClick={this.msg}> Submit </button>

            
//         </form>
//         </div>
//     );
//   }
// }

// export default Form;
// [8:07 am, 08/03/2023] +91 93458 63509: post
// [8:07 am, 08/03/2023] +91 93458 63509: import axios from "axios";
// import '../components/tab.css';
// import React,{Component} from "react";
// class Table extends Component{
//     state={
//         data:[]
//     }
//     componentDidMount()
//     {
//         axios.get('http://127.0.0.1:8080/getallusers/Bharathanatiyam').then(response=>{
//             this.setState({data:response.data});
//         })
//         .catch(error=>{
//             console.log(error);
//         });
//     }
//     render()
//       {
//         return(
//             <div className="ta">
//             <table border={1}>
//                 <thead>
//                     <tr>
//                         <th>ID</th>
//                         <th>FOOD</th>
//                         <th>QUANTITY</th>
//                         <th>PRICE</th>
//                         <th>RATING</th>

//                     </tr>
//                 </thead>
//                 <tbody>
//                     {this.state.data.map(user=>(
//                         <tr>
//                             <td>{user.id}</td>
//                             <td>{user.food}</td>
//                             <td>{user.quantity}</td>
//                             <td>{user.price}</td>
//                             <td>{user.rating}</td>
//                         </tr>
//                     ))}
//                 </tbody>
//             </table>
//             </div>
//         )
//       }
// }
// export default Table;

import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

export default function Menu() {
  const [users, setUsers] = useState([]);
  
  const { id } = useParams();

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const result = await axios.get("http://localhost:8080/get");
    setUsers(result.data);
  };

  const deleteUser = async (id) => {
    await axios.delete(`http://localhost:8080/delete/${id}`);
    loadUsers();
  };

  return (
    <div className="container">
      <div className="py-4">
        <table className="table border shadow">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">FOOD NAME</th>
              <th scope="col">PRICE</th>
              <th scope="col">QUANTITY</th>
              <th scope="col">RATING</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr>
                <th scope="row" key={index}>
                  {index + 1}
                </th>
                <td>{user.food_name}</td>
                <td>{user.price}</td>
                <td>{user.quantity}</td>
                <td>{user.rating}</td>
                <td>
                  <Link
                    className="btn btn-primary mx-2"
                    to={`/viewuser/${user.id}`}
                  >
                    View
                  </Link>
                  <Link
                    className="btn btn-outline-primary mx-2"
                    to={`/edituser/${user.id}`}
                  >
                    Edit
                  </Link>
                  <button
                    className="btn btn-danger mx-2"
                    onClick={() => deleteUser(user.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}