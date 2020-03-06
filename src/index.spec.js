const isGerrie = require('./index');

describe('Gerrie', () => {
  it('knows if you are a Gerrie', () => {
    const shouldBeGerries = [
      'Skrunky',
      'skrunky',
      'Gerrie',
      'gerrie',
      'Gerry',
      'gerry',
      'Jerry',
      'jerry',
      'skrinkle',
      'Skrinkle',
    ];

    for(const gerrie of shouldBeGerries) {
      expect(isGerrie(gerrie)).toBeTruthy();
    }
  });

  it('Knowns if you are not a Gerrie', () => {
    const notGerries = [
      'Alex',
      'Karen',
    ];
    for(const notGerrie of notGerries) {
      expect(isGerrie(notGerrie)).toBeFalsy();
    }
  });
});
