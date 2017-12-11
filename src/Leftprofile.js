import React,{Component} from 'react';


class Leftprofile extends Component {
  render(){
    return(
      <div>
        <div className="panel panel-default">
          <div className="side-pro">
            <a href="www.twitter.com"><img className="img-responsive cov-s" alt="hww" src="https://scontent-sit4-1.xx.fbcdn.net/v/t1.0-9/16473690_1311348845624552_4701321215261943094_n.jpg?oh=df03cb263a89c80d9e38b279eb0fd946&oe=5AC504D1"/> </a>
            <a href="www.twitter.com"><img className="pro-s"  alt="hww"src="https://pbs.twimg.com/profile_images/859383270617759744/5gZV0A0J_400x400.jpg"/></a>
            <a href="www.twitter.com"><h3 className="main-name">Rohan Prasad</h3></a>
            <a href="www.twitter.com"><h3 className="user-name">@rohanprasad04</h3></a>
                <div>
                  <small className='te-pro'><b>TWEETS</b></small>
                  <small className='te-pro'><b>FOLLOWING</b></small>
                  <small className='te-pro'><b>FOLLOWERS</b></small>

                  <br/>
                  <a href="www.twitter.com" className='te-count'><b>3</b></a>
                  <a href="www.twitter.com" className='te-count'><b>251</b></a>
                  <a href="www.twitter.com" className='te-count'><b>153</b></a>
                    </div>

          </div>
        </div>

      </div>
    );
  }
}


export default Leftprofile;
