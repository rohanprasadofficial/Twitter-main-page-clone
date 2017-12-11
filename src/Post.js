import React,{Component} from 'react';
import Samplepost from './Samplepost';
class Posts extends Component {
  render(){
    return(
      <div className="panel-body">
          <a className="media-left" href="www.twitter.com">
            <img alt="profile pic" className="side-img" src="https://pbs.twimg.com/profile_images/753172860093562880/CssCM_nB_400x400.jpg"/>
          </a>
          <div className="media-body">
            <h4 className="media-heading"><small> <b><a href="www.twitter.com">Chennaiyin FC</a></b>‏</small> <span class="fa fa-stack fa-lg">
  <i class="fa fa-certificate fa-stack-2x"></i>
  <i class="fa fa-check fa-stack-1x fa-inverse"></i>
  </span>
   <small>@chennaiyinFC . 1h</small></h4>
            <p>A tough choice. Who's your pick? 🤔
              🔁 - #TheriJeje
              ❤ - #AsathalInigo
              #PoduMachiGoalu #LetsFootball #CHEKOL.</p>
            <img src='https://pbs.twimg.com/media/DQdaBXyUIAARIUZ.jpg:large' className='img-pd'/>
            <ul className="nav nav-pills nav-pills-custom">
              <li><a href="www.twitter.com"><i class="fa fa-comment-o" aria-hidden="true"></i></a></li>
              <li><a href="www.twitter.com"><i class="fa fa-retweet" aria-hidden="true"></i>  </a></li>
              <li><a href="www.twitter.com"><i class="fa fa-heart-o" aria-hidden="true"></i></a></li>
              <li><a href="www.twitter.com"><i class="fa fa-envelope-o" aria-hidden="true"></i></a></li>
            </ul>

        </div>
        <hr/>
        <Samplepost/>

      </div>

    );
  }
}



export default Posts;
