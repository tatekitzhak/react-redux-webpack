import React, { Component } from 'react';
import { connect } from 'react-redux';

class App extends Component {
   handleNameChange = (e) => {
      this.props.onChangeName(e.target.value)
   }
   deleteItem = (e) => {
      this.props.deleteItem()
   }

   render() {
      console.log("App:", this.props)
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
                  <button
                     onClick={this.props.deleteItem}>Delete item</button>
                  <ul>
                     {this.props.allNames && this.props.allNames.map((name, index) => (
                        <li key={index}> {name}</li>
                     ))}
                  </ul>
               </div>
            </div>
         </>);
   }
}

function mapStateToProps(state,ownProps) {
   return {
      name: state.name,
      allNames: state.allNames
   }
}
const mapDispatchToProps = (dispatch) => {
   return {
      onChangeName: (inputValue) => dispatch({ type: "CHANGE_ITEM", name: inputValue }),
      onAddName: () => dispatch({ type: "ADD_ITEM", name }),
      deleteItem: (item) => dispatch({type: "REMOVE_DATA", id: 2}) 
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
