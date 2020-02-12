// 配置node_modules中引用模块组件的按需加载
const { injectBabelPlugin } = require("react-app-rewired");

module.exports = function override(config, env) {
  // antd按需加载，使用哪个组件导入也会自动导入css
  config = injectBabelPlugin(
    ["import", { libraryName: "antd", libraryDirectory: "es", style: "css" }],
    config
  );

  // 添加装饰器能力
  config = injectBabelPlugin(
    ["@babel/plugin-proposal-decorators", { legacy: true }],
    config
  );

  return config;
};
