import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Spinner} from 'reactstrap';
import Cards from '../components/Cards'
import {fetchSearchData} from '../redux/action/fetchAction';
class SearchResultPage extends Component
{
    
    componentDidMount()
    {
        const searchQuery=this.props.match.params.searchQuery;
        console.log(this.props.match.params.searchQuery)
        this.props.fetchSearchData(searchQuery);
    }
    componentDidUpdate(prevProps)
    {
        const prevSearchQuery=prevProps.match.params.searchQuery;
        const newSearchQuery=this.props.match.params.searchQuery;
        if(prevSearchQuery===newSearchQuery)
        {
            console.log("do not update");
        }
        else
        {
            this.props.fetchSearchData(newSearchQuery);
        }
    }
    render() {
        return this.props.data1!=null? (
          <div>
              {this.props.data1.data.results.map(val=>val.poster_path===null&val.backdrop_path!==null?<Cards key={val.char_id} charData={val}></Cards>:<Cards key={val.char_id} charData={val}></Cards>)}  
          </div>
        ):(
            <div style={{display:"flex",justifyContent:"center"}}>
                  <div>
          <Spinner type="grow" color="primary" />
          <Spinner type="grow" color="secondary" />
          <Spinner type="grow" color="success" />
          <Spinner type="grow" color="danger" />
          <Spinner type="grow" color="warning" />
          <Spinner type="grow" color="info" />
          <Spinner type="grow" color="light" />
          <Spinner type="grow" color="dark" />
        </div>
            </div>
          );
      }
}
const mapStateToProps = (storeState) => {
    return {
      data1: storeState.dataState.data1
    };
  };
export default connect(mapStateToProps,{fetchSearchData})(SearchResultPage);