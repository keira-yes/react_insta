import React, {Component} from 'react';
import ErrorMessage from './ErrorMessage';
import InstaService from '../services/instaservice';
import loading from '../loading.gif';

export default class Pallete extends Component {
  InstaService = new InstaService();
  state = {
    photos: [],
    error: false,
    loading: true
  };

  componentDidMount() {
    this.updatePhotos();
  }

  updatePhotos() {
    this.InstaService.getAllPhotos()
      .then(this.onPhotosLoaded)
      .catch(this.onError)
  }

  onPhotosLoaded = (photos) => {
    this.setState({
      photos,
      error: false,
      loading: false
    })
  };

  onError = () => {
    this.setState({
      error: true,
      loading: false
    })
  };

  renderItems(arr) {
    return arr.map(item => {
      const {src, alt, id} = item;
      return (
        <img src={src} alt={alt} key={id}/>
      )
    })
  }

  render() {
    const {error, photos} = this.state;
    if (error) {
      return <ErrorMessage/>
    }
    const items = this.renderItems(photos);
    return (
      <div className="palette">
        {items}
      </div>
    )
  }
}