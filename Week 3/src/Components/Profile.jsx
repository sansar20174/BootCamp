function Profile(props) {
  return (
    <><div>
          <img src={props.image}/>
          <h3>Name: {props.name}</h3>
          <h3>Id: {props.id}</h3>
          <p>Hobby: {props.hobby}</p>
          <button>{props.text}</button>
    </div></>
  );
}   

export default Profile;