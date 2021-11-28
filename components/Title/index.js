import React from 'react';
import styles from './Title.module.scss';

function Title({ title, className }) {
  return (
    <div className={`${styles['container-title']}${className ? ` ${className}` : ''}`}>
      <h2 className={styles.title}>{title}</h2>
    </div>
  );
}

export default Title;
