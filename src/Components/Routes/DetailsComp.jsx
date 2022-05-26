import {Link} from 'react-router-dom';
import { Component } from "react";
import { Route } from "react-router-dom";
 class DetailsComp extends Component{

render(){
console.log(this.props)

return (
    <div className="container">
      <table className="table">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Name</th>
            <th scope="col">Price</th>
            <th scope="col">Quantity</th>
            <th scope="col">Image</th>
            <th scope="col">Description</th>
          </tr>
        </thead>
        <tbody>
        <tr>
        <th>{this.props.location.SelectedObject.id}</th>
        <td>{this.props.location.SelectedObject.name}</td>
        <td>{this.props.location.SelectedObject.price}</td>
        <td>{this.props.location.SelectedObject.quantity}</td>
        <td>
            
          <img
        //  /images/choco.jpg 
            src={`${this.props.location.SelectedObject.prodImg.slice(1)}`}
            style={{
              width: 400,
              height: 300,
            }}
          />
        </td>
        <td>{this.props.location.SelectedObject.desc}</td>
        <br />
      </tr>
            </tbody>
      </table>
      <Link to="/"className="btn btn-outline-primary">
                    Back To List </Link>

    </div>
  );
        }
 }
 export default DetailsComp;


  