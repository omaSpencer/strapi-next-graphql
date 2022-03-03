module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'e3f20366f5920c22e8cb4cfda52ada7b'),
  },
});
