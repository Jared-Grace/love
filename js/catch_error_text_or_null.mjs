import { arguments_assert } from "./arguments_assert.mjs";
export function catch_error_text_or_null(lambda) {
  arguments_assert(arguments, 1);
  ("run something that is allowed to fail and hand back WHAT went wrong as a line of text, or null when nothing did");
  ("null means it succeeded. that is the way round it is because a caller of this is looking for trouble, so the empty answer should be the quiet one.");
  ("The sibling that waits is the same idea for work that takes time. This one is for work that does not, and the difference matters more than it looks: a caller that wants to put something back afterwards - a stand-in left in place of the browser, say - can only be sure of doing it if nothing in between is allowed to pause.");
  let text = null;
  try {
    lambda();
  } catch (e) {
    text = String(e);
  }
  return text;
}
