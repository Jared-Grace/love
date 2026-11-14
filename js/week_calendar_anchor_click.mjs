import { arguments_assert } from "./arguments_assert.mjs";
import { equal } from "./equal.mjs";
export function week_calendar_anchor_click(day, slot, anchor, range_add) {
  "where the anchor stands after a piece is clicked while another piece is already anchored, and whether the chosen windows changed as a result. Clicking the anchored piece itself puts it down; clicking any other piece draws the range between them and puts the anchor down. On another day the range is a block: the same hours on every day from the anchor's day to the clicked one, so several days get the same hours in two clicks.";
  "IT DOES NOT REPORT THE WINDOWS. Reporting them belongs to the caller, and has to, because the windows are rebuilt rather than added to: joining two touching windows makes a new list, so the list this was handed is not the list the caller now holds. Reporting from in here reported the list from before the range was drawn - windows that touch came out as two where the grid beside them drew one, so what was shown and what was handed out disagreed. Saying only whether they changed lets the caller report its own.";
  arguments_assert(arguments, 4);
  let ranges_changed = false;
  let same_piece = equal(anchor.day, day) && equal(anchor.slot, slot);
  if (same_piece) {
    anchor = null;
  } else {
    range_add(anchor.day, day, anchor.slot, slot);
    anchor = null;
    ranges_changed = true;
  }
  let r = {
    anchor,
    ranges_changed,
  };
  return r;
}
