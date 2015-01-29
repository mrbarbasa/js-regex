module.exports = {

  /**
   * Counts the number of occurances of "cloud" in the phrase.
   * @param  {String} phrase
   * @return {Number} the number of times "cloud" shows up in `phrase`
   */
  findCloud: function(phrase) {
    var matches = phrase.match(/\b(c|C)loud\b/g);
    var count = 0;
    if (matches.length !== null) {
      count = matches.length;
    }
    return count;
  },

  /**
   * Replaces all instances of the word "cloud" with another word.
   * Maintains capitalization.
   * @param  {String} phrase
   * @param  {String} newWord the word to replace "cloud"
   * @return {String} The new phrase.
   */
  replaceCloud: function(phrase, newWord) {
    var str = phrase.replace(/\b(c|C)loud\b/g, function(match) {
      if (match === 'Cloud') {
        return newWord.charAt(0).toUpperCase() + newWord.slice(1);
      }
      else {
        return newWord.toLowerCase();
      }
    });
    return str;
  },

  /**
   * CHALLENGE
   * Replaces a word with another word.
   * Maintains capitalization.
   * @param  {String} phrase      The original phrase
   * @param  {String} targetWord  The word to find
   * @param  {String} newWord     The word to replace the `target` word with
   * @return {String}             A new phrase with all `target` words replaced
   */
  replaceWords: function(phrase, targetWord, newWord) {
    var firstChar = targetWord.charAt(0).toLowerCase();
    var firstCharCap = firstChar.toUpperCase();
    var targetWordEnd = targetWord.slice(1);
    var regex = new RegExp('\\b' + '(' + firstChar + '|' + firstCharCap + ')' + targetWordEnd + '\\b', 'g');

    var str = phrase.replace(regex, function(match) {
      if (match === firstCharCap + targetWordEnd) {
        return newWord.charAt(0).toUpperCase() + newWord.slice(1);
      }
      else {
        return newWord.toLowerCase();
      }
    });
    return str;
  }

};
