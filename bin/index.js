#!/usr/bin/env node
const program = require('commander');
const pkg = require('../package.json');

const { version } = pkg;

program
  .version(version,'-v, --version')

program.on('command:*', function(){
  console.error('Invalid command: %s\nSee --help for a list of available commands.', program.args.join(' '));
  process.exit(1);
});

program.parse(process.argv);
