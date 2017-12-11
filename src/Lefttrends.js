import React,{Component} from 'react';
import Trends from './Trends';


class Lefttrends extends Component {
  render(){
    return(
      <div className="panel panel-default panel-custom">
        <div className="panel-heading">
          <h4>
            <b>Trends for you !</b>
            <small><a href="www.twitter.com" className='blue'> .Change</a></small>
          </h4>
        </div>

          <Trends/>
          <Trends/>
          <Trends/>
          <Trends/>





      </div>
    );
  }
}



export default Lefttrends;
