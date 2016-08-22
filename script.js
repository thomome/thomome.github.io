var consActive = false;

$(document).ready(function(){
  navigator.bluetooth.requestDevice({
    filters: [{
      services: ['battery_service']
    }]
  })
  .then(device => {
    cons('ok');
  })
  .catch(error => {
    cons(error);
  });
});

function cons(string){
  if(!consActive){
    $('body').append('<textarea id="cons"></textarea>');
    consActive = true;
  }
  $('#cons').val(string);
}
