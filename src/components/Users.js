import React, {Component} from 'react';
import User from './User';
import InstaService from '../services/instaservice';

export default class Users extends Component {
  InstaService = new InstaService();
  state={
    users: [],
    error: false
  };

  componentDidMount() {
    this.updateUsers();
  }

  updateUsers() {
    this.InstaService.getAllPosts()
      .then(this.onUsersLoaded)
      .catch(this.onError)
  }

  onUsersLoaded = (users) => {
    this.setState({
      users
    })
  };

  onError = () => {
    this.setState({
      error: true
    })
  };

  renderUsers(arr) {
    return arr.map(item => {
      const {name, photo, alt, id} = item;
      return (
        <a href="#" className='user min' key={id}>
          <img src={photo} alt={alt} />
          <div>{name}</div>
        </a>
      )
    })
  }

  render() {
    const {users, error} = this.state;
    if(error) {
      return 'Ошибка!';
    }
    const items = this.renderUsers(users);
    return (
      <div className="right">
        <User
          src="https://image.freepik.com/foto-gratis/primer-plano-mujer-gran-sonrisa-copos-nieve-cabeza_1140-276.jpg"
          alt="photo"
          name="Jane_best_princess"/>
        <div className="users__block">
          {items}
        </div>
      </div>
    )
  }
}