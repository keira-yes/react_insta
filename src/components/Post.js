import React, {Component} from 'react';
import User from './User';

export default class Post extends Component {
    render() {
        return (
            <div className="post">
                <User
                    src="https://image.freepik.com/foto-gratis/primer-plano-mujer-gran-sonrisa-copos-nieve-cabeza_1140-276.jpg"
                    alt="photo"
                    name="Jane_best_princess"
                    min/>
                <img src={this.props.src} alt={this.props.alt}/>
                <div className="post__name">
                    Some_name
                </div>
                <div className="post__descr">
                    Some description of this new post, there i sthe best description in all web site.
                </div>
            </div>
        )
    }
}