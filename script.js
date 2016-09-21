var inp;
var hist;
var foc;
var index = 0;

$(document).ready(function(){
  inp = $('.input-container input');
  hist = $('.history-container');
  foc = false;
  inp.focus();
  
  $(window).on('keypress', function(e){
    if(e.which === 13 && foc){
      var value = inp.val();
      inp.val('');
      
      messageUser(value);
      
      window.setTimeout(function(){
        messageBot();
      }, 1000)
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
}

function messageBot(){
  $.getJSON('data.json', function(data){
    hist.append('<div class="history-item-container"><div class="history-item bot-item">' + data.conversation[index].response + '</div></div>');
    index++;
  });
  
}





