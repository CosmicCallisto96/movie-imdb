import React, { Component } from "react";
import { setData } from "../redux/action/fetchAction";
import { connect } from "react-redux";
import Cards from '../components/Cards';
import { Spinner } from 'reactstrap';

class HomePage extends Component {
  componentDidMount() {
    this.props.setData();
  }
  render() {
    //this.props.data1!=null?console.log(this.props.data1.data):console.log("nmndmndm");
    return this.props.data1!=null? (
      <div>
            {this.props.data1.data.items.map(val=><Cards key={val.char_id} charData={val}></Cards>)}
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
export default connect(mapStateToProps, { setData })(HomePage);
