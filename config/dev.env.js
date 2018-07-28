'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')
const dotenv = require('dotenv').config()

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  PORT : '4000',
  GOOGLE_MAP_KEY: JSON.stringify(process.env.GOOGLE_MAP_KEY),
  ELASTIC_INNERSEARCH_PASSWORD: JSON.stringify(process.env.ELASTIC_INNERSEARCH_PASSWORD)
})
