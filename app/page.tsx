import Button from './_components/Button/Button';
import Htag from './_components/Htag/Htag';
import styles from './page.module.css';

export default function Home() {
    return (
        <div className={styles.page}>
            <Htag tag="h1">Текст</Htag>
            <Button appearance="primary" type="button">
                Push me
            </Button>
            <Button appearance="ghost">Push me</Button>
        </div>
    );
}
