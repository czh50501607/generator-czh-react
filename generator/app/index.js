// 此文件作为核心 generator 的入口
// 导出需要继承自 generator 的类
// yeoman generator 会调用我们在此类型中声明的一些生命周期方法
// 我们在这些方法中调用一些父类提供的一些工具方法实现功能，比如文件写入

const Generator = require("yeoman-generator");

module.exports = class App extends Generator {
  prompting() {
    // yeoman 询问用户会自动调用该方法
    // 问题列表
    return this.prompt([
      {
        type: "input", // 输入方式
        name: "title", // 问题结果的key值
        message: "Your Project Name",
        default: this.appname, // 当前生成目录的名称
      },
    ]).then((answers) => {
      // answers { key: 'name key' value: result}
      this._answers = answers;
    });
  }
  writing() {
    // yeoman 生成文件时调用这个方法
    // 往目录里写入文件
    // this.fs.write(
    //     this.destinationPath('temp.txt'),
    //     Math.random().toString()
    // )

    // 通过模版导入文件
    // 模版文件路径
    const importPath = this.templatePath("./");
    // 输出目标路径
    const outputPath = this.destinationPath("./");
    // 模版数据上下文
    const context = { ...this._answers, success: true }; // { title: "hello czh", success: false };

    this.fs.copyTpl(importPath, outputPath, context);
  }
};
