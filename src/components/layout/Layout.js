import React from 'react';
import Aux from "../../hoc/Aux";
import classes from './Layout.css'

const Layout = (props) => {
    return (
        // Aux component is HOC that simply wrap the adjacent ones
        <Aux>
             <div>
             Toolbar ,Sidedraw, Backdrop
            </div>
            <main className={classes.Content}>
                {props.children}
            </main>
        </Aux>
    );
};

export default Layout;