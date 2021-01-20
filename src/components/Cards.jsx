import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Card, CardImg } from "reactstrap";
class Cards extends Component {
  
  state = {
    
  };
  
  render() {
    //const BaseUrl="http://image.tmdb.org/t/p/w185"
    console.log(`http://image.tmdb.org/t/p/w185/${this.props.charData}`)
    console.log(this.props.charData.poster_path);
    return (<Link to={"/detail/" + `${this.props.charData.id}`}
    params={{ djnjcd: "hello" }}
  >
      <Card
        className='m-4'
        style={{ width: "220px", display: "inline-block", border: "none" }}
      >
        <CardImg
          top
          width='100%'
          src={"http://image.tmdb.org/t/p/w185/"+`${this.props.charData.poster_path}`}
          alt='Card image cap'
          style={{ height: "300px" }}
          type='button'
        />
      </Card></Link>
    ) ;
  }
}

export default Cards;
