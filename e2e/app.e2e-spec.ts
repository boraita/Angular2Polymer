import { AngularPolymerPage } from './app.po';

describe('angular-polymer App', function() {
  let page: AngularPolymerPage;

  beforeEach(() => {
    page = new AngularPolymerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
