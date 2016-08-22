var consActive = false;

$(document).ready(function(){
  $('#startScan').on('click', function(){
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
});

function cons(string){
  if(!consActive){
    $('body').append('<textarea rows="10" cols="100" id="cons"></textarea>');
    consActive = true;
  }
  $('#cons').val(string);
}
