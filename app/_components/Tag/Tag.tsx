import { JSX } from 'react';
import { TagProps } from './Tag.props';
import styles from './Tag.module.css';
import cn from 'classnames';
import Link from 'next/link';

export default function Tag({
    size = 'm',
    children,
    color = 'ghost',
    className,
    href,
    ...props
}: TagProps): JSX.Element {
    return (
        <div className={cn(styles.tag, className, styles[color], styles[size])} {...props}>
            {href ? <Link href={href}>{children}</Link> : children}
        </div>
    );
}
