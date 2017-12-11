import React,{Component} from 'react';
class Middlesearch extends Component {
  render(){
    return(
      <div className="panel-heading">
        <div className="media">
          <a className="media-left" href="www.twitter.comfake">
            <img alt="" className='ser-pro' src="https://pbs.twimg.com/profile_images/859383270617759744/5gZV0A0J_400x400.jpg "/>
          </a>
          <div className="media-body">
            <div className="form-group has-feedback">
              <label className="control-label sr-only" for="inputSuccess5">Hidden label</label>
              <input type="text" className="form-control blue" placeholder="What's Happening ?" />
            <a href="www.twitter.com"> <i class="fa fa-picture-o form-control-feedback" aria-hidden="true"></i></a>

            </div>
          </div>
        </div>
      </div>
    );
  }
}


export default Middlesearch;
