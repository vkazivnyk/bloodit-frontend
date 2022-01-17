import Button from '../Button/Button';
import classes from './TopicList.module.scss';

interface TopicListProps {
    topics: Array<{ topicName: string; subscribers: number }>;
}

const TopicList = ({ topics }: TopicListProps) => {
    let number = 1;
    return (
        <div className={classes.Wrapper}>
            <ul className={classes.TopicList}>
                {topics.map(t => (
                    <li key={t.topicName}>
                        <a href=".">
                            <div className={classes.TopicWrapper}>
                                <span className={classes.NumberSpan}>
                                    {number++}
                                </span>
                                <div className={classes.MainTopicWrapper}>
                                    <span className={classes.NameSpan}>
                                        {t.topicName}
                                    </span>
                                    <span className={classes.SubscribersSpan}>
                                        Subscribers {t.subscribers}
                                    </span>
                                </div>
                                <Button
                                    onClick={() => console.log()}
                                    customClass={`${classes.ButtonWrapper}`}>
                                    Join
                                </Button>
                            </div>
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TopicList;
