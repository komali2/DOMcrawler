var domcrawler = function(){
  var collection = [];

  collection = $('img').map(function(){
    return $(this).prop('src');
  }).get();


  return collection;
}
