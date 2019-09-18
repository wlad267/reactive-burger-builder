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
        <NavigationItem menuMode={props.menuMode} link="/" >BurgerBuilder</NavigationItem>
        <NavigationItem menuMode={props.menuMode} link="/orders" >Orders</NavigationItem>
        <NavigationItem menuMode={props.menuMode} link="/login" >GoAway</NavigationItem>
    </ul>
)};

export default navigationItems;

export const MENU_MODES = {
    vertical: 'vertical', horizontal:'horizontal'
}