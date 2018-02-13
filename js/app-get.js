$(function() {
  /* EJEMPLO CON HTML */
  $.get('example-get.html', function(data) {
    // console.log(data);
    $('#result').text(data);
  });
});
