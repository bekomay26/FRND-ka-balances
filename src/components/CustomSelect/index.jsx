import React, {useState} from "react";
import styles from "./CustomSelect.module.css";
import classNames from "classnames/bind";


let cx = classNames.bind(styles);

const CustomSelect = ({items = [], onClick}) => {
    const [showItems, setShowItems] = useState(false);
    const [selectedItem, setSelectedItem] = useState(items && items[0]);


    const dropDown = () => {
        setShowItems(!showItems)
    };

    const selectItem = item => {
        setSelectedItem(item)
        setShowItems(false)
        onClick(item.id)
    };

    return (
      <div className={styles.box}>
        <div className={styles.container}>
          <div className={styles.selectedItem} onClick={dropDown}>
            {selectedItem.value}
          </div>

          <div
            style={{ display: showItems ? "block" : "none" }}
            className={styles.boxItems}
          >
            {items.map(item => (
              <div
                key={item.id}
                onClick={() => selectItem(item)}
                className={cx({ item: true, selected: selectedItem === item})}
              >
                {item.value}
              </div>
            ))}
          </div>
        </div>
      </div>
    );
}

export default CustomSelect;
