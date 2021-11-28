import React, { useState, useEffect } from 'react';
import { debounce } from 'lodash';
import { useRouter } from 'next/router';
import Link from 'next/link';
import ToggleLanguage from '../ToggleLanguage';
import { geTranslation } from '../../helpers';
import styles from './header.module.scss';

const Header = ({ traductions, locale }) => {
  const t = (key) => geTranslation(traductions, key);
  const router = useRouter();
  const [section, setSection] = useState();
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    const handleRouteChange = () => setSection(null);
    router.events.on('beforeHistoryChange', handleRouteChange);

    function handleScroll() {
      const sections = document.querySelectorAll('section');
      let i = 0;
      const offset = window.innerWidth < 1250 ? 65 : 95;
      while (sections[i].getBoundingClientRect().bottom < offset) {
        i++;
      }
      console.log(sections[i].id);
      if (i > 0) setSection(sections[i].id);
      else { setSection(null); }
    }
    const debouncedScroll = debounce(handleScroll, 300);
    window.addEventListener('scroll', debouncedScroll);
    return () => window.removeEventListener('scroll', debouncedScroll);
  }, [router.events]);

  return (
    <div className={toggle ? `${styles.header} ${styles.open}` : styles.header}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <img
            style={{
              width: `96px`,
              height: `38px`,
            }}
            className={styles.imageFixed}
            src={'/images/logo-header.svg'}
            alt='logo rool'
          />
        </div>
        <div className={toggle ? `${styles.burger} ${styles.open}` : styles.burger} onClick={() => setToggle((state) => !state)}>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <span className={styles.button}>
          <a href={`mailto:${t('footer.email')}`}>
            <button>
              Nous contacter
            </button>
          </a>
          <ToggleLanguage locale={locale} />
        </span>
      </div>
      <ul>
        <li><Link href='#diagnostic'><a onClick={() => setToggle(false)} className={section === 'diagnostic' ? styles.actived : ''}>{t('header.diagnostic')}</a></Link></li>
        <li><Link href='#solution'><a onClick={() => setToggle(false)} className={section === 'solution' ? styles.actived : ''} >{t('header.solution')}</a></Link></li>
        <li><Link href='#how-it-works'><a onClick={() => setToggle(false)} className={section === 'how-it-works' ? styles.actived : ''} >{t('header.how-it-works')}</a></Link></li>
        <li><Link href='#clients'><a onClick={() => setToggle(false)} className={section === 'clients' ? styles.actived : ''} >{t('header.clients')}</a></Link></li>
        <li><Link href='#5-reasons'><a onClick={() => setToggle(false)} className={section === '5-reasons' ? styles.actived : ''} >{t('header.rool')}</a></Link></li>
        <li><Link href='#team'><a onClick={() => setToggle(false)} className={section === 'team' ? styles.actived : ''} >{t('header.team')}</a></Link></li>
        <li className={styles.contact}>
          <a className={styles.button} href={`mailto:${t('footer.email')}`}>
            <button>
              Nous contacter
            </button>
          </a>
          <ToggleLanguage locale={locale} />
        </li>
      </ul>
    </div>
  );
};

export default Header;
