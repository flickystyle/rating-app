'use client';

import { useState } from 'react';
import Button from './_components/Button/Button';
import Htag from './_components/Htag/Htag';
import P from './_components/P/P';
import Rating from './_components/Rating/Rating';
import Tag from './_components/Tag/Tag';
import styles from './page.module.css';

export default function Home() {
    const [rating, setRating] = useState<number>(4);
    console.log(rating);
    return (
        <div className={styles.page}>
            <Htag tag="h1">ASDF</Htag>
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
            <Rating rating={rating} isEditable setRating={setRating} />
        </div>
    );
}
