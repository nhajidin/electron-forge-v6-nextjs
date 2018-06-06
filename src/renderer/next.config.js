const withTypescript = require('@zeit/next-typescript');

module.exports = withTypescript({
  webpack: config =>
    Object.assign(config, {
      target: 'electron-renderer',
    }),
  exportPathMap: () => ({
    '/start': { page: '/start' },
  }),
});
