$(document).on('ready', function() {
  alert('ahhh');
  debugger;
  $.getScript('http://gsgd.co.uk/sandbox/jquery/easing/jquery.easing.1.3.j', function() {
    console.log('Terminó');
    $('#example').slideUp(3000, 'easeOutBounce');
  });
});
