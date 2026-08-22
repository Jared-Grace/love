export function word_picture_wording(word) {
  "$plain word";
  "What to draw for one taught word, refusing by name if that word is not one the game draws.";
  "IT REFUSES WITH THE WHOLE LIST OF WORDS THAT DO HAVE ONE, because the two ways to arrive here are a misspelling and a word that was left out on purpose, and the list tells those apart at a glance. Answering with nothing would have both look the same, and the caller would go on to draw a picture from an empty wording.";
  let wordings = word_picture_wordings();
  let wording = property_get(wordings, word);
  if (equal(wording, undefined)) {
    error_json({
      word,
      drawn: object_property_names(wordings),
      hint: "this taught word has no picture; either it is misspelled, or it names something a picture cannot show and word_picture_wordings says why",
      f_name: fn_name("word_picture_wording"),
    });
  }
  return wording;
}
