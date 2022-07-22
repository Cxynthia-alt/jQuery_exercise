let movie;
let rating;
let movieLi;
$(document).ready(function(){
  let h1 = $('<h1>', {text:'Let\'s watch some movies!'});
  let form = $('<form id="movieForm">');
  let movieSection = '<lable for="movieTitle">Movies:</lable>' + '<input type="text" id="movieTitle">';
  let ratingSection = '<lable for="rating">Ratings:</lable>' + ' <input type="number" min="0" step="any" max="10" id="rating">';
  let btnSection = '<input id="button" type="submit" value="add a movie">';
  let result = '<section class="result">';

  form.append(createSection(movieSection), createSection(ratingSection), createSection(btnSection));
  $('body').append(h1, form, result);

  $('#button').click(function(evt){
    evt.preventDefault();
    movie = $('#movieTitle').val();
    rating = $('#rating').val();
    movieLi = $('<li>', {text: `${movie}:${rating}`})
      .append($('<button>').text('remove').attr("class", "removebutton"));
    $('.result').append(movieLi);
  });

  $('.result').click(function(e){
    //console.log(e.target.className);
    if(e.target.className === 'removebutton'){
      e.target.parentElement.remove();
    }
  });

});



let createSection = function(element){
  return $('<div>').attr('class', 'form-group').append(element);
}







/* <h1>Let's watch some movies!</h1>
<form id="movieForm">
  <div class="form-group">
    <lable for="movieTitle">Movies:</lable>
    <input type="text" id="movieTitle">
  </div>

  <div class="form-group">
    <lable for="rating">Ratings:</lable>
    <input type="number" min="0" step="any" max="10" id="rating">
  </div>

  <div class="form-group">
    <input id="button" type="submit" value="add a movie">
  </div>
</form>

<section class="result">
</section> */
