/**
 * Author : Jaideep Nirmal A J
 */
function sendMails() {
    var sheet = SpreadsheetApp.getActiveSheet();
    // var address = sheet.getRange('A1').getValue();
    // const column = "B";
    var n_entries = sheet.getLastRow();
    for (var i = 2; i <=n_entries; i++) {
      // let currentCell = column + i;
      let emailID = sheet.getRange("A" + i).getValue();
      let subject = sheet.getRange("B" + i).getValue();
      let content = sheet.getRange("C" + i).getValue();
      GmailApp.sendEmail(emailID, subject, content);
    }
  }
  
  function onOpen(e) {
    SpreadsheetApp.getUi()
    .createMenu('Send all mails')
    .addItem('Send', 'sendMap')
    .addToUi()
  }