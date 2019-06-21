import React from 'react';
import classes from './NavigationItem.css';

const navigationItem = (props) => {

    const isVertical = props.menuMode ==='vertical';
    
    if (props.menuMode && props.menuMode==='vertical'){
        console.log('vertical menu');      
    }
   

    return (
    <li className={[classes.NavigationItem, isVertical ? classes.VerticalNavigationItem: null].join(' ')}>
        <a href={props.link} className={props.active ? classes.actoive: null}>{props.children}</a>
     </li>
)};

export default navigationItem;