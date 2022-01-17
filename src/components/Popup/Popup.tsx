import React from 'react';
import Backdrop from '../Backdrop/Backdrop';
import classes from './Popup.module.scss';

interface PopupProps {
    onDismiss?: () => void;
    PopupStyle?: string;
    BackdropStyle?: string;
    children: React.ReactNode;
}

export const Popup = ({
    children,
    PopupStyle,
    BackdropStyle,
    onDismiss,
}: PopupProps) => {
    console.log();

    return (
        <>
            <Backdrop BackdropStyle={BackdropStyle} onClick={onDismiss} />
            <div className={`${classes.Popup} ${PopupStyle}`}>{children}</div>
        </>
    );
};
