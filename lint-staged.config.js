/*!
 * this file for internal use only
 *
 * if you are looking for config file for lint-staged
 * see https://github.com/xwtec/dotfiles/lint-staged
 */

module.exports = {
  '*.{js,md,json}': ['prettier --write', 'git add'],
}
