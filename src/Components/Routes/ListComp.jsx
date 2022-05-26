import { Component } from "react";
import {Link} from 'react-router-dom';
import { Route } from "react-router-dom";
import Add from "./AddComp"
class ListComp extends Component{
    state = {
        products:[],
        category:''
    };
    GOTOAdd=()=>{
        this.props.history.push("/Add");
    };
    onChangeHandler=(e)=>{
   
        this.setState({
            category: e.target.value
        })
    }
    GetAllListItems=()=>{this.state.products = this.props.ProductArrayRef.map((item,i)=>{
        if(item.name.includes(this.state.category)==true){
        
            return(
     
                <tr key={i}>
                <th>{item.id}</th>
                <td>{item.name}</td>
                <td>{item.price}</td>
                <td>{item.quantity}</td>
                <td><img 
                    src={`${item.prodImg}`}
                    style={{
                        width:200,
                        height:150,
                    }}/>
                    </td>
                <td>{item.desc}</td>
                <br/>
                <input 
                type={"button"} 
                value="Delete"
                className="btn btn-outline-danger"
                onClick={()=>this.props.RemoveHandler(i)} />
        
                  <Link to={{ pathname:`/Details/${item.id}`, SelectedObject:item }} className='btn btn-outline-success'>
                  Details
                </Link>
                
                <Link to={{ pathname:`/Edit/${item.id}`, SelectedObject:item ,index:i }} className='btn btn-outline-success'>
                  Edit
                </Link>
              </tr>
             );
          }
    });
    return this.state.products;
} 
    render(){
        
        return (
            
            <div className='container'>
                      
        <div style={{color:"#B94A3E", width:"20%"}}>

        <span>Choose Catgorey</span>
        <select class="form-select form-select-sm" aria-label=".form-select-sm example" onChange={this.onChangeHandler}>
                <option value="">All</option>
                <option value="Bread">Bread</option>
                <option value="Cookies">Cookies</option>
                <option value="Chocolate">Chocolate</option>
            </select>
        </div>
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
        
          {this.GetAllListItems()}
        
      </tbody>
    </table>
     <Link 
        to="/Add"
        className="btn btn-outline-primary"> Add</Link>
            </div>
        );
    }
}

export default ListComp;

