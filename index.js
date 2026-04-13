import debug from "debug";
import chalk from "chalk";

const log = debug("app:main");
log("Application starting...");

console.log(chalk.blue("Hello from chalk!"));
console.log(chalk.green.bold("sample-yarn"));
console.log(chalk.yellow("Using debug@4.3.0 and chalk@5.2.0"));

log("Run with DEBUG=* yarn start to see debug output");
