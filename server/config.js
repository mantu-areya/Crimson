// TODO: We'll run in production on port 80 for now, but want to move to HTTPS later (standard port is 443).


const development = {
  app: {
    port: 80,
    domain: 'localhost',
  },
};

const qa = {
  app: {
    port: 80,
    domain: 'boldstreetqa.net',
  },
};

const production = {
  app: {
    port: 80,
    domain: 'app.boldstreet.ai',
  },
};

const config = {
  development,
  qa,
  production,
};

module.exports = config[env];
