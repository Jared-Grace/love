import { arguments_assert } from "./arguments_assert.mjs";
import { text_combine } from "./text_combine.mjs";
export function text_combine_3(a, b, c) {
  arguments_assert(arguments, 3);
  ("Three pieces of text joined end to end.");
  ("It used to hand the three to the sibling that joins a list of any length, which");
  ("is the same answer and the wrong shape: that sibling's body is one fold over a");
  ("list, so this one matched nothing, and the files writing these two joins by hand");
  ("went on writing them. Spelled as the two joins its callers spell, it takes them.");
  ("The two spellings part company on numbers - the list sibling starts from empty");
  ("text, so it writes them out rather than adding them - and they agree on text,");
  ("which is the whole of what this family is for and the whole of what reaches");
  ("here.");
  let ab = text_combine(a, b);
  let abc = text_combine(ab, c);
  return abc;
}
