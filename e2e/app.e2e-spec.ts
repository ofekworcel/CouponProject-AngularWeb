import { CouponsAngularWebPage } from './app.po';

describe('coupons-angular-web App', () => {
  let page: CouponsAngularWebPage;

  beforeEach(() => {
    page = new CouponsAngularWebPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
