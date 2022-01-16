import React from 'react';
import classes from './Layout.module.scss';
import Button from '../components/Button/Button';

const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className={classes.container}>
            <header>
                <h1>Bloodit</h1>
                <Button>Log in</Button>
                <Button>Sign in</Button>
            </header>
            <main>{children}</main>
        </div>
    );
};

export default Layout;
