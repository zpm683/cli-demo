module.exports = {
  GIT_URL: "",
  PROMPT_OPT: [
    {
      name: "action",
      type: "list",
      message: "目录已存在 请选择:",
      choices: [
        {
          name: " overwrite",
          value: "overwrite",
        },
        {
          name: "cancel",
          value: "cancel",
        },
      ],
    },
  ],
};
