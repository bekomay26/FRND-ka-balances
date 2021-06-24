import React from 'react';
import styles from './Sidebar.module.css';
import SideBarTab from "../SidebarTab";
import logo from '../../logo.svg';
import { ReactComponent as DashboardLogo } from './icons/dashboard.svg';
import { ReactComponent as BalancesLogo } from './icons/balances.svg';
import { ReactComponent as CustomersLogo } from './icons/customer.svg';
import { ReactComponent as AnalyticsLogo } from './icons/analytics.svg';
import { ReactComponent as SettingsLogo } from './icons/settings.svg';
import { ReactComponent as TeamLogo } from './icons/team.svg';
import { ReactComponent as ContactLogo } from './icons/contact.svg';
import { ReactComponent as LogoutLogo } from './icons/logout.svg';

const Sidebar = ({selectedTab, onSideBarClick}) => {

    const onTabClick = (val) => {
        onSideBarClick(val)
    }

    return (
        <div className={styles.container}>
            <div className={styles.logo}>
                <img src={logo} alt="logo" />
            </div>
            <div className={styles.section}>
                <p className={styles.title}>Main Pages</p>
                <div className={styles.menuItems}>
                    <SideBarTab icon={<DashboardLogo/>} name='Dashboard' onSelectTab={onTabClick} selectedTab={selectedTab}/>
                    <SideBarTab icon={<BalancesLogo/>} name='Balances' onSelectTab={onTabClick} selectedTab={selectedTab}/>
                    <SideBarTab icon={<CustomersLogo/>} name='Customers' onSelectTab={onTabClick} selectedTab={selectedTab}/>
                    <SideBarTab icon={<AnalyticsLogo/>} name='Analytics' onSelectTab={onTabClick} selectedTab={selectedTab}/>
                </div>
            </div>
            <div className={styles.section}>
                <p className={styles.title}>General</p>
                <div className={styles.menuItems}>
                    <SideBarTab icon={<SettingsLogo/>} name='Settings' onSelectTab={onTabClick} selectedTab={selectedTab}/>
                    <SideBarTab icon={<TeamLogo/>} name='Team' onSelectTab={onTabClick} selectedTab={selectedTab}/>
                    <SideBarTab icon={<ContactLogo/>} name='Contact' onSelectTab={onTabClick} selectedTab={selectedTab}/>
                    <SideBarTab icon={<LogoutLogo/>} name='Logout' onSelectTab={onTabClick} selectedTab={selectedTab}/>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;