'use strict';

const log4js = require('log4js');

log4js.configure({
  appenders: {
    stderr: { type: 'stderr' },
    stderrFilter: {
      type: 'logLevelFilter',
      appender: 'stderr',
      level: 'debug',
      maxLevel: 'error',
    },
  },
  categories: {
    default: {
      appenders: ['stderrFilter'],
      level: 'error',
    },
  },
});

const logger = log4js.getLogger('request-json-errorhandler');
logger.level = 'debug';

module.exports = logger;
