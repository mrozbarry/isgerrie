const gerries = [
  /[Ss]krunky/,
  /[Gg]err(ie|y)/,
  /[Jj]erry/,
];

const isGerrie = (input) => gerries.some(gerrie => gerrie.test(input));

module.exports = isGerrie;
