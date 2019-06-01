import React from 'react';
import User from './User';
import Palette from './Palette';

const Profile = () => {
  return (
    <div className="container profile">

      <User
        src="https://www.evanmarckatz.com/wp-content/uploads/2009/06/Blog-pic-40-yr-old-man-2197365.jpg"
        alt='Man'
        name='some_cool_man'
      />

      <Palette />

    </div>
  )
};

export default Profile;