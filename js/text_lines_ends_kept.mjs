import { floor } from "./floor.mjs";
import { divide } from "./divide.mjs";
import { greater_than } from "./greater_than.mjs";
import { less_than } from "./less_than.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { subtract } from "./subtract.mjs";
import { add } from "./add.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
export function text_lines_ends_kept(text, count) {
  "Both ends of a long text with the middle taken out and said aloud - so many lines from the top, the same from the bottom, and a line between them saying how many are missing.";
  "Both ends rather than either one, because the two hand cuts people reach for are asking for different halves of the same answer and neither knows in advance which they will need: the top holds what a thing is about, the bottom holds how it came out. Measured over a fortnight, the bottom was asked for more often than the top, which is the opposite of what a first-so-many cut assumes.";
  "The missing lines are counted and said, never merely dropped. A shortening that does not announce itself cannot be told apart from a short answer, and then every reader must either trust it or ask again - which is the whole cost the shortening was meant to save.";
  "A text already short enough comes back untouched and identical, so a caller can tell that nothing happened by comparing what came back with what it handed over.";
  arguments_assert(arguments, 2);
  let lines = text.split("\n");
  let too_few = less_than(count, 2);
  let b = subtract(lines.length, 1);
  let short = greater_than(count, b);
  if (too_few || short) {
    return text;
  }
  let each_end = divide_floor(count, 2);
  let first = lines.slice(0, each_end);
  let difference = subtract(lines.length, each_end);
  let last = lines.slice(difference);
  let shown = add(first.length, last.length);
  let hidden = subtract(lines.length, shown);
  let v = String(hidden);
  let said = text_combine_multiple([
    "... ",
    v,
    " lines left out, both ends kept ...",
  ]);
  let v2 = first.join("\n");
  let v3 = last.join("\n");
  let kept = text_combine_multiple([v2, "\n", said, "\n", v3]);
  return kept;
}
