//Array of objects => App(id,name,age,image)
//import './MyStyle.css'
let ListOfAccounts =(props) =>{
   let AllListItems= props.Data.map((item)=>{
        return (
            <li>Name{item.name}  Age {item.age}
            <img 
            src={`${item.AccImg}`}
            style={{
                width:200,
                height:150,
            }}
            />
            </li>
        ) 
    })

    return(
        <div>
        <ol>
            {AllListItems}
        </ol>
        </div>

    );

}

export default ListOfAccounts;