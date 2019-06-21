import React from 'react';
import NavigationItems, {MENU_MODES} from './../NavigationItems/NavigationItems';
import Logo from '../../Logo/Logo';
import classes from './SideDrawer.css';
import BackDrop from '../../UI/Backdrop/Backdrop';
import Aux from '../../hoc/Auxiliary';

const sideDrawer = (props) => {
   let attachedClass = [classes.SideDrawer, classes.Close];
   if (props.show) {
        attachedClass =  [classes.SideDrawer, classes.Open];
   } 

   return (
       <Aux>
        <BackDrop show={props.show} clicked={props.modelClosed} />
        <div className={attachedClass.join(' ')}>        
           <div className={classes.Logo}>
                 <Logo />
            </div>
            <NavigationItems menuMode={MENU_MODES.vertical}/>    
        </div>    
    </Aux> 
   );
}

export default sideDrawer;