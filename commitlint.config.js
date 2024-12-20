export default {
    extends: ['@commitlint/config-conventional'],
    rules: {
        'type-enum': [2, 'always', ['feat', 'fix', 'style','refactor','test']],
        'type-case': [2, 'always', 'lower-case'],
        'type-min-length': [2, 'always', 3],
        'type-max-length': [2, 'always', 20],
        'subject-full-stop': [2, 'never', '.'], //主题不能以.结尾
        'scope-empty': [1, 'never'], //scope 不能为空
        'scope-enum': [2, 'always', ['components', 'directives', 'filters', 'store', 'utils', 'views','config']],
    },
    prompts:  {
        message: {
            type: 'input',
            message: '请输入commit信息',
            default: 'feat: 添加一个新功能',
            validate: (value) => {
                const pass = value.match(/^(feat|fix|docs|style|refactor|test|chore):\s+[a-zA-Z0-9\u4e00-\u9fa5]+$/);
                if (pass) {
                    return true;
                }
                return 'commit信息格式不正确，请输入正确的格式，如：feat: 添加一个新功能';
            }
        }
    }
};
