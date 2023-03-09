function Test1()
{
  //Launches the specified virtual browser and opens the specified URL in it.
  //VirtualBrowsers.Item("Apple iPhone X").Run("https://bearstore-testsite.smartbear.com/");
  //Opens the specified URL in a running instance of the specified browser.
  //Browsers.Item(btChrome).Navigate("https://bearstore-testsite.smartbear.com/");
  Browsers.RemoteItem("https://us-west-desktop-hub.bitbar.com/wd/hub", "{\"bitbar_device\":\"Samsung Galaxy S22 Ultra SM-S908U1 -US\",\"deviceName\":\"Samsung Galaxy S22 Ultra SM-S908U1 -US\",\"platformName\":\"Android\",\"bitbar_findDevice\":\"true\",\"automationName\":\"UiAutomator2\",\"browserName\":\"Chrome\"}").Run("https://bearstore-testsite.smartbear.com/");
  //Aliases.browser.BrowserWindow.Position(0, 0, 516, 900);
  //Clicks the 'textnode2' control.
  Aliases.browser.pageShop.header.linkLogIn2.textnode2.Click();
  //Waits until the browser loads the page and is ready to accept user input.
  Aliases.browser.pageLogin.Wait();
  //Clicks the 'username' control.
  Aliases.browser.pageLogin.sectionContent.username.Click();
  //Sets the text 'gabedemo' in the 'username' text editor.
  Aliases.browser.pageLogin.sectionContent.username.SetText("gabedemo");
  //Clicks the 'passwordboxPassword' control.
  Aliases.browser.pageLogin.sectionContent.passwordboxPassword.Click();
  //Sets the text Project.Variables.Password1 in the 'passwordboxPassword' text editor.
  Aliases.browser.pageLogin.sectionContent.passwordboxPassword.SetText(Project.Variables.Password1);
  //Clicks the 'buttonLogIn' button.
  Aliases.browser.pageLogin.sectionContent.buttonLogIn.ClickButton();
}