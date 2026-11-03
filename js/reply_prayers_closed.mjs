import { arguments_assert } from "./arguments_assert.mjs";
import { reply_property_prayers } from "./reply_property_prayers.mjs";
import { reply_property_outputs } from "./reply_property_outputs.mjs";
import { property_initialize_list } from "./property_initialize_list.mjs";
import { list_empty_not_is } from "./list_empty_not_is.mjs";
import { prayer_lines_wrap } from "./prayer_lines_wrap.mjs";
import { list_add } from "./list_add.mjs";
import { reply_on_match } from "./reply_on_match.mjs";
export function reply_prayers_closed(rule) {
  arguments_assert(arguments, 1);
  ("A rule that reads what the given rule reads, and then closes the reply with one prayer holding every line noted along the way. A reading with no lines noted gets no prayer.");
  ("★ THE PRAYER IS THE LAST THING SAID. It closes the reply, so it goes on only once the whole message is read and every other reply line is in its place.");
  let name = reply_property_prayers();
  let name_outputs = reply_property_outputs();
  function each_reading(possibilities) {
    for (let possibility of possibilities) {
      let lines = property_initialize_list(possibility, name);
      if (list_empty_not_is(lines)) {
        let prayer = prayer_lines_wrap(lines);
        list_add(possibility[name_outputs], prayer);
      }
    }
  }
  let closed = reply_on_match(rule, [each_reading]);
  return closed;
}
