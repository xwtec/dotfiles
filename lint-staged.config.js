// DON'T USE THIS CONFIG
// see https://github.com/xwtec/dotfiles/lint-staged

module.exports = {
  '*.{js,md}': ['prettier --write', 'git add'],
}
