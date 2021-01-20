import React, { Component } from 'react';
//import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom';
//import {fetchSearchData} from '../redux/action/fetchAction';
class Search extends Component {
    state = { 
        searchQuerry:""
     }
     handleChange=event=>{

         this.setState({searchQuerry:event.target.value})
         console.log(this.state.searchQuerry);
     }
     handleSubmit=event=>{
         event.preventDefault();
         //console.log(this.state.searchQuerry);
         this.props.history.push(`/search/${this.state.searchQuerry}`)
         //this.props.dispatch.fetchSearchData(this.state.searchQuerry)
         
     }
    render() { 
        return ( <form className="input-group mb-3" onSubmit={this.handleSubmit} style={{margin:"10px auto",width:"30%"}}> 
        <input type="text" class="form-control" 
        placeholder="Search" 
        aria-label="Recipient's username"
         aria-describedby="button-addon2"
         onChange={this.handleChange}
         value={this.state.searchQuerry}
         />
        <div className="input-group-append">
          <input className="btn btn-outline-secondary" type="submit" value="Search" id="button-addon2"/>
        </div>
      </form>  );
    }
}

export default withRouter(Search);