exports.errBob = function(string){
  var vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
  var punc = [',', '?', '!', '.'];
  var array = string.split(' ');
  for(i=0; i<array.length; i++) {
    if (punc.indexOf(array[i].slice(-1)) > -1) {
      var item = array[i];
      array[i] = item.slice(0, item.length-1) + 'err' + item.slice(item.length-1);
    }
  }
  console.log(array);
};
