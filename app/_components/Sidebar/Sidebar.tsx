import { JSX } from 'react';
import { SidebarProps } from './Sidebar.props';

export default function Sidebar({ ...props }: SidebarProps): JSX.Element {
    return <div {...props}>Sidebar</div>;
}
