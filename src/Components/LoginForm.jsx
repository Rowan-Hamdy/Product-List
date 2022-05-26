import { Component } from "react";
import App from "../App"
import AppRouter from "./AppRouter"
class Login extends Component{
    state ={
        AdminData:{
            Name:"Rowan",
            Pass:123
        },
        LoginUser: false,
        txtUser: '',
        txtPass:''
    };
    handlerInput = (e)=>{
        this.setState({
            [e.target.name]: e.target.value
        });
    };
    onSubmitHandler =(e)=>{
        e.preventDefault();
        console.log("Submitted");
        let loginObjectUser ={
            Name: this.state.txtUser,
            Pass: parseInt(this.state.txtPass)
        }
        if(this.state.AdminData.Name= this.state.txtUser && this.state.AdminData.Pass==parseInt(this.state.txtPass)){
            this.setState({
                LoginUser:true
            })
        }

    }
    render(){
        if(!this.state.LoginUser){

        
        return (
            <form onSubmit={this.onSubmitHandler}>
                <span>Username</span>
                <input 
                className = "form form-control" 
                type ="text" 
                value= {this.state.txtUser}
                name= "txtUser"
                onChange= {this.handlerInput}/>

                <span>Password</span>
                <input 
                className = "form form-control" 
                type ="password" 
                name= "txtPass"
                value= {this.state.txtPass}
                onChange= {this.handlerInput}/>

                <input 
                type={"submit"}
                 value="Login" 
                 className="btn btn-primary"/>
            </form>
        );
        }
        else {
            return <AppRouter/>
        }
    }
}

export default Login;