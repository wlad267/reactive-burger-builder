import React from 'react';
import image from '../../assests/images/logo.jpg';
import classes from './Logo.css';

const logo = (props) => (
    <div className={classes.Logo}>
        <img src={image} alt=" the burger"/>
    </div>
);

export default logo;