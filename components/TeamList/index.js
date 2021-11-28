import React from 'react';
import { AiFillLinkedin } from 'react-icons/ai';
import styles from './teamlist.module.scss';

function TeamList({
  image,
  name,
  title,
  content,
  className,
  linkedin,
}) {
  return (
    <div className={`${styles.container}${className ? ` ${className}` : ''}`}>
      <div className={styles.image}>
        {image && (
          <img
            style={{
              width: '155px',
              height: '190px',
            }}
            className={styles.imageFixed}
            src={image}
            alt='profile-picture'
          />
        )}
      </div>
      <div className={styles.content}>
        <h1>{name}</h1>
        <h2>{title}</h2>
        <p>{content}</p>
        {linkedin && <a rel="noopener noreferrer" href={linkedin} target='_blank'><AiFillLinkedin color="#FFFFFF" size="30px" /></a>}
      </div>
    </div>
  );
}

export default TeamList;
