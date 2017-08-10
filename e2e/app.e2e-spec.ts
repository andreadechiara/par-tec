import { ExporAngular2Page } from './app.po';

describe('expor-angular2 App', function() {
  let page: ExporAngular2Page;

  beforeEach(() => {
    page = new ExporAngular2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
