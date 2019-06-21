import React, {useState} from 'react';
import Aux from '../hoc/Auxiliary';
import classes from './Layout.css';
import ToolBar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from  '../Navigation/SideDrawer/SideDrawer';

function Layout(props){

    let [show, setShow] = useState(false);

    const switchShow = () => {
        show = !show;
        setShow(show);
    }

    const closeModal = () => {
        show = false;
        setShow(false);
    }

    const openModal = ()=> {
        show = true;
        setShow(true);
    }


    return (
    <Aux>
        <ToolBar openModal={openModal}/>
        
        <SideDrawer show={show} modelClosed={switchShow}/>
        
        <main className={classes.Content}>
            {props.children}
        </main>
    </Aux>
    )
};

export default Layout;