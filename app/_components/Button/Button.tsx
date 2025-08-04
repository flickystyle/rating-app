import { JSX } from 'react';
import { ButtonProps } from './Button.props';
import styles from './Button.module.css';
import cn from 'classnames';
import ArrowSvg from './arrow.svg';

export default function Button({
    children,
    appearance,
    arrow = 'none',
    className,
    ...props
}: ButtonProps): JSX.Element {
    return (
        <button
            className={cn(styles.button, className, {
                [styles.primary]: appearance === 'primary',
                [styles.ghost]: appearance === 'ghost',
            })}
            {...props}
        >
            {children}
            {arrow !== 'none' && (
                <span
                    className={cn(styles.arrow, {
                        [styles.down]: arrow === 'down',
                    })}
                >
                    <ArrowSvg />
                </span>
            )}
        </button>
    );
}
