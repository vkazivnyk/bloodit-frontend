import React from 'react';
import classes from './Home.module.scss';
import Post from '../../components/Post/Post';
import TopicList from '../../components/TopicList/TopicList';
import Popup from '../../components/Popup/Popup';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { EditorState } from 'draft-js';
import Button from '../../components/Button/Button';
import SearchingPopup from '../../components/SearchingPopup/SearchingPopup';

interface PostProps {
    title: string;
    subBloodIt: string;
    creatingDate: string;
    author: string;
    content: string;
}

interface HomeState {
    isCreatingPost: boolean;
    newSubbloddit: string;
    newPostTitle: string;
    newPostContent: string;
    isChoosingNewSubbloddit: boolean;
    Posts: Array<PostProps>;
}
interface HomeProps {}

class Home extends React.Component<HomeProps, HomeState> {
    state: HomeState = {
        isCreatingPost: false,
        newPostTitle: '',
        newPostContent: EditorState.createEmpty(),
        newSubbloddit: '',
        isChoosingNewSubbloddit: false,
        Posts: [],
    };

    createPost = () => {
        const { Posts, newPostTitle, newPostContent, newSubbloddit } =
            this.state;
        Posts.push({
            title: newPostTitle,
            content: 'newPostContent',
            subBloodIt: newSubbloddit,
            author: 'Vlad',
            creatingDate: '12 years age',
        });
        this.setState({
            isCreatingPost: false,
            newPostTitle: '',
            newPostContent: '',
            newSubbloddit: '',
            isChoosingNewSubbloddit: false,
        });
    };

    render() {
        const array = [
            { topicName: 'Oleg', subscribers: 100 },
            { topicName: 'Olegg', subscribers: 90 },
        ];

        const {
            isCreatingPost,
            newPostContent,
            newPostTitle,
            newSubbloddit,
            isChoosingNewSubbloddit,
            Posts,
        } = this.state;
        return (
            <div className={classes.container}>
                <TopicList topics={array} />
                <input
                    type="text"
                    onFocus={() => this.setState({ isCreatingPost: true })}
                />
                {Posts.map(el => (
                    <Post
                        key={el.title + el.author + el.creatingDate}
                        title={el.title}
                        subBloodIt={el.subBloodIt}
                        creatingDate={el.creatingDate}
                        author={el.author}>
                        {el.content}
                    </Post>
                ))}
                {isCreatingPost ? (
                    <Popup
                        onDismiss={() => {
                            this.setState({
                                isCreatingPost: false,
                                isChoosingNewSubbloddit: false,
                            });
                        }}
                        PopupStyle={classes.popupStyle}>
                        <input
                            type="text"
                            onChange={e => {
                                this.setState({ newPostTitle: e.target.value });
                            }}
                            value={newPostTitle}
                            placeholder="title"
                        />
                        <Editor
                            editorState={newPostContent}
                            toolbarClassName={classes.editorToolbar}
                            toolbarStyle={{ backgroundColor: '#f4f4f4' }}
                            wrapperClassName={classes.wrapperClassName}
                            editorClassName={classes.editorTextArea}
                            onEditorStateChange={(newPostContent: string) =>
                                this.setState({ newPostContent })
                            }
                        />
                        <div className={classes.subBlodditWrapper}>
                            <input
                                type="text"
                                placeholder="subBloddit"
                                onFocus={() => {
                                    this.setState({
                                        isChoosingNewSubbloddit: true,
                                    });
                                }}
                                onChange={e => {
                                    this.setState({
                                        newSubbloddit: e.target.value,
                                    });
                                }}
                                value={newSubbloddit}
                            />
                            {isChoosingNewSubbloddit && newSubbloddit ? (
                                <SearchingPopup
                                    onDismiss={() =>
                                        this.setState({
                                            isChoosingNewSubbloddit: false,
                                        })
                                    }>
                                    <div
                                        className={classes.suggestedBloodit}
                                        onClick={() =>
                                            this.setState({
                                                newSubbloddit: 'Hey',
                                                isChoosingNewSubbloddit: false,
                                            })
                                        }>
                                        Hey
                                    </div>
                                    <div className={classes.suggestedBloodit}>
                                        Hey
                                    </div>
                                </SearchingPopup>
                            ) : null}
                        </div>
                        <Button
                            customClass={classes.newPostButton}
                            onClick={this.createPost}>
                            Post
                        </Button>
                    </Popup>
                ) : null}
            </div>
        );
    }
}

export default Home;
