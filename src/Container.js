import React,{Component} from 'react';
import Navbar from './Navbar';
import Leftprofile from './Leftprofile';
import Lefttrends from './Lefttrends';
import Middlesearch from './Middlesearch';
import Posts from './Post';
import Samplepost from './Samplepost';
import Whotofollow from './Whotofollow';
import Followsuggestion from './Followsugesstion';
import Disclaim from './Disclaim';


class Container extends Component {

  render(){
    return(
      <div >
<Navbar/>


<div className="container">
  <div className="row">
    <div className="col-sm-3">
      <Leftprofile/>
      <Lefttrends/>
    </div>


    <div className="col-sm-6">
      <div className="panel panel-info">
        <Middlesearch/>
        <Posts/>
        <Samplepost/>
        <Samplepost/>
        <Samplepost/>
        <Samplepost/>
      </div>

          <br/>

</div>

    <div className="col-sm-3">
      <div className="panel panel-default panel-custom">
        <Whotofollow/>
        <Followsuggestion/>
        <Followsuggestion/>
        <Followsuggestion/>
        <div>
          <a href="#">
            <i class="fa fa-users blue" aria-hidden="true"></i>
             <span className="people-know blue">Find people you know</span>
          </a>
        </div>
      </div>
      <Disclaim/>
      </div>
    </div>
  </div>
</div>

    );
  }
}



export default Container;
