import { permission_run_names_not_function } from "./permission_run_names_not_function.mjs";
import { list_empty_is_assert_json } from "./list_empty_is_assert_json.mjs";
export async function permission_run_names_not_function_assert() {
  "QA gate: throws when a permission rule auto-approves an alias key or a dead name instead of a real function";
  let offenders = await permission_run_names_not_function();
  list_empty_is_assert_json(offenders, {
    hint: "a permission rule matches literal text, so an alias key grants whatever that alias points to later — please rewrite each rule to name the function itself",
  });
}
