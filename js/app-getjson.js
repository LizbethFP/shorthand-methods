$(function() {
  $('#execute').click(function() {
    alert('ahhh');
    $.getJSON('example-getjson.php', {
      name: 'Jacky',
      method: 'Get'
    }, function(data) {
      $.each(data, function(i, value) {
        console.log(i + ' ' + value);
      });
    });
  });
});
