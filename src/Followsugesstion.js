import React,{Component} from 'react';

class Followsuggestion extends Component {
  render(){
    return(

        <div className="panel-body">
          <div className="media">
            <div className="media-left">

              <img src="https://pbs.twimg.com/profile_images/494875553082511362/bpu1CE75_400x400.jpeg" alt="" className="side-img"/>
            </div>
            <div className="media-body">
              <a href="www.twitter.com"><h5 className=" media-heading right-names"><b>Mahesh Bhatt </b><span class="fa fa-stack fa-lg">
    <i class="fa fa-certificate fa-stack-2x"></i>
    <i class="fa fa-check fa-stack-1x fa-inverse"></i>
 <small className="user-name-right">@mahesh</small> </span></h5> </a>

  <a href="www.twitter.com" className="follow-button-side"> <b>Follow</b>	</a>
            </div>
          </div>
        <hr className="line"/>
        </div>
  );
  }
}


export default Followsuggestion;
