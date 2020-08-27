#!/usr/bin/env node

const program = require('commander');
const link = require('../commands/link')
const watch = require('../commands/watch')
const { version } = require('../package.json');

program
  .version(version,'-v, --version')

program
  .commands('link')
  .description('link package')
  .action(function({ args }) {
    link(args)
  });

program
  .command('watch')
  .description('watch your profile and run command')
  .action(function({ args }) {
    watch(args)
  });

program.on('command:*', function(){
  console.error('Invalid command: %s\nSee --help for a list of available commands.', program.args.join(' '));
  process.exit(1);
});

program.parse(process.argv);
