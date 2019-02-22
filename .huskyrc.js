/*!
 * this file for internal use only
 *
 * if you are looking for config file for husky
 * see https://github.com/xwtec/dotfiles/husky
 */

module.exports = {
  hooks: {
    'commit-msg': 'commitlint -E HUSKY_GIT_PARAMS',
    'pre-commit': 'lint-staged',
  },
}
