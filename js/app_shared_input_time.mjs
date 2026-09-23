import { arguments_assert } from "./arguments_assert.mjs";
import { app_shared_input_type_label } from "./app_shared_input_type_label.mjs";
export function app_shared_input_time(parent, label) {
  "$plain parent";
  "$plain label";
  "A time of day to pick, with its label over it, looking the same in every app. Its value reads and writes as 'HH:MM'.";
  arguments_assert(arguments, 2);
  let input = app_shared_input_type_label(parent, label, "time");
  return input;
}
