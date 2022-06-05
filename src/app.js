import React, { Component } from 'react';
import { connect } from 'react-redux';

class App extends Component {
   handleNameChange = (e) => {
      this.props.onChangeName(e.target.value)
   }

   render() {
      console.log(this.props)
      return (
         <>
            <div >
               <div>
                  <input
                     type="text"
                     placeholder="Name"
                     defaultValue={this.props.name}
                     onChange={this.handleNameChange} />

                  <button
                     onClick={this.props.onAddName}>Add name</button>

                  <ul>
                     {this.props.allNames && this.props.allNames.map((name, index)=> (
                        <li key={index}> {name}</li>
                     ))}
                  </ul>
               </div>
            </div>
         </>);
   }
}


function mapStateToProps(state) {
   return {
      name: state.name,
    allNames: state.allNames
   }
}
const mapDispatchToProps = (dispatch) => {
   return {
     onChangeName: (name) => dispatch({ type: "CHANGE_NAME", name: name }),
     onAddName: () => dispatch({ type: "ADD_NAME",name }),
   }
 }
 
 export default connect(mapStateToProps, mapDispatchToProps)(App);
