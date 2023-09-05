const path = require("path");
const fs = require("fs");
const inquirer = require("inquirer");
const ora = require("ora");
const child = require("child_process");
const chalk = require("chalk");
const { PROMPT_OPT } = require("./config");

module.exports = async function create(name, options) {
  // 获取当前命令行所在目录
  const cwd = process.cwd();
  // 项目目录为 当前目录+项目名
  const project = path.join(cwd, name);

  // 判断目录是否存在
  if (fs.existsSync(project)) {
    if (options.force) {
      await fs.promises.rm(project, { force: true });
      return;
    }

    let action = await inquirer.prompt(PROMPT_OPT);

    if (!action) return;

    if (action.action === "overwrite") {
      await fs.promises.rm(project, { force: true });
      console.log(chalk.red("remove success"));
    }
  }

  inquirer
    .prompt({
      name: "temp",
      type: "list",
      choices: ["react", "electron"],
      message: "select a template:",
    })
    .then(({ temp }) => {
      const loadingOra = ora("wating fetch template...");
      loadingOra.start();
      child.exec(
        `git clone https://github.com/zpm683/react-template-next`,
        (err) => {
          if (!err) {
            loadingOra.succeed("succeed!!!");
          }
        },
      );
    });
};
