// DON'T USE THIS CONFIG
// see https://github.com/xwtec/dotfiles/lint-staged

module.exports = {
  '*.{js,md,json}': ['prettier --write', 'git add'],
}
