import { not } from "./not.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { global_function_property_exists } from "./global_function_property_exists.mjs";
import { global_function_property_get } from "./global_function_property_get.mjs";
export function http_json_memoized_failures() {
  arguments_assert(arguments, 0);
  ("How many times, in this run of the program, a piece of json asked for through the memo could not be fetched.");
  ("A caller that keeps what it worked out reads this before and after the work. If it moved, something the work wanted was missing, and the answer may be short of what a working network would have given - so it is used, but not kept.");
  let present = global_function_property_exists(
    http_json_memoized_failures,
    "count",
  );
  if (not(present)) {
    let r = 0;
    return r;
  }
  let count = global_function_property_get(
    http_json_memoized_failures,
    "count",
  );
  return count;
}
