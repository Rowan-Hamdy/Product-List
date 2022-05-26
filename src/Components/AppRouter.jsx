import { Component } from "react";
import { Route } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import ListComp from "./Routes/ListComp";
import AddComp from "./Routes/AddComp";
import DetailsComp from "./Routes/DetailsComp";
import Header from "./Header";
import Login from "./LoginForm";
import EditComp from "./Routes/EditComp";
class AppRouter extends Component {
  state = {
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
  };
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

  BackToList = () => {
    this.setState({
      showAdd: false,
      showDetails: false,
    });
  };


  EditHandler=(_object,i)=>{
    this.state.products[i]=_object;
    this.setState({
      productsList:this.state.products
    });
  };
  render() {
    return (
      <>
        <Router>
          <Header />

          <Route
            component={(props) => <Login {...props} />}
            path="/Login"
            exact
          />
          <Route
            component={(props) => (
              <ListComp
                RemoveHandler={this.RemoveHandler} 
                ProductArrayRef={this.state.products}
                {...props}
                BOMProps={props}
              />
            )}
            path="/"
            exact
          />
          <Route
            component={(props) => (
              <AddComp AddRef={this.AddNewProd} {...props} />
            )}
            path="/Add"
            exact
          />
          <Route 
          component={(props)=><EditComp 
          EditeRef={this.EditHandler} {...props}/>} path="/Edit/:id" exact/>
          <Route
            component={(props) => <DetailsComp {...props} />}
            path="/Details/:id"
          ></Route>
        </Router>
      </>
    );
  }
}

export default AppRouter;


