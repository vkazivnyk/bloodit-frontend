import React from 'react';
import './Input.module.scss';

interface InputProps {
    type: string;
    placeholder?: string;
    onFocus?: () => void;
    onChange?: React.ChangeEventHandler<HTMLInputElement>;
    customClass?: string;
    value?: string;
}

const Input = ({
    type,
    placeholder,
    onFocus,
    onChange,
    customClass,
    value,
}: InputProps) => {
    return (
        <input
            type={type}
            placeholder={placeholder}
            onFocus={onFocus}
            onChange={onChange}
            className={customClass}
            value={value}
        />
    );
};

export default Input;
