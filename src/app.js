import React, { Component } from 'react';
import { connect} from 'react-redux';
class App extends Component{
   render(){
      console.log("App:",this.props)
      return(
         
         <div>
            <h1>Hello World</h1>
         </div>
      );
   }
}
function mapStateToProps(state) {
   return {
      state
   }
}


export default connect(mapStateToProps)(App);