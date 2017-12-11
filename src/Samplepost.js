import React ,{Component} from 'react';

class Samplepost extends Component {
  render(){
    return(
      <div className="panel-body">
          <a className="media-left" href="www.twitter.com">
            <img alt="profile pic" className="side-img" src="http://vignette3.wikia.nocookie.net/glee-new-beginnings/images/f/fd/Unknown.gif/revision/latest?cb=20130205144914"/>
          </a>
          <div className="media-body">
            <h4 className="media-heading"><small> <b><a href="www.twitter.com">Sample Post </a></b>‏</small> <span class="fa fa-stack fa-lg">
  <i class="fa fa-certificate fa-stack-2x"></i>
  <i class="fa fa-check fa-stack-1x fa-inverse"></i>
  </span> <small>@sampleuser . 1h</small></h4>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </p>
            <img src='http://vignette3.wikia.nocookie.net/glee-new-beginnings/images/f/fd/Unknown.gif/revision/latest?cb=20130205144914' className='img-pd'/>
            <ul className="nav nav-pills nav-pills-custom">
              <li><a href="www.twitter.com"><i class="fa fa-comment-o" aria-hidden="true"></i></a></li>
              <li><a href="www.twitter.com"><i class="fa fa-retweet" aria-hidden="true"></i>  </a></li>
              <li><a href="www.twitter.com"><i class="fa fa-heart-o" aria-hidden="true"></i></a></li>
              <li><a href="www.twitter.com"><i class="fa fa-envelope-o" aria-hidden="true"></i></a></li>
            </ul>

        </div>
        <hr/>

      </div>
    );
  }
}


export default Samplepost;
