import { arguments_assert } from "./arguments_assert.mjs";
import { word_count_pluralize } from "./word_count_pluralize.mjs";
import { word_count_verb } from "./word_count_verb.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export function app_g_arcs_lines_moved_said(count_total) {
  "How many lines of an arc have moved, said as the opening of an English sentence - one line has moved, two lines have moved.";
  "IT IS ONE PHRASE BECAUSE THE STATE LINE SAYS IT FOUR TIMES, once for each older copy the marks can be measured from and once more for the wording that was approved. Only the tail differs between them - since you read it, since your notes were answered, since the backup, since you approved it - so the head is written once here and the four sentences cannot disagree about how to count.";
  arguments_assert(arguments, 1);
  let counted = word_count_pluralize(count_total, "line");
  let verb = word_count_verb(count_total, "has", "have");
  let said = text_combine_multiple([counted, " ", verb, " moved"]);
  return said;
}
