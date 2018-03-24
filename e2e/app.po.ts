import { $$, browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  getHeadingText() {
    return element(by.css('app-root h2')).getText();
  }

  getNavbarElement(n) {
    return $$('app-root div a').get(n).getText();
  }

  getNavbarButton() {
    return $$('app-root button').get(0).getText();
  }
}
