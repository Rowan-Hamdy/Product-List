function Profile(props){
    console.log(props.AccData)
    return (
        <div style={{
            "backgroundColor":"green",
          }}
          >
            <span>Profile</span>
            <p>
              {new Date().getDate().toLocaleString()}
            </p>
            Name<input value={props.AccData.Name}/>
            Age<input value={props.AccData.age}/>

            
          </div>
    );
}

export default Profile;