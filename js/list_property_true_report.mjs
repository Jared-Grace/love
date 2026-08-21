import { arguments_assert } from "./arguments_assert.mjs";
import { list_filter_property } from "./list_filter_property.mjs";
import { list_size } from "./list_size.mjs";
import { text_combine } from "./text_combine.mjs";
export function list_property_true_report(rows, done) {
  "How a run over a list of things ends its report: how many were asked about, how many actually got done, and every row so the ones that did not can be read.";
  arguments_assert(arguments, 2);
  ("The word for done differs from one errand to the next - a song is written, a song is moved - and the count is named after that word rather than after this function, so a person reading the report still sees the word their errand uses. That is why the name of the property is asked for instead of being fixed here.");
  ("Every row is handed back and not only the ones left over, because a row that refused says why it refused, and a report that kept only the failures would lose the count of the ones that were already right.");
  let done_rows = list_filter_property(rows, done, true);
  let done_count = list_size(done_rows);
  let asked_count = list_size(rows);
  let key = text_combine(done, "_count");
  let r = {
    asked_count,
    [key]: done_count,
    rows,
  };
  return r;
}
