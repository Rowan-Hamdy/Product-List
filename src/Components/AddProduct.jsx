
 import React from 'react';

class Adding extends React.Component {

    state = {
        _id:'',
        _name:'',
        _price:'',
        _quantity:'',
        _prodImage:'',
        _desc:'',

    };
    handlerInput=(eventObject)=>{
        console.log(eventObject.target.value);
        this.setState({
            [eventObject.target.name]:eventObject.target.value
        })
    }
    render(){

    return(
        <div className="container">
        <span>ID</span>
        <input 
        type={"text"} 
        value={this.state._id} 
        className="form-control"
        name="_id"
        onChange={this.handlerInput}/>

        <span>Name</span>
        <input 
        type={"text"} 
        value={this.state._name} 
        className="form-control"
        name="_name"
        onChange={this.handlerInput}/>

        <span>Price</span>
        <input 
        type={"text"} 
        value={this.state._price} 
        className="form-control"
        name="_price"
        onChange={this.handlerInput}/>

        <span>Quantity</span>
        <input 
        type={"text"} 
        value={this.state._quantity} 
        className="form-control"
        name="_quantity"
        onChange={this.handlerInput}/>

        <span>Image</span>
        <input 
        type={"text"} 
        value={this.state._prodImage} 
        className="form-control"
        name="_prodImage"
        onChange={this.handlerInput}/>

        <span>Description</span>
        <input 
        type={"text"} 
        value={this.state._desc} 
        className="form-control"
        name="_desc"
        onChange={this.handlerInput}/>

        <br/> 
        <input type={"button"} 
          onClick={()=>this.props.AnthRef({
          id:this.state._id,
           name:this.state._name,
           price:this.state._price,
           quantity:this.state._quantity,
           prodImg:'./images/'+this.state._prodImage,
           desc:this.state._desc
          })}
        value="Add" className='btn btn-primary'
        />

        </div>

    );
  };
}

export default Adding;