import React, { useState, useEffect } from 'react';
import styles from './Balances.module.css';
import { ReactComponent as NotificationsLogo } from './assets/notification.svg';
import userImage from './assets/user.png';
import PayoutTable from '../../PayoutTable';
import CustomSelect from '../../CustomSelect';


const Balances = ({currentDate}) => {
    const [selectedCurrency, setSelectedCurrency] = useState('usd');
    const [currUpper, setCurrUpper] = useState('USD');
    const [exRate, setExRate] = useState(381.97);
    const [accBalance, setAccBalance] = useState(5,332.18);

    const currencyMap = {
        'usd': <span>&#36;</span>,
        'kes': <span>KSh</span>,
        'ngn': <span>&#8358;</span>,
        'ghc': <span>&#8373;</span>
    }

    const currencyRateToNaira = {
        'usd': 381.97,
        'kes': 3.82,
        'ngn': 1,
        'ghc': 70.70
    }

    const convertToLocalCurrValue = (moneyInNaira, exchangeRate, dec = 2) => {
        return (moneyInNaira / exchangeRate).toFixed(dec)
    }

    useEffect(() => {
        const exchangeRate = currencyRateToNaira[selectedCurrency]
        setCurrUpper(selectedCurrency.toUpperCase())
        setExRate(exchangeRate)
        const localVal = convertToLocalCurrValue(2036732.79, exchangeRate)
        setAccBalance(localVal)
    }, [selectedCurrency])

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <div className={styles.leftNav}>
                    <p className={styles.title}>Balances</p>
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
            <div className={styles.body}>
                <div className={styles.mobileContainer}>
                    <div className={styles.leftMobileCard}>
                        <p className={styles.cardTitle}>Total account balance</p>
                        <div className={styles.currSelectAndValue}>
                            <CustomSelect 
                                items={[
                                    {id: 'usd', value: <span>&#36;</span>},
                                    {id: 'kes', value: <span>KSh</span>},
                                    {id: 'ngn', value: <span>&#8358;</span>},
                                    {id: 'ghc', value: <span>&#8373;</span>},
                                ]}
                                onClick={setSelectedCurrency}
                                // className={styles.mobSelect}
                            />
                            <p className={styles.cardBodyValue}>{accBalance}</p>
                        </div>
                        <p className={styles.cardBodySubValue}>{`1 ${currUpper} = ${exRate} NGN`}</p>
                    </div>
                    <div className={styles.rightMobileCard}>
                        <p className={styles.cardTitle}>Funds on hold</p>
                        <p className={styles.cardBodyValue}>{currencyMap[selectedCurrency]} {accBalance}</p>
                    </div>
                </div>
                <div className={styles.mainCardContainer}>
                    <div className={styles.leftCard}>
                        <div className={styles.leftCardBody}>
                            <div className={styles.cardHead}>
                                <p className={styles.cardTitle}>Total account balance</p>
                                <CustomSelect 
                                    items={[
                                        {id: 'usd', value: 'USD'},
                                        {id: 'kes', value: 'KES'},
                                        {id: 'ngn', value: 'NGN'},
                                        {id: 'ghc', value: 'GHC'},
                                    ]}
                                    onClick={setSelectedCurrency}
                                />
                            </div>
                            <div className={styles.cardBody}>
                                <p className={styles.cardBodyValue}>{currencyMap[selectedCurrency]} 5,332.18</p>
                        <p className={styles.cardBodySubValue}>{`1 ${currUpper} = ${exRate} NGN`}</p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.rightCard}>
                        <div className={styles.rightCardBody}>
                            <div className={styles.cardHead}>
                                <p className={styles.cardTitle}>Funds on hold</p>
                            </div>
                            <div className={styles.cardBody}>
                                <p className={styles.cardBodyValue}>{currencyMap[selectedCurrency]} 5,332.18</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.table}>
                    <PayoutTable 
                        currency={currencyMap[selectedCurrency]} 
                        convertToLocalCurrency={convertToLocalCurrValue} 
                        exchangeRate={exRate} 
                    />
                </div>
            </div>
        </div>
    );
}

export default Balances;
