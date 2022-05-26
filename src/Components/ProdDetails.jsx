let Details = (props) => {
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
        <th>{props.DetailsObjectRef.id}</th>
        <td>{props.DetailsObjectRef.name}</td>
        <td>{props.DetailsObjectRef.price}</td>
        <td>{props.DetailsObjectRef.quantity}</td>
        <td>
          <img
            src={`${props.DetailsObjectRef.prodImg}`}
            style={{
              width: 400,
              height: 300,
            }}
          />
        </td>
        <td>{props.DetailsObjectRef.desc}</td>
        <br />
      </tr>
            </tbody>
      </table>
<button className="btn btn-info" onClick={props.BackToListRef}>Back</button>

    </div>
  );
};
export default Details;
