import { list_filter_text_empty_not_is } from "./list_filter_text_empty_not_is.mjs";
export function text_split_dashes_kept(t) {
  "One piece of text cut wherever any dash stands - the plain hyphen, the en dash, the em dash and the rest - with each run of dashes kept as a piece of its own, so the pieces joined back together give the text again.";
  "$plain t";
  "the text is words to cut, and nothing in it runs.";
  "THE DASHES ARE KEPT rather than thrown away, because a reader that draws the pieces must still draw the dash between them; dropping it would turn a-b into ab on the screen.";
  "Nothing empty comes back, so a dash at either end gives one dash piece and no blank one beside it.";
  let parts = t.split(/([-‐-―−﹘﹣－]+)/u);
  let pieces = list_filter_text_empty_not_is(parts);
  return pieces;
}
