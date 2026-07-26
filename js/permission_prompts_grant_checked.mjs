import { permission_prompt_run_rows } from "./permission_prompt_run_rows.mjs";
import { permission_grant_context } from "./permission_grant_context.mjs";
import { permission_rule_grant_checked_context } from "./permission_rule_grant_checked_context.mjs";
import { list_add } from "./list_add.mjs";
import { property_exists } from "./property_exists.mjs";
import { property_get } from "./property_get.mjs";
import { property_set } from "./property_set.mjs";
import { not } from "./not.mjs";
export async function permission_prompts_grant_checked(days, seconds_minimum) {
  "write an allow rule for every dispatcher function that actually cost the human a prompt and passes the safety check, and say why for each one it refuses";
  "the set comes from the record of interruptions rather than from a list handed in, because a list handed in is a guess about what costs the human time and the record is a measurement of it. nothing here decides whether a grant is safe — that judgment is asked of the same one function a single grant asks, so the two can never come apart.";
  "the refusals are the more useful half of the answer. a name that keeps prompting and keeps being refused is a function that wants narrowing, and it stays visible here until somebody narrows it.";
  let rows = await permission_prompt_run_rows(days, seconds_minimum);
  let context = await permission_grant_context();
  let grouped = {};
  for (let row of rows) {
    let name = property_get(row, "label");
    let waits = property_get(row, "count");
    let result = await permission_rule_grant_checked_context(name, context);
    property_set(result, "waits", waits);
    let action = property_get(result, "action");
    let known = property_exists(grouped, action);
    if (not(known)) {
      let empty = [];
      property_set(grouped, action, empty);
    }
    let list = property_get(grouped, action);
    list_add(list, result);
  }
  let r = {
    days: Number(days),
    seconds_minimum: Number(seconds_minimum),
    checked: rows.length,
    grouped,
  };
  return r;
}
