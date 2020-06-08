import React from 'react';
import Aux from "../../hoc/Aux";
const Layout = (props) => {
    return (
        <Aux>
             <div>
             Toolbar ,Sidedraw, Backdrop
                <main>{props.children}</main>
            </div>
        </Aux>
    );
};

export default Layout;