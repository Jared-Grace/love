import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { app_g_arcs_mark_row_current_set } from "./app_g_arcs_mark_row_current_set.mjs";
export function app_g_arcs_mark_current_set(mark, current) {
  "One change on the sheet dressed as the change being read or dressed as an ordinary one: both halves of it together, the wording it used to carry and the wording it carries now.";
  "A CHANGE IS THE PAIR AND NOT THE TOP LINE OF IT. Ringing only the older half said that half was the thing selected, when the whole point of the pair is that neither line means anything without the other - so a reader arriving found one line marked out and the line it was to be compared against dressed exactly like the untouched rows around it.";
  "THE TWO HALVES ARE RINGED SEPARATELY RATHER THAN BOXED TOGETHER, because nothing on the page holds the pair. The rows are laid one after another as siblings, and wrapping them to draw one outline would put a box in the middle of a run of rows that are otherwise all at the same depth - a change to what the page is made of, to draw a line around something.";
  arguments_assert(arguments, 2);
  let was = property_get(mark, "was");
  let now = property_get(mark, "now");
  app_g_arcs_mark_row_current_set(was, current);
  app_g_arcs_mark_row_current_set(now, current);
}
