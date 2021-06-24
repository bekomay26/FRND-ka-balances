import React, { useState, useEffect } from 'react';
import styles from './PayoutTable.module.css';

const payouts = [
    {id: 'KLA12578DHQ', source: 'Vel pellentesque ornare Vel pellentesque ornare', date: '25th November, 2020', amount: 458364},
    {id: 'KB212578DSE', source: 'Vel pellentesque ornare', date: '26th December, 2020', amount: 267379},
    {id: 'KRT62578DOP', source: 'Vel pellentesque ornare', date: '25th January, 2021', amount: 359051.8},
    {id: 'KKY72578DBN', source: 'Vel pellentesque ornare', date: '25th May, 2021', amount: 1145910},
]

const TableRow = ({pay, currency, convertToLocalCurrency, exchangeRate}) => {
    const [amount, setAmount] = useState(0);

    useEffect(() => {
        const localVal = convertToLocalCurrency(pay.amount, exchangeRate, 0)
        setAmount(localVal)
    }, [pay, exchangeRate, convertToLocalCurrency])

    return (
        <div className={styles.row}>
            <div className={styles.tableBodyRow}>
                <div className={styles.bodyCol}>{pay.id}</div>
                <div className={styles.bodyCol}>{pay.source}</div>
                <div className={styles.bodyCol}>{pay.date}</div>
                <div className={styles.bodyCol}>{currency} {pay.amount}</div>
            </div>
            <div className={styles.mobileBodyRow}>
                <div className={styles.mobileRowLeft}>
                    <p className={styles.idVal}>{pay.id}</p>
                    <p className={styles.sourceVal}>{pay.source}</p>
                </div>
                <div className={styles.mobileRowRight}>
                    <p className={styles.dateVal}>{pay.date}</p>
                    <p className={styles.currVal}>{currency} {amount}</p>
                </div>
            </div>
        </div>
    );
};

const PayoutTable = ({currency, convertToLocalCurrency, exchangeRate}) => {
    const [thePayouts, setThePayouts] = useState([...payouts]);

    const onMoreClick = () => {
        setThePayouts([...thePayouts, ...payouts])
    }

    return (
        <div className={styles.container}>
            <div className={styles.head}>
                <p className={styles.title}>Payout table</p>
                <div className={styles.controls}>
                    <input className={styles.search} type="search" placeholder={'Search something'} />
                    <div className={styles.dateAndBtn}>
                        <input className={styles.calendar} type="date" />
                        <button className={styles.payoutBtn} >Payout</button>
                    </div>
                </div>
            </div>
            <div className={styles.tableContainer}>
                <div className={styles.table}>
                    <div className={styles.tableHead}>
                        <div className={styles.tableHeadRow}>
                            <div className={styles.headCol}>Payout ID</div>
                            <div className={styles.headCol}>Source</div>
                            <div className={styles.headCol}>Date</div>
                            <div className={styles.headCol}>Amount</div>
                        </div>
                    </div>
                    <div className={styles.tableBody}>
                        {
                            thePayouts.map((pay, index) => {
                                return (
                                    <TableRow 
                                        key={index} pay={pay} currency={currency} exchangeRate={exchangeRate}
                                        convertToLocalCurrency={convertToLocalCurrency}
                                    />
                                    
                                )
                            })
                        }
                    </div>
                </div>
                <button className={styles.moreBtn} onClick={onMoreClick}>See more</button>
            </div>
        </div>
    );
}

export default PayoutTable;
