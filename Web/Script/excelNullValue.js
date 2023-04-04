function Test1()
{
  //Launches the specified browser and opens the specified URL in it.
  Browsers.Item(btChrome).Run("https://bearstore-testsite.smartbear.com/");
  Project.Variables.Var11.Reset();
  var RecordIdx;
  for(RecordIdx = 1; RecordIdx <= 3; RecordIdx++)
  {
    //Maximizes the specified Window object.
    Aliases.browser.BrowserWindow.Maximize();
    //Clicks the 'linkContactUs' link.
    Aliases.browser.pageShop.header.navUsd.navContactUs.linkContactUs.Click();
    //Waits until the browser loads the page and is ready to accept user input.
    Aliases.browser.pageContactus.Wait();
    //Sets the text KeywordTests.Test1.Variables.Var1("Name") in the 'textboxYourName' text editor.
    Aliases.browser.pageContactus.sectionContent.formYourName.textboxYourName.SetText(Project.Variables.Var11.Value("Name"));
    //Sets the text KeywordTests.Test1.Variables.Var1("Email") in the 'emailinputYourEmail' text editor.
    Aliases.browser.pageContactus.sectionContent.formYourName.emailinputYourEmail.SetText(Project.Variables.Var11.Value("Email"));
    //Enters KeywordTests.Test1.Variables.Var1("Enquiry") in the 'textareaEnquiry' object.
    Aliases.browser.pageContactus.sectionContent.formYourName.textareaEnquiry.Keys(Project.Variables.Var11.Value("Enquiry"));
    //Clicks the 'buttonSendEmail' button.
    Aliases.browser.pageContactus.sectionContent.formYourName.buttonSendEmail.ClickButton();
    Project.Variables.Var11.Next();
  }
}