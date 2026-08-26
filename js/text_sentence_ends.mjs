import { arguments_assert } from "./arguments_assert.mjs";
import { text_includes } from "./text_includes.mjs";
export function text_sentence_ends(t) {
  "Whether this piece of text closes a sentence: it carries a full stop, a semicolon, a question mark or an exclamation mark.";
  "It takes a word rather than a line because the text it was written for is kept as the words a person typed, with their punctuation still glued to them, and a reader walking those words needs to know where one sentence stopped without joining them back up first.";
  "The semicolon counts as an ending, which is a decision and not an oversight. What this is asked for is whether two things in a row are still talking about the same thing, and a semicolon says they are not.";
  arguments_assert(arguments, 1);
  let enders = [".", ";", "?", "!"];
  for (let ender of enders) {
    let includes = text_includes(t, ender);
    if (includes) {
      return true;
    }
  }
  return false;
}
