import React from 'react';
import classes from './Backdrop.module.scss';

interface BackdropProps {
    onClick?: () => void;
    BackdropStyle?: string;
    children?: React.ReactNode;
}

const Backdrop = ({ onClick, children, BackdropStyle }: BackdropProps) => (
    <div className={`${classes.Backdrop} ${BackdropStyle}`} onClick={onClick}>
        <div className={classes.BackdropInner}>{children}</div>
    </div>
);

export default Backdrop;
