import React, { useEffect } from 'react';
import classes from './Post.module.scss';

interface PostProps {
    children?: string;
    title: string;
    subBloodIt: string;
    creatingDate: string;
    author: string;
}

function isOverflowing(el: HTMLElement | null): boolean {
    if (!el) return false;
    return el.clientHeight < el.scrollHeight;
}

const Post = ({
    children,
    title,
    creatingDate,
    author,
    subBloodIt,
}: PostProps) => {
    const contentRef = React.createRef<HTMLDivElement>();
    useEffect(() => {
        if (isOverflowing(contentRef.current)) {
            contentRef.current?.classList.add(classes.addMask);
        }
    });
    return (
        <>
            <div className={classes.container}>
                <div className={classes.postAside}>Like</div>
                <div className={classes.postHeader}>
                    <a href=".">{subBloodIt}</a>
                    <div> Posted by </div>
                    <a href=".">{author}</a>
                    <div> {creatingDate}</div>
                </div>
                <h1>{title}</h1>
                <div ref={contentRef} className={`${classes.mainContent}`}>
                    <p>{children}</p>
                </div>
                <div className={classes.postFooter}>comment</div>
            </div>
        </>
    );
};

export default Post;
