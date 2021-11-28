import React from 'react';
import Home from '../templates/home';

const PageHome = ({
  locale,
  clients,
  reasons,
  teams,
  howitworks,
  traductions,
}) => (
  <Home
    traductions={traductions}
    locale={locale}
    clients={clients}
    reasons={reasons}
    teams={teams}
    howitworks={howitworks}
  />
);

export default PageHome;

export async function getStaticPaths() {
  return {
    paths: [
      { params: { lang: 'fr' } },
      { params: { lang: 'en' } },
    ],
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  let json = {};
  const locale = params.lang ? params.lang : 'fr';
  try {
    // eslint-disable-next-line
    json = require(`../locales/${locale}/home.json`);
  } catch {
    // eslint-disable-next-line no-console
    console.log('error getting details for lists');
  }

  return {
    props: {
      locale,
      traductions: json,
      teams: json?.teams ? json.teams : [],
      clients: json?.clients ? json.clients : [],
      reasons: json?.reasons ? json.reasons : [],
      howitworks: json?.howitworks ? json?.howitworks : [],
    },
  };
}
