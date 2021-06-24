import React, { useState, useEffect } from 'react';
import classNames from 'classnames/bind';

import styles from './SidebarTab.module.css';

let cx = classNames.bind(styles);


const SidebarTab = ({icon, name, onSelectTab, selectedTab='Overview'}) => {
    const [isSelected, setIsSelected] = useState(false);

    useEffect(() => {
        setIsSelected(false)
        if(selectedTab === name) {
            setIsSelected(true)
        }
    }, [selectedTab, name])

    const onClickTab = () => {
        onSelectTab(name)
    }


    return (
        <div className={cx({ container: true, selected: isSelected})} onClick={() => onClickTab()}>
            {icon}
            <p className={styles.name}>{name}</p>
        </div>
    );
}

export default SidebarTab;