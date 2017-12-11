import React,{Component} from 'react';
class Navbar extends Component {
  render(){
    return(
      <div>
        <div className="hello ">
    <div className="container">
      <div className="navbar-collapse navbar-collapse-1 collapse" aria-expanded="true">
        <ul className="nav navbar-nav">
          <li className="active">
            <div class='noti' ><a href="www.twitter.comfake"><i class="fa fa-home " aria-hidden="true"></i><b> Home </b></a> </div>
          </li>
          <li>
            <div class='noti' ><a href="www.twitter.comfake"><i class="fa fa-bell " aria-hidden="true"></i><b> Notifications </b></a> </div>
          </li>
          <li>
            <div class='noti' ><a href="www.twitter.comfake"><i class="fa fa-envelope " aria-hidden="true"></i><b> Messages </b></a> </div>
          </li>
        </ul>

          <i class="fa fa-twitter top-t-i" aria-hidden="true"></i>

        <div className="navbar-form navbar-right">
          <div className="form-group has-feedback">
            <form>
    <input type="text" class='search-b' name="search" placeholder="Search Twitter " /> <a href="www.twitter.com"><i class="fa fa-search" aria-hidden="true"></i></a>  </form>

          </div>

          <a href="www.twitter.com"><img src="https://pbs.twimg.com/profile_images/859383270617759744/5gZV0A0J_400x400.jpg" alt='image' className='shi' /></a>

      <a href="www.twitter.com"><span className="twe" type="submit" aria-label="Left Align"> Tweet </span></a>
        </div>
      </div>
    </div>
  </div>
      </div>
    );
  }
}

export default Navbar;
