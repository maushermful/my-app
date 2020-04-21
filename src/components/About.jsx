import React,{Component} from 'react';
import {connect} from 'react-redux';


export class About extends Component {

 render(){
   console.log("coming from the store", this.props.username)
    return (
          <div>
                 <h1>About</h1>
                 <p>You can get to know me through this page </p>
                 <h1>my name is {this.props.username} </h1>
            </div>
     )
}
}

const mapStateToprops = (state) => ({
  username: state.usernames.username
})


export default connect(mapStateToprops)(About)
