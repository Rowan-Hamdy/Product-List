//import Adding from './AddProduct'

let ListProducts=(props)=>{
  let AllListItems= props.Data.map((item,i)=>{
    return (
      <>
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
        onClick={()=>props.RemoveHandlerRef(i)} />

       <input 
        type={"button"} 
        value="Details" 
        className="btn btn-outline-success"
        onClick={()=>props.DetailsHandlerRef(item)} />

        <input 
        type={"button"} 
        value="Edit" 
        className="btn btn-outline-warning"
        onClick={()=>props.EditHandlerRef(item)} />
      </tr>

     </>
    );
})
    return(
      <div className='container'>
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
    
      {AllListItems}
    
  </tbody>
</table>
{/* <Adding AnthRef={props.AddHandlerRef}/> */}
</div>
    );
};

export default ListProducts;