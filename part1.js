$(document).ready(function() {
  console.log('Let’s get ready to party with jQuery!');
  $('article img').addClass('image-center');
  $('p').get(5).remove(); //or use $('article p:last-child').remove())
  $('#title').css('font-size', function() {
  return Math.floor(Math.random() * 100)
  })//no need to add a function. Can use Math.floor(Math.random() * 100 directly
  const li = $('.col-sm-4 ol');
  li.append('<li>Hi there!</li>');
  li.replaceWith('<p>Hi we don\'t want list, thx.</p>');
  let val1 = $('#red').val();
  let val2 = $('#blue').val();
  let val3 = $('#green').val();
  $("body").css("background-color", `rgb(${val1}, ${val2}, ${val3})`);
  $('img').on('click', function(){
    $(this).remove()
  });
});
