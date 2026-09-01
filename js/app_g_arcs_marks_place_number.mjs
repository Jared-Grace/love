import { arguments_assert } from "./arguments_assert.mjs";
import { storage_local_get } from "./storage_local_get.mjs";
import { app_g_arcs_marks_place_remember } from "./app_g_arcs_marks_place_remember.mjs";
import { null_is } from "./null_is.mjs";
import { property_get_or_null_equal } from "./property_get_or_null_equal.mjs";
import { not } from "./not.mjs";
import { property_or_null } from "./property_or_null.mjs";
import { equal } from "./equal.mjs";
import { greater_than_equal } from "./greater_than_equal.mjs";
export function app_g_arcs_marks_place_number(sheet_code, count) {
  "$plain sheet_code";
  "$plain count";
  "Reads back which change of this sheet the reader had been carried to, and answers with nothing at all unless what was filed is about this sheet and still names a change that exists.";
  "IT ANSWERS NOTHING RATHER THAN NOUGHT WHERE THERE IS NOTHING FILED, because nought is a real change - the first one - and a reader who has never toured this sheet has not been carried to its first change either. The two have to be told apart by the caller, which they cannot be if the answer to both is a number.";
  "THE FILED SHEET IS CHECKED BECAUSE ONE STORE HOLDS THE PLACE FOR ALL OF THEM. Changing person redraws the sheet, and a place filed against the arc just left would otherwise put the ring on a line of the arc just arrived at.";
  "THE NUMBER IS CHECKED AGAINST HOW MANY CHANGES THERE ARE NOW, because an arc is rewritten between readings and rewriting it changes the count. A place filed when there were fifty-one changes and read back when there are forty names a change nothing drew, and the ring would be put on nothing while the press said a number no chip carries.";
  arguments_assert(arguments, 2);
  let place = storage_local_get(app_g_arcs_marks_place_remember, "place");
  let missing = null_is(place);
  if (missing) {
    return null;
  }
  let same = property_get_or_null_equal(place, "sheet_code", sheet_code);
  if (not(same)) {
    return null;
  }
  let number = property_or_null(place, "number");
  let unwritten = equal(number, null);
  if (unwritten) {
    return null;
  }
  let past = greater_than_equal(number, count);
  if (past) {
    return null;
  }
  return number;
}
