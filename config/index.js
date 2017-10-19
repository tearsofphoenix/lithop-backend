module.exports = {
  secret: process.env.NODE_ENV === 'production' ? process.env.SECRET : 'secret',
  redis: {
    port: 6379,
    host: 'localhost'
  }
};
