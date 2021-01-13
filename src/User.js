import React from 'react'
import { Link } from 'react-router-dom';
const User = ({listOfUSer,match}) => {
  const user = listOfUSer.find(el=>el.id==match.params.id);
    return (
<div class="card bg-dark"  Style={"width: 18rem , margin: 50% , color: #282c34"}>
  <div class="card-body bg-primary">
    <h5 class="card-title">{user.name}</h5>
    <p class="card-text">{user.address.city},{user.address.street},{user.address.suite},{user.address.zipcode}</p>
  </div>
  <ul class="list-group list-group-flush bg-success">
    <li class="list-group-item">{user.company.name}</li>
    <li class="list-group-item">{user.company.catchPhrase}</li>
    <li class="list-group-item">@{user.email}</li>
  </ul>
  <div class="card-body bg-danger">
   <Link to ='/'> <a href="#" class="card-link"> Back To Main List</a></Link>
  </div>
</div>
    )
}

export default User