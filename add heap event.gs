// function to add a single heap event
function updateHeapEvent(identity,date,event) {
  
  
  if (!identity || !date || !event) { 
   return "Missing Info";
    //identity = 'andrew.bialecki@klaviyo.com';
   // date = '4/21/2017';
    //event = 'Signed Up';
  }
  
  Logger.log(identity, date, event);
  
  var url = 'https://heapanalytics.com/api/track'
  var app_id = '91017801';
  
  var timestamp = new Date(date);
  timestamp = timestamp.toISOString();
  
  var headers = 
      {
        "Content-Type" : "application/json"
      };
  
  var payload = 
   {
    'app_id' : app_id,
    'events': [{
      "identity" : identity,
      "timestamp" : timestamp,
      "event" : event
    }]
    };
  
  var options = {
    'method': 'post',
    'headers': headers,
    'payload' : JSON.stringify(payload)
};
  
  var response = UrlFetchApp.fetch(url, options);

  return response.getContentText();
  
  
}