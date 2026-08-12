export function bible_interlinear_sigla_marks_not_edition() {
  "The editorial marks that come off a word without ever dropping it, as codepoints.";
  "These are marks about a word the base text already carries, so removing the word over";
  "one of them would delete scripture rather than a later edition's reading. They still";
  "come off, because a bracket printed in the middle of a verse is not something a reader";
  "should have to see.";
  "The guillemets mark a TRANSPOSITION - the block inside them stands in a different place";
  "in different editions, not in only one of them. Both blocks of 1 Corinthians 1:2 are";
  "wrapped this way and every edition has every word of both; Matthew 14:4 wraps the two";
  "words the Textus Receptus prints AFTER the pronoun instead of before it. Reading them";
  "as an edition wrapper cost that verse eight words and Matthew 14:4 the name John.";
  "The asterisk flags a word the editions spell differently rather than one they disagree";
  "about having.";
  "Neither mark appears in the tables' own legend, which lists seven wrappers and stops.";
  "That is the reason they are separated out rather than trusted: an undocumented mark";
  "cannot be read as saying a word is edition-only, and where its contents can be checked";
  "against the editions they turn out to be base text every time.";
  let marks = [0xab, 0xbb, 0x2a];
  function character_of(code) {
    let character = String.fromCodePoint(code);
    return character;
  }
  let characters = marks.map(character_of);
  return characters;
}
