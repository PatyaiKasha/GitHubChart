import { GitHubCharstPage } from './app.po';

describe('git-hub-charst App', function() {
  let page: GitHubCharstPage;

  beforeEach(() => {
    page = new GitHubCharstPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
