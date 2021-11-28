import React from 'react';
import Flag from 'react-flagkit';
import Link from 'next/link';
import styles from './toggle-language.module.scss';

const ToggleLanguage = ({ locale }) => {
  const locales = ['fr', 'en'];
  return (
    <div className={styles.toggle}>
      {locales.map((lng, i) => (
        <React.Fragment key={`lang-${i}`}>
          {locale === lng
            ? null
            : (
              <Link href={`/${lng}`} key={lng} className={styles.lang}>
                 <a><Flag country={locale === 'en' ? 'FR' : 'GB'} /></a>
              </Link>
            )
          }
        </React.Fragment>
      ))}
    </div>
  );
};

export default ToggleLanguage;
