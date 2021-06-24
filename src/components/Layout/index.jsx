import React, { useState, useEffect } from 'react';
import classNames from 'classnames/bind';

import styles from './Layout.module.css';
import Sidebar from '../Sidebar';
import Balances from '../tabs/Balances';

import { ReactComponent as MenuLogo } from './assets/menu1.svg';
import { ReactComponent as NotificationsLogo } from './assets/notification.svg';
import { ReactComponent as CloseIcon } from './assets/close.svg';
import userImage from './assets/user.png';
import UnderConstruction from '../UnderConstruction';

let cx = classNames.bind(styles);

const DisplayedTab = ({tab, currentDate}) => {

    if (tab !== 'Balances') {
        return <UnderConstruction />
    }
    return (
        <Balances currentDate={currentDate}/>
    );
};

const Layout = () => {
    const [selectedTab, setSelectedTab] = useState("Balances");
    const [isNavOpen, setIsNavOpen] = useState(false);
    const [currentDate, setCurrentDate] = useState('');


    useEffect(() => {
        const cDate = Intl.DateTimeFormat(navigator.language, { day: 'numeric', month: 'long', year: 'numeric'}).format(new Date())
        setCurrentDate(`Today, ${cDate}`)
    }, [])

    const onOpen = () => {
        setIsNavOpen(true)
    }

    const onClose = () => {
        setIsNavOpen(false)
    }

    const onSideBarClick = (val) => {
        setSelectedTab(val)
        setIsNavOpen(false)
    }


    return (
        <div className={styles.container}>
            <div className={styles.mobileHeader}>
                <MenuLogo onClick={onOpen} className={styles.menuIcon} />
                <div className={styles.headerMid}>
                    <p className={styles.headerTitle}>{selectedTab}</p>
                    <p className={styles.date}>{currentDate}</p>
                </div>
                <div className={styles.rightNav}>
                    <div className={styles.notification}>
                        <NotificationsLogo />
                        <div className={styles.hasNotification} />
                    </div>
                    <div className={styles.user}>
                        <img src={userImage} alt='user' />
                    </div>
                </div>
            </div>
            <div className={cx({ sideNav: true, show: isNavOpen})}>
                <div className={styles.closeIconDiv}>
                    <CloseIcon onClick={onClose} className={styles.closeIcon}/>
                </div>
                <Sidebar onSideBarClick={onSideBarClick} selectedTab={selectedTab}/>
            </div>
            <DisplayedTab tab={selectedTab} currentDate={currentDate} />
        </div>
    );
}

export default Layout;