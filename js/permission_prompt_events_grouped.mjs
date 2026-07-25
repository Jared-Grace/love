import { permission_prompt_events_grouped_by } from "./permission_prompt_events_grouped_by.mjs";
export function permission_prompt_events_grouped(events) {
  "Collapses waits onto the label a permission rule would carry, counted and worst-case, commonest first. The count is the interesting number: it is how many times that one missing rule cost the human an interruption.";
  let rows = permission_prompt_events_grouped_by(events, "label");
  return rows;
}
