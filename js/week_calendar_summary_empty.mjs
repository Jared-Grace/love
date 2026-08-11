import { arguments_assert } from "./arguments_assert.mjs";
import { app_shared_text_body } from "./app_shared_text_body.mjs";
import { app_shared_text_deemphasized } from "./app_shared_text_deemphasized.mjs";
export function week_calendar_summary_empty(summary) {
  arguments_assert(arguments, 1);
  let none = app_shared_text_body(
    summary,
    "No times chosen yet — click a piece to start",
  );
  app_shared_text_deemphasized(none);
}
