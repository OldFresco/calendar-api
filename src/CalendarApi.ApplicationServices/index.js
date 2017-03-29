if (process.env.NODE_ENV === 'production') {
  module.exports = require('./correspondent.prod')
} else {
  module.exports = require('./correspondent.dev')
}