var words = ["acquiesce", "ambiguity", "anachronism","andragogy","benchmarking","brainstorming","circumspect" ,"dialect","epiphany","incongruous","mentor","oxymoron","paradox",
"plagiarism","reflection","satire","vernacular","vocational"];

var getRandom = function() {
  var maxIndex = 17;
  var minIndex = 0;
  var randomIndex = Math.floor(Math.random() * (maxIndex - minIndex + 1));
  var chosenWord = words[randomIndex];
  return chosenWord;
};

var letterArray = function(chosenWord) {
  var letters = [];
  for (var i = 0 ; i < chosenWord.length; i += 1) {
    letters.push(chosenWord[i]);
  }
  return letters;
};
