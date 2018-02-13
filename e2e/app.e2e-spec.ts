import { Lwt2Page } from './app.po';

describe('lwt2 App', () => {
  let page: Lwt2Page;

  beforeEach(() => {
    page = new Lwt2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
