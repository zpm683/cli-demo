const commander = require("commander");
const figlet = require("figlet");
const chalk = require("chalk");

const { version } = require("./package.json");

commander
  .command("create <app-name>")
  .description("创建项目 如果目录存在则覆盖")
  .option("-f, --force", "如果目录存在则覆盖")
  .action(create);

commander.version(`v${version}`);

commander.on("--help", () => {
  // 在命令行中使用 figlet 绘制 Logo
  console.log("\r\n" + figlet.textSync("RTN-CLI"));
  // 新增说明信息
  console.log(`\r\nRun ${chalk.cyan(`rtn <command> --help`)} show details\r\n`);
});

commander.parse(process.argv);
