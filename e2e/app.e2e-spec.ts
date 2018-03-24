import { browser } from 'protractor';
import { AppPage } from './app.po';

describe('example-studios App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display header message', () => {
    page.navigateTo();
    expect(page.getHeadingText()).toEqual('The Black Lab');
  });

  it('should display the expanded navbar for high resolutions', () => {
    browser.manage().window().setSize(1024, 768);
    page.navigateTo();
    expect(page.getNavbarElement(0)).toEqual('Home');
    expect(page.getNavbarElement(1)).toEqual('About');
    expect(page.getNavbarElement(2)).toEqual('Adventures');
    expect(page.getNavbarElement(3)).toEqual('Contact');
    expect(page.getNavbarButton()).toBeFalsy();
  });

  it('should display the collapsed navbar for low resolutions', () => {
    browser.manage().window().setSize(640, 480);
    page.navigateTo();
    expect(page.getNavbarButton()).toEqual('');
  });
});
