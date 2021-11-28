import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import VisibilitySensor from 'react-visibility-sensor';
import { animated, useSpring, to } from 'react-spring';
import { scaleLinear } from 'd3-scale';
import { geTranslation } from '../../helpers';
import styles from './home.module.scss';
import Header from '../../components/Header';
import Trans from '../../components/Trans';
import Footer from '../../components/Footer';
import Title from '../../components/Title';
import ItemList from '../../components/ItemList';
import TeamList from '../../components/TeamList';

const ComponentDiv = (props) => <div {...props} />;
const ComponentP = (props) => <p {...props} />;

const Home = ({
  locale = 'fr',
  clients,
  reasons,
  teams,
  howitworks,
  traductions,
}) => {
  const t = (key) => geTranslation(traductions, key);
  const [highlightFirstPourcentage, setHighlightFirstPourcentage] = useState(false);
  const [highlightSecondPourcentage, setHighlightSecondPourcentage] = useState(false);
  const [isHowItsWorkVisible, setIsHowItsWorkVisible] = useState([false, false, false, false, false]);

  const [{ y }, api] = useSpring(() => (
    {
      to: { y: 0 },
      config: { friction: 26 },
      immediate: true,
    }));

  useEffect(() => {
    const container = document.getElementById('__next');
    const limit = container.scrollHeight - window.innerHeight;
    function handleScroll() {
      const scale = scaleLinear()
        .domain([0, limit])
        .range([-100, 100]);
      api.start({ y: Math.round(scale(window.scrollY)) });
    }
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <Head>
        <title>{t('page-title')}</title>
        <link rel="shortcut icon" href="/images/favicon.png" />
        <meta name="description" content={t('meta-description')} />
      </Head>
      <Header traductions={traductions} locale={locale} />
      <section className={styles.intro} id='intro'>
        <div className={styles['intro-content']}>
          <img
            src={'/images/motif_rool.png'}
            alt='tire-img'
            className={styles.imageFill}
          />
          <div className={styles.logo}>
            <img
              src={'/images/logo.svg'}
              alt='logo'
              className={styles.imageResponsiv}
            />
          </div>
          <h1>{t('title')}</h1>
          <p>{t('text')}</p>
        </div>
        <Link href="#context">
          <a className={styles['scroll-arrow']}>
            <img
              src={'/images/dots-arrow.svg'}
              alt='tire-img'
              className={styles.imageResponsiv}
            />
          </a>
        </Link>
      </section>
      <section id='diagnostic' className={styles['section-diagnostic']}>
        <div className='container'>
          <Title title={t('header.diagnostic')} className={styles.title} />
        </div>
        <div className={styles.diagnostic}>
          <div className={styles.image}>
            <img
              src={'/images/tire.jpg'}
              alt='tire-img'
              className={styles.imageResponsiv}
            />
          </div>
          <ul>
            <li className={styles.manufacturiers}>
              <p>
                <VisibilitySensor offset={{ top: 110, bottom: 110 }} onChange={(isVisible) => setHighlightFirstPourcentage(isVisible)}>
                  <div className={highlightFirstPourcentage ? `${styles.pourcentage} ${styles.actived}` : styles.pourcentage}>70%</div>
                </VisibilitySensor>
                <Trans
                  fnTranslate={t}
                  transKey='diagnostic.0.content'
                  components={[
                    <ComponentDiv key='diagnostic.0.content' />,
                    <span key='underline' className={styles.underline} />,
                  ]}
                />
              </p>
              <p className={styles.source}>{t('diagnostic.0.source')} </p>
            </li>
            <li className={styles.analysts}>
              <Trans
                fnTranslate={t}
                transKey='diagnostic.1.content'
                components={[
                  <ComponentP key='diagnostic.1.content' />,
                  <span key='underline' className={styles.underline} />,
                ]}
              />
              <p className={styles.source}>{t('diagnostic.1.source')} </p>
            </li>
            <li className={highlightSecondPourcentage ? `${styles.shoppers} ${styles.actived}` : styles.shoppers}>
              <VisibilitySensor offset={{ top: 110, bottom: 110 }} onChange={(isVisible) => setHighlightSecondPourcentage(isVisible)}>
                <Trans
                  fnTranslate={t}
                  transKey='diagnostic.2.content'
                  components={[
                    <ComponentP key='diagnostic.2.content' />,
                    <span key='underline' className={styles.underline} />,
                    <span key='pourcentage' className={styles.pourcentage} />,
                  ]}
                />
              </VisibilitySensor>
              <p className={styles.source}>{t('diagnostic.2.source')}</p>
            </li>
          </ul>
        </div>
      </section>
      <section id='solution' className={styles['section-solution']}>
        <animated.div className={styles['dots-arrow']}
          style={{
            transform: to([y], (y) => `scale(0.7) translate(23px, ${y}%)`)
          }}
        >
          <img
            style={{
              maxWidth: '93px',
              maxHeight: '162px',
            }}
            className={styles.imageFixed}
            src={'/images/dots-arrow2.svg'}
            alt='dot arrow'
          />
        </animated.div>
        <div className='container'>
          <Title title={t('header.solution')} className={styles.title} />
          <div className={styles.subtitle}>
            <p>{t('solution.0.title')}</p>
          </div>

          <ul className={styles.solution}>
            <li>
              <div className={styles.circle}>
                <img src={'/images/detection.svg'} alt='logo-detection' />
              </div>
              <div className={styles['content-text']}>
                <p className={styles['solution-title']}>
                  {t('solution.1.title')}
                </p>
                <p>{t('solution.1.subtitle')}</p>
              </div>
            </li>
            <li>
              <div className={styles.circle}>
                <img src={'/images/parcours.svg'} alt='logo-parcours' />
              </div>
              <div className={styles['content-text']}>
                <p className={styles['solution-title']}>
                  {t('solution.2.title')}
                </p>
                <p>{t('solution.2.subtitle')}</p>
              </div>
            </li>
            <li>
              <div className={styles.circle}>
                <img src={'/images/maintenance.svg'} alt='logo-maintenance' />
              </div>
              <div className={styles['content-text']}><p className={styles['solution-title']}>
                {t('solution.3.title')}
              </p>
                <p>{t('solution.3.subtitle')}</p></div>
            </li>
          </ul>
        </div>
      </section>
      <section id='how-it-works' className={styles['section-howitworks']}>
        <animated.div className={styles.hexagone}
          style={{
            transform: to([y], (y) => `translateY(${y}%)`)
          }}
        >
          <img
            style={{
              width: '93px',
              height: '162px',
            }}
            className={styles.imageFixed}
            src={'/images/hexagone.svg'}
            alt='hexagone'
          />
        </animated.div>
        <div className={`container ${styles.container}`}>
          <div className={styles['howitworks-list']}>
            <Title title={t('header.how-it-works')} className={styles.title} />
            <div className={styles.mobiles}>
              <div>
                <img
                  src={'/images/mobiles.png'}
                  alt='application mobile'
                  className={styles.imageResponsiv}
                />
              </div>
            </div>
            <ul className={isHowItsWorkVisible ? styles.actived : null}>
              {howitworks.map((d, i) => (
                <li key={`howitworks-${i}`} className={isHowItsWorkVisible[i] ? styles.actived : null}>
                  <VisibilitySensor
                    offset={{ top: 110, bottom: 10 }}
                    onChange={(isVisible) => setIsHowItsWorkVisible((state) => {
                      let updatedState = [...state];
                      updatedState.splice(i, 1, isVisible);
                      return updatedState;
                    })}
                  >
                    <div>
                      <h4>{d.title}</h4>
                      <p>{d.text}</p>
                    </div>
                  </VisibilitySensor>
                </li>
              ))}
            </ul>
          </div>
          <div className={styles['container-mobiles']}>
            <div className={styles.mobiles}>
              <img
                src={'/images/mobiles.png'}
                alt='application mobile'
                className={styles.imageFill}
              />
            </div>
          </div>
        </div>
      </section>
      <section id='clients' className={styles['section-client']}>
        <div className='container'>
          <Title title={t('header.clients')} />
          <ul className={styles.list}>
            {clients.map((client, i) => (
              <li key={`client-${i}`}>
                <ItemList
                  image={client.image}
                  size={{ width: 45, height: 45 }}
                  text={client.text}
                  subtitle={client.subtitle}
                  greyCircle={clients.length === i + 1}
                />
              </li>
            ))}
          </ul>
        </div>
      </section>
      <section id='5-reasons' className={styles['section-reason']}>
        <animated.div className={styles['dots-arrow']}
          style={{
            transform: to([y], (y) => `rotate(180deg) scale(0.7) translate(23px ,${-y}%)`)
          }}
        >
          <img
            style={{
              maxWidth: '93px',
              maxHeight: '162px',
            }}
            className={styles.imageFixed}
            src={'/images/dots-arrow2.svg'}
            alt='dot arrow'
          />
        </animated.div>
        <div className='container'>
          <Title title={t('title-reasons')} />
          <ul className={styles.reasons}>
            {reasons.map((reason, i) => (
              <li key={`reason-${i}`}>
                <div className={styles['item-reason']}>
                  <div className={styles.number}>
                    {i + 1}
                  </div>
                  <div>
                    <p><span>{reason.title}</span>{reason.text}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <section id='team' className={styles['section-team']}>
        <animated.div className={styles.square}
          style={{
            transform: to([y], (y) => `scale(0.8) translate(23px, ${y}%)`)
          }}
        >
          <img
             style={{
              maxWidth: '144px',
              maxHeight: '144px',
            }}
            className={styles.imageFixed}
            src={'/images/square.svg'}
            alt='square'
          />
        </animated.div>
        <div className='container'>
          <Title title={t('header.team')} />
          <ul className={styles.team}>
            {teams.map((team, i) => (
              <li key={`team-${i}`}>
                <TeamList
                  image={`/images/${team.image}`}
                  name={team.name}
                  title={team.title}
                  content={team.content}
                  linkedin={team.linkedin}
                />
              </li>
            ))}
            <li>
              <div className={styles.partners}>
                <p>{t('team-partner')}</p>
                <div className={styles.logo}>
                  <a
                    href='https://fr.ippon.tech/'
                    rel="noopener noreferrer"
                    target='_blank'
                  >
                    <img
                      style={{
                        maxWidth: '173px',
                        maxHeight: '173px',
                      }}
                      className={styles.imageFixed}
                      src={'/images/ippon.png'}
                      alt='partenaire-ippon'
                    />
                  </a>
                  <a
                    href='https://www.lizeo-group.com/fr '
                    rel="noopener noreferrer"
                    target='_blank'
                  >
                    <img
                      style={{
                        maxWidth: '160px',
                        maxHeight: '64px',
                      }}
                      className={styles.imageFixed}
                      src={'/images/lizeo.jpg'}
                      alt='partenaire-lizeo'
                    />
                  </a>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </section>
      <Footer traductions={traductions} />
    </>
  );
};

export default Home;
