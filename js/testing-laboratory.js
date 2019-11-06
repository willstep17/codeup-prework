function hasVowels(str1) {
  var vowelList = 'aeiouAEIOU';

  for(var i=0;i<str1.length;i++) {
  	console.log(str1[i]);
    console.log(vowelList.indexOf(str1[i]));
    if(vowelList.indexOf(str1[i]) !== -1) {
      return true;
    }
  }
  return false;
}

hasVowels('chakin');