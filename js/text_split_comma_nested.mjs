import { equal_assert_json } from "./equal_assert_json.mjs";
import { subtract } from "./subtract.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { text_comma_run_longest } from "./text_comma_run_longest.mjs";
import { equal } from "./equal.mjs";
import { text_repeated } from "./text_repeated.mjs";
import { text_split } from "./text_split.mjs";
import { list_map } from "./list_map.mjs";
export function text_split_comma_nested(t) {
  "A list handed to a command as one word, taken apart at every level it was written at: one comma between words, two between lists of words, three between lists of those, for as many levels as are written.";
  "Nothing that already worked changes meaning. A word holding no comma comes back as itself, and a word holding only single commas comes back as the same flat list it always came back as. Only a run of two or more says anything new, and a run of two or more never said anything at all before - it produced an empty word in the middle of a list, which no caller ever wanted.";
  "Doubled commas rather than a bar, because a bar is what a command line itself reads as the join between two commands. A bar would have to be quoted at every single call to survive, and one written without quotes would be cut up before this ever saw it. A comma is already the separator here and is already safe to write unquoted, so more of it is the one mark that needs nothing new from the caller.";
  "The longest run decides the outermost cut, so the levels are counted from what was written rather than from a depth given up front. That is what lets one spelling serve a list, a list of lists, and a list of those, without the caller saying which it is.";
  arguments_assert(arguments, 1);
  let depth = text_comma_run_longest(t);
  let word = equal(depth, 0);
  if (word) {
    return t;
  }
  let separator = text_repeated(",", depth);
  let parts = text_split(t, separator);
  ("Every level from the deepest down to a single comma has to be written, and every part cut at one level has to be nested the same amount as the parts beside it. A list of one thing and a bare thing are then spelled differently rather than alike, and neither of them is guessed at here.");
  ("Refused rather than decided, because both readings are reasonable and nobody has needed either yet. A refusal keeps the choice open and says so at the one moment somebody is holding the case in their hands; a guess would close it quietly on whoever writes the first one.");
  let expected = subtract(depth, 1);
  for (let part of parts) {
    let inner = text_comma_run_longest(part);
    equal_assert_json(inner, expected, {
      hint: "one part of this list is nested a different amount than the parts beside it. Every level of commas from the deepest down to a single one wants to be written, so adding a level inside this part, or taking one off around it, will line them up.",
      t,
      part,
      depth,
    });
  }
  let nested = list_map(parts, text_split_comma_nested);
  return nested;
}
