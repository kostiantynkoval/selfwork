import { SelfworkPage } from './app.po';

describe('selfwork App', () => {
  let page: SelfworkPage;

  beforeEach(() => {
    page = new SelfworkPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
