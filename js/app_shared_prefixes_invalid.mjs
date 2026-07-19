import { apps_names } from "./apps_names.mjs";
import { functions_names } from "./functions_names.mjs";
import { list_filter_starts_with } from "./list_filter_starts_with.mjs";
import { app_shared_name_prefix } from "./app_shared_name_prefix.mjs";
import { function_name_separator_trail } from "./function_name_separator_trail.mjs";
import { app_prefix_without } from "./app_prefix_without.mjs";
import { function_name_to_parts } from "./function_name_to_parts.mjs";
import { list_second } from "./list_second.mjs";
import { list_concat } from "./list_concat.mjs";
import { list_any } from "./list_any.mjs";
import { list_filter } from "./list_filter.mjs";
import { list_map } from "./list_map.mjs";
import { list_unique } from "./list_unique.mjs";
import { not } from "./not.mjs";
import { equal } from "./equal.mjs";
import { text_starts_with } from "./text_starts_with.mjs";
import { text_combine } from "./text_combine.mjs";
import { function_name_separator } from "./function_name_separator.mjs";
export async function app_shared_prefixes_invalid() {
  "audit: every app_<part>_ function whose <part> is neither a real app nor reserved — grouped by part, so each group is a squatter to migrate";
  ("shared is the one sanctioned bucket, so it counts as owned even though it is not an app");
  let reserved = ["shared"];
  let ans = await apps_names();
  let owned = list_concat(ans, reserved);
  let prefix = function_name_separator_trail(app_shared_name_prefix());
  let all = await functions_names();
  let app_fns = list_filter_starts_with(all, prefix);
  function part_of(f_name) {
    let parts = function_name_to_parts(f_name);
    let part = list_second(parts);
    return part;
  }
  function owned_is(f_name) {
    let rest = app_prefix_without(f_name);
    function matches(a) {
      let separator = function_name_separator();
      let boundary = text_combine(a, separator);
      let m = equal(rest, a) || text_starts_with(rest, boundary);
      return m;
    }
    let is = list_any(owned, matches);
    return is;
  }
  function invalid_is(f_name) {
    let is = not(owned_is(f_name));
    return is;
  }
  let invalid = list_filter(app_fns, invalid_is);
  let parts = list_unique(list_map(invalid, part_of));
  function group(part) {
    function same(f_name) {
      let s = equal(part_of(f_name), part);
      return s;
    }
    let functions = list_filter(invalid, same);
    let g = {
      part,
      functions,
    };
    return g;
  }
  let groups = list_map(parts, group);
  return groups;
}
