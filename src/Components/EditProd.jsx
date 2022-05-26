// import React from 'react';
// class EditProd extends React.Component {
//     handlerInput=(eventObject)=>{
//         console.log(eventObject.target.value);
//         this.setState({
//             [eventObject.target.name]:eventObject.target.value
//         })
//     }
// render(){
//     return (
//       <div className="container">
//         <span>ID</span>
//         <input 
//         type={"text"} 
//         value=" "
//         className="form-control"
//         name="_id"
//         onChange={this.handlerInput }
//        />

//       </div>
//     );
//  }
// };


import React from 'react';
import { Component } from "react";
import App from "../App"

class EditProd  extends Component {

    state = {
        EditP:false,
        _id:this.props.EditObjectRef._id,
        _name:'',
        _price:'',
        _quantity:'',
        _prodImage:'',
        _desc:'',

    };
    handlerInput=(eventObject)=>{
        console.log(eventObject.target.value);
        this.setState({
            [eventObject.target.name]:eventObject.target.value,
            EditP:true
        })
    }
    // onSubmitHandler =(e)=>{
    //     e.preventDefault();
    //     console.log("Submitted");
    //     let Edit_Prod ={
    //         id: this.state._id,
    //         name: this.state._name,
    //         price: this.state._price,
    //         quantity: this.state._quantity,
    //         prodImage: this.state._prodImage,
    //         desc: this.state._desc,
    //     }
    //     this.setState({
    //         EditP:true
    //     })

    // }
    render(){
        if(!this.state.EditP){
    return(
        
       <>
        <span>ID</span>
        <input 
        type={"text"} 
        value={this.state._id} 
        className="form-control"
        name="_id"
        onChange={this.handlerInput}/>
        
        <input 
                type={"submit"}
                 value="EditProd" 
                 className="btn btn-primary"/>
                 </>
    )}
    else {
        return <App/>
    }
}
}
  export default EditProd;

  