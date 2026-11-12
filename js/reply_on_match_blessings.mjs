import { arguments_assert } from "./arguments_assert.mjs";
import { reply_property_blessings } from "./reply_property_blessings.mjs";
import { property_initialize_list_add_if_not_includes } from "./property_initialize_list_add_if_not_includes.mjs";
import { reply_on_match } from "./reply_on_match.mjs";
export function reply_on_match_blessings(rule, blessings) {
  arguments_assert(arguments, 2);
  ("A rule that reads what the given rule reads and notes things to bless, such as your ministry and your teaching. They go out later, all in one line of the prayer that closes the reply.");
  ("★ A THING ALREADY NOTED IS NOT NOTED AGAIN, so a teacher who is also a pastor has their ministry blessed once and not twice.");
  let name = reply_property_blessings();
  function each_reading(possibilities) {
    for (let possibility of possibilities) {
      for (let blessing of blessings) {
        property_initialize_list_add_if_not_includes(
          possibility,
          name,
          blessing,
        );
      }
    }
  }
  let noted = reply_on_match(rule, [each_reading]);
  return noted;
}
