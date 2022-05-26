import logo from "./logo.svg";
import React from "react";
import Adding from "./Components/AddProduct";
import ListProducts from "./Components/ListOfProducts";
import Header from "./Components/Header";
import Details from "./Components/ProdDetails";
import EditProd from "./Components/EditProd"

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      products: [
        {
          id: 1,
          name: "Bread",
          price: "23 LE",
          quantity: 50,
          prodImg: "./images/bread.jpg",
          desc: "Sandwitch Bread",
        },
        {
          id: 2,
          name: "Cookies",
          price: "20 LE",
          quantity: 90,
          prodImg: "./images/milk.jpg",
          desc: "Chocolate cookies",
        },
        {
          id: 3,
          name: "Chocolate",
          price: "24 LE",
          quantity: 100,
          prodImg: "./images/choco.jpg",
          desc: "Dark Chocolate",
        },
      ],
      showAdd: false,
      showDetails: false,
      showEdit: false,

      DetailsObject: {},
      EditObject:{}
    };
  }

  AddNewProd = (_newObject) => {
    let newArray = [...this.state.products, _newObject];
    this.setState({
      products: newArray,
      showAdd: false,
    });
  };

  RemoveHandler = (_objectIndex) => {
    this.state.products.splice(_objectIndex, 1);
    this.setState({
      products: this.state.products,
    });
  };

  DetailsHandler = (_selectedObject) => {
    this.setState({
      showDetails: true,
      DetailsObject: _selectedObject,
    });
  };

BackToList= ()=>{
  this.setState({
    showAdd : false,
    showDetails : false
  });
};

EditHandler =(_editedObject)=>{
  this.setState({
    showEdit: true,
    EditObject: _editedObject,
  });
}

  render() {
    if (this.state.showAdd == false && this.state.showDetails == false && this.state.showEdit == false ) {
      return (
        <>
          <Header />
          <ListProducts
            Data={this.state.products}
            AddHandlerRef={this.AddNewProd}
            RemoveHandlerRef={this.RemoveHandler}
            DetailsHandlerRef={this.DetailsHandler}
            EditHandlerRef={this.EditHandler}

            BackToList
          />
          <input
            type={"button"}
            value="Add New Product"
            className="btn btn-primary"
            onClick={() =>
              this.setState({
                showAdd: true,
              })
            }
          />
        </>
      );
    } else if (this.state.showAdd == true && this.state.showDetails == false&& this.state.showEdit == false ) {
      return <Adding AnthRef={this.AddNewProd} />;
    } else if  (this.state.showAdd == false && this.state.showDetails == true&& this.state.showEdit == false ) {
      console.log("hhhhhhhhhhhhh")
      return <Details DetailsObjectRef={this.state.DetailsObject} 
      BackToListRef= {this.BackToList} />;
    }
    else if  (this.state.showAdd == false && this.state.showDetails == false&& this.state.showEdit == true ) {
      console.log("hhhhhhhhhhhhh")
     return (
     <EditProd EditObjectRef={this.state.EditObject}/>
     ) 
    }
  }
}

export default App;
