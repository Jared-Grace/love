import { arguments_assert } from "./arguments_assert.mjs";
import { text_commit_names_pattern } from "./text_commit_names_pattern.mjs";
import { null_is } from "./null_is.mjs";
import { list_unique_sorted } from "./list_unique_sorted.mjs";
export function text_commit_names(text) {
  "$plain text";
  "Every run of hex digits in a text that is the right shape to be a commit name - seven to forty of them, standing on its own rather than inside a longer word - each one listed once.";
  "★ THE SHAPE IS ALL THIS KNOWS, SO THE ANSWER IS CANDIDATES AND NOT COMMITS. A row of hex digits may be a colour, a key, a number, or an English word made of the first six letters. Nothing in the text says which, and a reader that guessed would have to guess wrong sometimes. What sorts them out is asking the saved rewrite records: a candidate that no record has ever heard of is dropped without ever being called a commit. So this half is deliberately generous and the next half is strict.";
  "Seven is the shortest anybody writes by hand and forty is the whole name. A longer run is refused rather than trimmed to forty, because a sixty-four digit key trimmed to its first forty is a name nobody wrote.";
  "The shape itself is asked for by name rather than spelled here, so that the rewriter which cuts a text on the same shape cannot come to hold a slightly different one.";
  arguments_assert(arguments, 1);
  let pattern = text_commit_names_pattern();
  let found = text.match(pattern);
  let empty = null_is(found);
  if (empty) {
    let none = [];
    return none;
  }
  let names = list_unique_sorted(found);
  return names;
}
