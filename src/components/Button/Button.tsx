import React from 'react';
import './Button.module.scss';

interface ButtonProps {
    onClick?: () => void;
    customClass?: string;
    children: React.ReactNode;
}

const Button = ({ onClick, customClass, children }: ButtonProps) => {
    return (
        <button className={customClass} onClick={onClick}>
            {children}
        </button>
    );
};

export default Button;
