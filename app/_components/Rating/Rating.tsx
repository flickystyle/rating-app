'use client';

import React, { JSX, useEffect, useState, KeyboardEvent } from 'react';
import { RatingProps } from './Rating.props';
import StarIcon from './star.svg';
import styles from './Rating.module.css';
import cn from 'classnames';

export default function Rating({
    isEditable = false,
    rating,
    setRating,
    className,
    ...props
}: RatingProps): JSX.Element {
    const [ratingArray, setRatingArray] = useState<JSX.Element[]>(
        new Array(5).fill(null).map(() => <></>)
    );
    console.log('Rating', rating);

    useEffect(() => {
        console.log('inUseEffect', rating);
        constructRating(rating);
    }, [rating]);

    function constructRating(currentRating: number) {
        const updatedArray = ratingArray.map((r: JSX.Element, i: number) => {
            return (
                <span
                    key={i}
                    onMouseEnter={() => changeDisplay(i + 1)}
                    onMouseLeave={() => changeDisplay(rating)}
                    onClick={() => onClick(i + 1)}
                >
                    <StarIcon
                        className={cn(styles.star, {
                            [styles.filled]: i < currentRating,
                            [styles.editable]: isEditable,
                        })}
                        tabIndex={isEditable ? 0 : -1}
                        onKeyDown={(e: KeyboardEvent<SVGElement>) =>
                            isEditable && handleSpace(i + 1, e)
                        }
                    />
                </span>
            );
        });
        setRatingArray(updatedArray);
    }

    function changeDisplay(i: number) {
        if (!isEditable) {
            return;
        }

        constructRating(i);
    }
    function onClick(i: number) {
        if (!isEditable || !setRating) {
            return;
        }
        setRating(i);
    }

    function handleSpace(i: number, e: KeyboardEvent<SVGElement>) {
        if (e.code !== 'Space' || !setRating) {
            return;
        }
        setRating(i);
    }
    return (
        <div {...props}>
            {ratingArray.map((r, i) => (
                <span key={i}>{r}</span>
            ))}
        </div>
    );
}
