import { arguments_assert } from "./arguments_assert.mjs";
import { reply_property_prayers } from "./reply_property_prayers.mjs";
import { property_initialize_list_add_if_not_includes } from "./property_initialize_list_add_if_not_includes.mjs";
import { reply_on_match } from "./reply_on_match.mjs";
export function reply_on_match_prayer(rule, line) {
  arguments_assert(arguments, 2);
  ("A rule that reads what the given rule reads and notes one line to pray. The line goes out later, in the one prayer that closes the reply.");
  ("A line already noted is not noted again, so saying a thing twice prays for it once.");
  let name = reply_property_prayers();
  function each_reading(possibilities) {
    for (let possibility of possibilities) {
      property_initialize_list_add_if_not_includes(possibility, name, line);
    }
  }
  let noted = reply_on_match(rule, [each_reading]);
  return noted;
}
