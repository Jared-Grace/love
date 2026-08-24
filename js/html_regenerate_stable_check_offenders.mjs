import { arguments_assert } from "./arguments_assert.mjs";
import { list_map_property } from "./list_map_property.mjs";
import { list_filter_property } from "./list_filter_property.mjs";
export function html_regenerate_stable_check_offenders(kept, asked) {
  arguments_assert(arguments, 2);
  let settled = list_map_property(kept, "file_path");
  let offenders = list_filter_property(asked, "settled", false);
  let r = {
    settled,
    offenders,
  };
  return r;
}
