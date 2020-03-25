function postToSlack() {
  var webhookUrl = 'https://hooks.slack.com/services/XXXXXX/YYYYYYY';
  var googleSheetId = "1zkBxS2tBoBmStbwb09kOvwIFyeBq0rnJhEzMIi9mz_A"
  var namedRange = "cta";
  var sheets = SpreadsheetApp.openById(googleSheetId);
  var CTA = sheets.getRangeByName(namedRange).getValues();
  var one = CTA[0];
  var two = CTA[1];
  var three = CTA[2]; 
  var payload = {
    'channel' : '#slackbot-test',
    'username' : 'My Test Slackbot',
    'text' : ':eyes: Looking for a way to contribute? Check out these opportunities:',
    'attachments': [{
      'text': ' ' + one + '\n\r ' + two + '\n\r ' + three,
      'footer': 'Bot created by Phil Morehead',
      'mrkdwn_in': ['text']
    }]
  }
 
  var options = {
    'method' : 'post',
    'contentType' : 'application/json',
    'payload' : JSON.stringify(payload)
  };
 
  return UrlFetchApp.fetch(webhookUrl, options)
}
