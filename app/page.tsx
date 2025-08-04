import Button from './_components/Button/Button';
import Htag from './_components/Htag/Htag';
import P from './_components/P/P';
import Tag from './_components/Tag/Tag';
import styles from './page.module.css';

export default function Home() {
    return (
        <div className={styles.page}>
            <Htag tag="h1">Текст</Htag>
            <Button appearance="primary" type="button" arrow="down">
                Push me
            </Button>
            <Button appearance="ghost" arrow="right">
                Push me
            </Button>
            <P size="l">Large</P>
            <P>Medium</P>
            <P size="s">Small</P>
            <Tag size="s">small ghost</Tag>
            <Tag size="m" color="red">
                medium red
            </Tag>
            <Tag size="s" color="primary">
                small primary
            </Tag>
            <Tag size="m" color="green">
                medium green
            </Tag>
        </div>
    );
}
