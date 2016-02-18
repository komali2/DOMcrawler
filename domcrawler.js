var domcrawler = function(){
  var collection = [];

  collection = $('* img'.map(function(){
    return {id: $(this).id, src: $(this).prop('src')};
  }).get();


  return collection;
}
