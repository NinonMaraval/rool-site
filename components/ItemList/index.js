import React from 'react';
import styles from './itemlist.module.scss';

function ItemList({
  image,
  text,
  subtitle,
  className,
  greyCircle = false,
  size = {
    width: 30,
    height: 30,
  },
}) {
  return (
    <div className={`${styles.container}${className ? ` ${className}` : ''}`}>
      <div className={greyCircle ? `${styles.circle} ${styles.grey}` : styles.circle}>
        {image && (
          <img
          style={{
            width: `${size.width}px`,
            height: `${size.height}px`,
          }}
          className={styles.imageFixed}
          src={`/images/${image}`}
          alt='bulle'
        />
        )}
      </div>
      <div>
        {subtitle && <h4>{subtitle}</h4>}
        <p>{text}</p>
      </div>
    </div>
  );
}

export default ItemList;
