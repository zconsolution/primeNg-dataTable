import { AngularQuickstartPage } from './app.po';

describe('angular-primeNg App', function() {
  let page: AngularQuickstartPage;

  beforeEach(() => {
    page = new AngularQuickstartPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
