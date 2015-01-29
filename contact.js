module.exports = {

  /**
   * Returns all the emails in a phrase.
   * @param  {String} phrase
   * @return {[String]} an array of emails, or an empty array if none are found.
   */
  findEmails: function(phrase) {
    var matches = phrase.match(/\b\w+@\w+.\w+\b/g);
    return matches ? matches : [];
  },

  /**
   * Finds all the phone numbers in a phrase
   * @param  {String} phrase
   * @return {[String]]} an array of phone numbers.
   */
  findPhoneNumbers: function(phrase) {
    var matches = phrase.match(/(\d{10})|(\d{3}-\d{3}-\d{4})|(\(\d{3}\)\s\d{3}-\d{4})/g);
    return matches ? matches : [];
  }

};
