import { SexyDashPage } from './app.po';

describe('sexy-dash App', () => {
  let page: SexyDashPage;

  beforeEach(() => {
    page = new SexyDashPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
