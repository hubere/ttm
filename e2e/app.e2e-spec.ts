import { TtmAppPage } from './app.po';

describe('ttm-app App', function() {
  let page: TtmAppPage;

  beforeEach(() => {
    page = new TtmAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
