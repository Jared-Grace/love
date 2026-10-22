import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { app_code_milestone_go } from "./app_code_milestone_go.mjs";
import { app_code_checkpoint_button } from "./app_code_checkpoint_button.mjs";
import { app_shared_spaced_gap } from "./app_shared_spaced_gap.mjs";
import { html_style_margin_top } from "./html_style_margin_top.mjs";
export function app_code_home_milestone_row(g, context, milestone, complete) {
  "$plain complete";
  "The button on the home screen that opens one milestone, drawn the way a review's row is drawn, with the same gap above it, and handed back for the same reason: the list scrolls back to the row the learner just left.";
  arguments_assert(arguments, 4);
  let label = property_get(milestone, "label");
  let id = property_get(milestone, "id");
  async function on_click() {
    await app_code_milestone_go(context, id);
  }
  let row = app_code_checkpoint_button(
    g,
    "Milestone: ",
    label,
    on_click,
    complete,
  );
  let gap = app_shared_spaced_gap();
  html_style_margin_top(row, gap);
  return row;
}
