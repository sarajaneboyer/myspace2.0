import React from 'react';
import { Header, Grid, Icon, Card, Button, Image } from 'semantic-ui-react';
import { Link } from "react-router-dom";
import axios from 'axios';

class Home extends React.Component {
    state = { profiles: [], };

    componentDidMount(){
        axios.get('/api/profiles')
        .then(res => this.setState({ profiles: res.data, }))
    }
    // sample= () => {
    //     const { profiles, } = this.state;

    //     if (profiles.length) {
    //         const index = Math.floor(Math.random() * profiles.length);
    //         return profiles[index];
    //     }   else {
    //         return null;
    //     }
    // }

    beFriend = (id) => {
        const { profiles, } = this.state;
        axios.put(`/api/profiles/${id}`)
          .then( () => this.setState({ profiles: profiles.filter( p => p.id !== id ), }) )
    };

    render(){
        const { profiles, } = this.state
        return (
    <div id="wrap">
    <h1 size="massive" Align="center"><Icon name= "users" size="big"/>myspace</h1>
          <Header as='h3' >Explore</Header>
          <br />
          <div id="wrap"></div>
      <Card.Group itemsPerRow={4}>
        { profiles.map( profile =>
          <Card key={profile.id}>
            <Image src={profile.avatar} />
            <Card.Content>
              <Card.Header>
                { profile.username }
              </Card.Header>
              <Card.Meta>
                { `${profile.age}  ${profile.gender}` }
              </Card.Meta>
              <Card.Content extra>
              <Button color="black" floated="right" icon basic onClick={() => this.beFriend(profile.id)}>
                <Icon name="add user" /> Friend </Button>
            </Card.Content>
            </Card.Content>
          </Card>
        )}
      </Card.Group>
      </div>
    )
  }
}

export default Home;

