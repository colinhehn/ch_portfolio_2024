import React from 'react';
import Head from 'next/head';
import styles from './loading.module.css';

export default function Loading() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Loading...</title>
            </Head>
            <div className={styles.loader}>
                <div className={styles.spinner}></div>
                <p>Loading...</p>
            </div>
        </div>
    );
}