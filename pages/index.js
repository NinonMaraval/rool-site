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

export async function getStaticProps() {
  let json = {};
  try {
    // eslint-disable-next-line
    json = require(`../locales/fr/home.json`);
  } catch {
    // eslint-disable-next-line no-console
    console.log('error getting details for lists');
  }

  return {
    props: {
      locale: 'fr',
      traductions: json,
      teams: json?.teams ? json.teams : [],
      clients: json?.clients ? json.clients : [],
      reasons: json?.reasons ? json.reasons : [],
      howitworks: json?.howitworks ? json?.howitworks : [],
    },
  };
}
