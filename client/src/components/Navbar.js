import React from 'react'
import { AuthConsumer, } from "../providers/AuthProvider";
import { Menu, Icon, } from 'semantic-ui-react'
import { Link, withRouter, } from 'react-router-dom'


class Navbar extends React.Component {
  
  rightNavItems = () => {
    const { auth: { user, handleLogout, }, location, } = this.props;
    
    if (user) {
      return (
        <Menu inverted vertical style={{height: "100"}}>
           <h3 style={{color: "white" }}><Icon name="users" size="big" inverted color="white"/>myspace</h3>
          <br/>
           <Link to='/'>
            <Menu.Item 
              id='home'
              name='home'
              active={location.pathname === '/'}
            />
            </Link>
          <Menu.Item
            name='logout'
            onClick={ () => handleLogout(this.props.history) }
          />
        </Menu>
      )
    } else {
      return (
        <Menu inverted vertical>
          <h3 style={{color: "white" }}><Icon name="users" size="big" inverted color="white"/>myspace</h3>
          <br/>
            <Link to='/'>
            <Menu.Item
              id='home'
              name='home'
              active={location.pathname === '/'}
            />
            </Link>
          <Link to='/login'>
            <Menu.Item
              id='login'
              name='login'
              active={location.pathname === '/login'}
            />
          </Link>
          <Link to='/register'>
            <Menu.Item
              id='register'
              name='register'
              active={location.pathname === '/register'}
            />
          </Link>
        </Menu>
      )
    }
  }
  
  render() {
    return (
      <>
        <Menu inverted vertical>
          {/* <Link to='/'>
            <Menu.Item
              name='home'
              id='home'
              active={this.props.location.pathname === '/'}
            />
          </Link> */}
            { this.rightNavItems() }
        </Menu>
      </>
    )
  }
}

export class ConnectedNavbar extends React.Component {
  render() {
    return (
      <AuthConsumer> 
        { auth => 
          <Navbar { ...this.props } auth={auth} />
        }
      </AuthConsumer>
    )
  }
}


export default withRouter(ConnectedNavbar);