import { less_than } from "./less_than.mjs";
import { equal } from "./equal.mjs";
import { list_add } from "./list_add.mjs";
export function bible_glyph_grammar_features(parsing_long) {
  "$plain parsing_long";
  "the parsing is the interlinear's own spelled-out description of one word. It is text to take apart and nothing that runs.";
  "One word's parsing taken apart into the separate grammatical facts it states, so that a mark can be designed per fact rather than per parsing.";
  "This exists because the two ways of counting the grammar give wildly different answers, and the difference is the whole argument. A mark per PARSING needs one drawing for every combination the language uses - noun accusative masculine singular is a different drawing from noun accusative masculine plural. A mark per FACT needs one drawing for accusative and one for plural, and the combination is drawn by putting both on the word. The second alphabet is small enough for a person to learn; the first is not.";
  "The part of speech is separated from the rest by a dash in the interlinear's own wording, and the rest is separated by spaces, except that a person is written as two words - 3rd Person - which is kept whole because the digit alone would be read as a number and Person alone says nothing.";
  "A VOICE MAY BE WRITTEN AS AN ALTERNATIVE - Middle or Passive - and those three words are kept whole as one fact, because that is not the interlinear stating two things about the word. It is the interlinear saying the form does not distinguish them, which is one fact about the word and would need one mark. Splitting it invented a grammatical feature called or, which is how this was noticed.";
  let parts = parsing_long.split(" - ");
  let features = [];
  let head = parts[0];
  let item = head.trim();
  list_add(features, item);
  let rest = parts[1];
  if (rest) {
    let words = rest.split(" ");
    let index = 0;
    while (less_than(index, words.length)) {
      let word = words[index];
      let next = words[index + 1];
      let alternative = equal(next, "or");
      if (alternative) {
        let other = words[index + 2];
        list_add(features, word + " " + next + " " + other);
        index = index + 3;
        continue;
      }
      let personal = equal(next, "Person");
      if (personal) {
        list_add(features, word + " " + next);
        index = index + 2;
        continue;
      }
      list_add(features, word);
      index = index + 1;
    }
  }
  return features;
}
