import React, { useState } from 'react';
import classes from './Layout.module.scss';
import Button from '../components/Button/Button';
import { BsSearch } from 'react-icons/bs';
import SearchingPopup from '../components/SearchingPopup/SearchingPopup';
import Input from '../components/Input/Input';

const Layout = ({ children }: { children: React.ReactNode }) => {
    const [isSearching, setIsSearching] = useState(false);
    const [searchingText, setSearchingText] = useState('');
    return (
        <div className={classes.container}>
            <header>
                <h1>Bloodit</h1>
                <div className={classes.searchInput}>
                    <BsSearch className={classes.loupe} />
                    <Input
                        type="text"
                        placeholder="Search"
                        onFocus={() => {
                            setIsSearching(true);
                        }}
                        onChange={e => setSearchingText(e.target.value)}
                    />
                    {isSearching ? (
                        <SearchingPopup onDismiss={() => setIsSearching(false)}>
                            <a href="https://www.pornhub.com">
                                Suggested variant
                            </a>
                            <a href="https://www.pornhub.com">
                                Suggested variant
                            </a>
                            <a href="https://www.pornhub.com">
                                Suggested variant
                            </a>
                            {searchingText ? (
                                <a
                                    href="https://www.pornhub.com"
                                    className={classes.fullScanLink}>
                                    <BsSearch className={classes.loupe} />
                                    Search for {searchingText}
                                </a>
                            ) : null}
                        </SearchingPopup>
                    ) : null}
                </div>
                <div className={classes.buttonContainer}>
                    <Button customClass={classes.logInButton}>Log in</Button>
                    <Button>Sign in</Button>
                </div>
            </header>
            <main>{children}</main>
        </div>
    );
};

export default Layout;
