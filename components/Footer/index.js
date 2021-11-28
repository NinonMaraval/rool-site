import React from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { BiPhone } from 'react-icons/bi';
import { geTranslation } from '../../helpers';
// import useTranslation from 'next-translate/useTranslation';
import styles from './footer.module.scss';

const Footer = ({ traductions }) => {
  const t = (key) => geTranslation(traductions, key);
  return (
    <div className={styles.footer}>
      <div className="container">
        <h4>{t('footer.title')}</h4>
      </div>
      <div className={`container ${styles.container}`}>
        <div className={styles.contact}>
          <span><AiOutlineMail size="24px" /><p>{t('footer.email')}</p></span>
          <span><BiPhone size="24px" /><p>{t('footer.phone')}</p></span>
        </div>
        <a className={styles.button} href={`mailto:${t('footer.email')}`}>
          <button>{t('footer.send-email')}</button>
        </a>
      </div>
    </div>
  );
};

export default Footer;
