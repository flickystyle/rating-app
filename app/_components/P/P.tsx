import React, { JSX } from 'react';
import { PProps } from './P.props';
import cn from 'classnames';
import styles from './P.module.css';

export default function P({
    children,
    size = 'm',
    className,
    ...props
}: PProps): JSX.Element {
    return (
        <p className={cn(className, styles[size])} {...props}>
            {children}
        </p>
    );
}
