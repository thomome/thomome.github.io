var inp;
var hist;
var foc;

$(document).ready(function(){
  inp = $('.input-container input');
  hist = $('.history-container');
  foc = true;
  inp.focus();
  
  $(window).on('keypress', function(e){
    if(e.which === 13 && foc){
      var value = inp.val();
      inp.val('');
      
      messageUser(value);
      
      window.setTimeout(function(){
        messageBot(value);
      }, 1000);
    }
  });

  inp.on('focus', function(){
    foc = true;
  }).on('blur', function(){
    foc = false;
  });
});

function messageUser(value){
  hist.append('<div class="history-item-container"><div class="history-item user-item">' + value + '</div></div>');
  scrollBot();
}

function messageBot(value){
  var request = $.ajax({
    url: "https://api.api.ai/v1/query?query=" + value + "&v=20150910&sessionId=&lang=en",
    method: "GET",
    dataType: "json",
    beforeSend: function (xhr) {
      xhr.setRequestHeader ("Authorization", "Bearer ba85a6f76be6480698b089a1c20dd14b");
    }
  }).done(function(data){
    hist.append('<div class="history-item-container"><div class="history-item bot-item">' + data.result.fulfillment.speech + '</div></div>');
    scrollBot();
  });
  
}
function scrollBot(){
  hist.scrollTop(hist.scrollTop() + hist.height());
}





