import { arguments_assert } from "./arguments_assert.mjs";
import { app_shared_input_type_label } from "./app_shared_input_type_label.mjs";
export function app_shared_input_date(parent, label) {
  "$plain parent";
  "$plain label";
  "A day to pick, with its label over it, looking the same in every app. Its value reads and writes as 'YYYY-MM-DD'.";
  arguments_assert(arguments, 2);
  let input = app_shared_input_type_label(parent, label, "date");
  return input;
}
