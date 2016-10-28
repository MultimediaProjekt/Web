import { MultimediaPage } from './app.po';

describe('multimedia App', function() {
  let page: MultimediaPage;

  beforeEach(() => {
    page = new MultimediaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
