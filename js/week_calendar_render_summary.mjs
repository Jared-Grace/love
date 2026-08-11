import { arguments_assert } from "./arguments_assert.mjs";
import { html_clear } from "./html_clear.mjs";
import { list_empty_not_is } from "./list_empty_not_is.mjs";
import { each } from "./each.mjs";
import { week_calendar_summary_empty } from "./week_calendar_summary_empty.mjs";
export function week_calendar_render_summary(summary, ranges, summary_line) {
  arguments_assert(arguments, 3);
  html_clear(summary);
  let has = list_empty_not_is(ranges);
  if (has) {
    each(ranges, summary_line);
  } else {
    week_calendar_summary_empty(summary);
  }
}
