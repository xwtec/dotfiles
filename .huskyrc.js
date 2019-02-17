// DON'T USE THIS CONFIG
// see https://github.com/xwtec/dotfiles/husky

module.exports = {
  hooks: {
    'commit-msg': 'commitlint -E HUSKY_GIT_PARAMS',
    'pre-commit': 'lint-staged',
  },
}
