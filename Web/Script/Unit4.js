function contactUsFlow()
{
  //Opens the specified URL in a running instance of the specified browser.
  //Browsers.Item(btChrome).Navigate("https://bearstore-testsite.smartbear.com/");
  //Maximizes the specified Window object.
  //Aliases.browser.BrowserWindow.Maximize();
  //Clicks the 'linkContactUs' link.
  Aliases.browser.pageShop.header.navUsd.navContactUs.linkContactUs.Click();
  //Waits until the browser loads the page and is ready to accept user input.
  Aliases.browser.pageContactus.Wait();
  //Clicks the 'textareaEnquiry' control.
  Aliases.browser.pageContactus.sectionContent.formYourName.textareaEnquiry.Click();
  //Enters 'where is my order?' in the 'textareaEnquiry' object.
  Aliases.browser.pageContactus.sectionContent.formYourName.textareaEnquiry.Keys("where is my order?");
  //Clicks the 'buttonSendEmail' button.
  Aliases.browser.pageContactus.sectionContent.formYourName.buttonSendEmail.ClickButton();
}