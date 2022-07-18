import React, {ButtonHTMLAttributes, DetailedHTMLProps} from 'react';
import './_Button.scss';

export interface ButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    children: React.ReactNode;

}

function Button({children, ...props}: ButtonProps) {
    return (
        <button className="Button" {...props}>{children}</button>

    );
}

export default Button;