describe('getRandom', function() {
  it("will pull a random word from the words array to use in the game", function(){
    expect(words[4]).to.equal("benchmarking");
  });
});

describe('letterArray', function() {
  it("will break down the random word into an array", function() {
    expect(letterArray("benchmarking")).to.eql(["b","e","n","c","h","m","a","r","k","i","n","g"]);
  });
});

describe('checkForLetter', function() {
  it("will check letter array for a given letter input", function(letters, userInput) {
    expect(["b","e","n","c","h","m","a","r","k","i","n","g"], "a").to.equal([6]);
  });
})
