function deleteOrder()
{
  //Connect to BitBar device "Apple iPhone 14 Pro Max A2651 16.2 -US".
  Mobile.ConnectDevice("https://appium-us.bitbar.com/wd/hub/", "{\"automationName\":\"XCUITest\",\"bitbar_app\":\"158791517\",\"bitbar_device\":\"Apple iPhone 14 Pro Max A2651 16.2 -US\",\"bitbar_findDevice\":false,\"bitbar_target\":\"ios\",\"deviceName\":\"Apple iPhone 14 Pro Max A2651 16.2 -US\",\"platformName\":\"IOS\"}", 600);
  //Simulates a touch on the view.
  Aliases.Device.processSmartBearQAAppsOrders.navigationBarOrders.buttonEdit.Touch();
  //Simulates a touch on the view.
  Aliases.Device.processSmartBearQAAppsOrders.table.buttonDeleteGabe16MyMoney20230215.Touch();
  //Simulates a touch on the view.
  Aliases.Device.processSmartBearQAAppsOrders.table.buttonDelete.Touch();
}