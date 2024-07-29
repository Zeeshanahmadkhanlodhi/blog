import React from 'react';
import Pagination from '../pagination/pagination';
import styles from "./cardList.module.css";

const CardList = () => {
  return (
    <div className={styles.container}>
      <Pagination />
    </div>
  )
}

export default CardList;
