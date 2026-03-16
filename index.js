import debug from 'debug';
import chalk from 'chalk';

const log = debug('app:main');
log('Application starting...');

console.log(chalk.blue('Hello from chalk!'));
console.log(chalk.green.bold('Sample npm project'));
console.log(chalk.yellow('Using debug@4.4.3 and chalk@5.6.2'));

log('Run with DEBUG=* npm start to see debug output');
