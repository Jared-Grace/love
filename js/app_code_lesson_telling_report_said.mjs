import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { property_list_join_comma } from "./property_list_join_comma.mjs";
export function app_code_lesson_telling_report_said(report) {
  arguments_assert(arguments, 1);
  ("one lesson's fault written out for a person to read: which lesson it is, what its questions ask about, and what its telling actually shows.");
  ("Both gates over these reports say the same three things in the same order, and only the words in front of them differ - what was never shown, against what was never shown written that way. So the words in front stay with each gate and the reading of the report is said once.");
  let lesson = property_get(report, "lesson");
  let missing = property_list_join_comma(report, "missing");
  let telling = property_list_join_comma(report, "telling");
  let said = lesson + "  asks " + missing + "  shows " + telling;
  return said;
}
