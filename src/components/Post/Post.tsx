import React, { useEffect } from 'react';
import classes from './Post.module.scss';
import { ImArrowUp, ImArrowDown } from 'react-icons/im';

interface PostProps {
    children?: React.ReactNode;
    title: string;
    subBloodIt: string;
    creatingDate: string;
    author: string;
    likes: number;
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
    likes,
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
                <div className={classes.postAside}>
                    <ImArrowUp className={classes.icon} size={20} />
                    {likes}
                    <ImArrowDown className={classes.icon} size={20} />
                </div>
                <div className={classes.postHeader}>
                    <a href=".">{subBloodIt}</a>
                    <div> Posted by </div>
                    <a href=".">{author}</a>
                    <div> {creatingDate}</div>
                </div>
                <h1>{title}</h1>
                <div ref={contentRef} className={`${classes.mainContent}`}>
                    {children}
                </div>
                <div className={classes.postFooter}>comment</div>
            </div>
        </>
    );
};

export default Post;
