import React from 'react';
import classes from './NavigationItem.css';
import {NavLink} from 'react-router-dom';

const navigationItem = (props) => {

    const isVertical = props.menuMode ==='vertical';
    
    if (props.menuMode && props.menuMode==='vertical'){
        console.log('vertical menu');      
    }
   

    return (
    <li className={[classes.NavigationItem, isVertical ? classes.VerticalNavigationItem: null].join(' ')}>
        <NavLink 
            exact
            activeClassName={classes.active} 
            to={props.link}>{props.children}</NavLink>
     </li>
)};

export default navigationItem;