import React from 'react';
import classes  from './NavigationItems.css';
import NavigationItem from '../NavigationItem/NavigationItem';

const navigationItems = (props) => {

    const isVertical = props.menuMode === 'vertical';

    if (props.menuMode && props.menuMode === 'vertical'){
        console.log('vertical menu');      
    }
   
    return (
    <ul className={[classes.NavigationItmes, isVertical ? classes.VerticalNavigationItmes : null].join(' ')}>
        <NavigationItem menuMode={props.menuMode} active link="/" >BurgerBuilder</NavigationItem>
        <NavigationItem menuMode={props.menuMode} link="/" >CheckOut</NavigationItem>
        <NavigationItem menuMode={props.menuMode} link="/" >GoAway</NavigationItem>
    </ul>
)};

export default navigationItems;

export const MENU_MODES = {
    vertical: 'vertical', horizontal:'horizontal'
}