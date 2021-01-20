import React, { Component } from 'react';
import {
    Card, CardImg, CardText, CardBody, CardLink,
    CardTitle, CardSubtitle
  } from 'reactstrap';
import axios from 'axios';
import config from '../config';
class DetailPage extends Component {
    state = {
        response:null
      }
    componentDidMount(){
        axios.get(`https://api.themoviedb.org/3/movie/${this.props.match.params.id}?api_key=${config.API_KEY}&language=en-US`).then(res=>this.setState({response:res}))
    }
    render() { 
       this.state.response!==null? console.log(this.state.response.data):console.log("ldjn")
        return (this.state.response!==null?
      <Card width="50%" style={{margin:"auto",width:"50%"}}>
        <CardBody>
        <CardTitle>{this.state.response.data.title}</CardTitle>
        <CardSubtitle>{this.state.response.data.tagline}</CardSubtitle>
        </CardBody>
        <img width="50%" style={{margin:"auto"}} src={"http://image.tmdb.org/t/p/w185/"+`${this.state.response.data.poster_path}`} alt="Card image cap" />
        <CardBody>
        <CardText>{this.state.response.data.overview}</CardText>
        <CardTitle>{this.state.response.data.average_count}</CardTitle>
          <CardLink href={this.state.response.data.homepage}>Home Page</CardLink>
          
        </CardBody>
      </Card>
          :<div></div>);
    }
}
 
export default DetailPage;