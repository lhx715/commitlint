export default {
    extends: ['@commitlint/config-conventional'],
    rules: {
      'type-enum': [
        2,
        'always',
        [
          'feat', // 新功能(feature)
          'fix', // 修补bug
          'docs', // 文档(documentation)
          'style', // 格式、样式(不影响代码运行的变动)
          'refactor', // 重构(即不是新增功能，也不是修改BUG的代码)
          'perf', // 优化相关，比如提升性能、体验
          'test', // 添加测试
        ]
      ]
    }
};
