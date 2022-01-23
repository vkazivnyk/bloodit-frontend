import React from 'react';
import Popup from '../Popup/Popup';
import classes from './SearchingPopup.module.scss';

interface SearchingPopupProps {
    onDismiss?: () => void;
    children: React.ReactNode;
}

const SearchingPopup = ({ children, onDismiss }: SearchingPopupProps) => {
    return (
        <Popup
            onDismiss={onDismiss}
            PopupStyle={classes.searchingPopup}
            BackdropStyle={classes.searchingBackdrop}>
            {children}
        </Popup>
    );
};

export default SearchingPopup;
