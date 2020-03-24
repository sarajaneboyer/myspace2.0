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
    sample= () => {
        const { profiles, } = this.state;

        if (profiles.length) {
            const index = Math.floor(Math.random() * profiles.length);
            return profiles[index];
        }   else {
            return null;
        }
    }

    beFriend = (id) => {
        const { profiles, } = this.state;
        axios.put(`/api/profiles/${id}`)
          .then( () => this.setState({ profiles: profiles.filter( p => p.id !== id ), }) )
    };

    render(){
        const profile = this.sample();
        if (profile){
        return (
    <div id="wrap">
    <h1 size="massive" ><Icon name= "users" size="massive"/>myspace</h1>
    <br />
          <Header as='h1'>Profiles</Header>
          <br />
          <Card key={profile.id}>
            <Image src={profile.avatar} wrapped ui={false} />
            <Card.Content>
              <Card.Header>
                { profile.username }
              </Card.Header>
              <Card.Description>
                { profile.description }
              </Card.Description>
              <Card.Meta>
                { `${profile.age}  ${profile.gender}` }
              </Card.Meta>
            </Card.Content>
            <Card.Content extra>
              <Button color="black" icon basic onClick={() => this.beFriend(profile.id)}>
                <Icon name="add user" />
              </Button>
            </Card.Content>
          </Card>
          {/* <Link to="/my_cats">
            <Button color="blue">
              My Cats
            </Button>
          </Link> */}
    </div>
        )
    } else {
        return <Header textAlign="center">No profiles</Header>
    }
    }
}

export default Home;

