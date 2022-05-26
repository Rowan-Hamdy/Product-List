import { Component } from "react";
import { Link } from "react-router-dom";
class EditComp extends Component {
  state = {
    _Id: this.props.location.SelectedObject.id,
    _Name: this.props.location.SelectedObject.name,
    _Price: this.props.location.SelectedObject.price,
    _Quantity: this.props.location.SelectedObject.quantity,
    _Description: this.props.location.SelectedObject.desc,
    
  };
  handlerInput = (eventobject) => {
    this.setState({
      [eventobject.target.name]: eventobject.target.value,
    });
  };
  render() {
    return (
      <>
        <h3>Edit Product</h3>

        <span> ID</span>
        <input
          type="text"
          className="form-control"
          name="_Id"
          value={this.state._Id}
          onChange={this.handlerInput}
          readOnly
        />

        <span> Name</span>
        <input
          type="text"
          className="form-control"
          name="_Name"
          value={this.state._Name}
          onChange={this.handlerInput}
        />

        <span> Price</span>
        <input
          type="text"
          className="form-control"
          name="_Price"
          value={this.state._Price}
          onChange={this.handlerInput}
        />

        <span> Quantity</span>
        <input
          type="text"
          className="form-control"
          name="_Quantity"
          value={this.state._Quantity}
          onChange={this.handlerInput}
        />
        <span> Description</span>
        <input
          type="text"
          className="form-control"
          name="_Description"
          value={this.state._Description}
          onChange={this.handlerInput}
        />

        <input
          type="button"
          className="btn btn-primary"
          value={"Save Product"}
          onClick={() => {
            this.props.EditeRef(
              {
                id: this.state._Id,
                name: this.state._Name,
                price: this.state._Price,
                quantity: this.state._Quantity,
                prodImg: this.props.location.SelectedObject.prodImg,
                desc: this.state._Description,
              },
              this.props.location.index
            );
            this.props.history.push("/");
          }}
        />
      </>
    );
  }
}
export default EditComp;
