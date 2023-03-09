function contactUSData()
{
  //Launches the specified browser and opens the specified URL in it.
  Browsers.Item(btChrome).Run("https://bearstore-testsite.smartbear.com/");
  Aliases.browser.BrowserWindow.Maximize();
  Project.Variables.excelData.Reset();
  var RecordIdx;
  for(RecordIdx = 1; RecordIdx <= 3; RecordIdx++)
  {
    //Clicks the 'linkContactUs' link.
    Aliases.browser.pageShop.header.navUsd.navContactUs.linkContactUs.Click();
    //Waits until the browser loads the page and is ready to accept user input.
    Aliases.browser.pageContactus.Wait();
    //Clicks the 'textboxYourName' control.
    Aliases.browser.pageContactus.sectionContent.formYourName.textboxYourName.Click();
    //Sets the text KeywordTests.Test2.Variables.excelData("Name") in the 'textboxYourName' text editor.
    Aliases.browser.pageContactus.sectionContent.formYourName.textboxYourName.SetText(Project.Variables.excelData.Value("Name"));
    //Clicks the 'emailinputYourEmail' control.
    Aliases.browser.pageContactus.sectionContent.formYourName.emailinputYourEmail.Click();
    //Sets the text KeywordTests.Test2.Variables.excelData("Email") in the 'emailinputYourEmail' text editor.
    Aliases.browser.pageContactus.sectionContent.formYourName.emailinputYourEmail.SetText(Project.Variables.excelData.Value("Email"));
    //Clicks the 'textareaEnquiry' control.
    Aliases.browser.pageContactus.sectionContent.formYourName.textareaEnquiry.Click();
    //Enters KeywordTests.Test2.Variables.excelData("Enquiry") in the 'textareaEnquiry' object.
    Aliases.browser.pageContactus.sectionContent.formYourName.textareaEnquiry.Keys(Project.Variables.excelData.Value("Enquiry"));
    //Clicks the 'buttonSendEmail' button.
    Aliases.browser.pageContactus.sectionContent.formYourName.buttonSendEmail.ClickButton();
    Project.Variables.excelData.Next();
  }
}