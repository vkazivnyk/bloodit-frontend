import Button from '../Button/Button';
import classes from './TopicList.module.scss';

interface TopicListProps {
    topics: Array<{ topicName: string; subscribers: number }>;
}

const TopicList = ({ topics }: TopicListProps) => {
    return (
        <div className={classes.Wrapper}>
            <ul className={classes.TopicList}>
                {topics.map((t, index) => (
                    <li key={t.topicName}>
                        <a href=".">
                            <div className={classes.TopicWrapper}>
                                <span className={classes.NumberSpan}>
                                    {index + 1}
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
