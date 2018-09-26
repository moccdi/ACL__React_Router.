import React from 'react';
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import './style.css';

import {object} from 'prop-types';
import Avatar from "@material-ui/core/Avatar";

const Header = ({user}) => (
    <header className="app-header">
        <AppBar position="static">
            <Toolbar className="toolbar">
                <Typography variant="title" color="inherit">
                    React Router Practice
                </Typography>
                {
                    user ?   (
                       <div className="user-box">
                        <Typography variant="subheading" color="inherit" className="user-name">
                            {user.name}
                        </Typography>
                        <Avatar
                        alt={user.name}
                        src={user.avatar}
                        className=""
                        />
                       </div>   )
                        :  (<Button color="inherit">Login</Button>)
                }
            </Toolbar>
        </AppBar>
    </header>
);
Header.propType = {
    user: object,
}
Header.defaultProps = {
    user: null,
}

export default Header;