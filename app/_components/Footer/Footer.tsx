import { JSX } from 'react';
import { FooterProps } from './Footer.props';

export default function Footer({ ...props }: FooterProps): JSX.Element {
    return <footer {...props}>Footer</footer>;
}
