import { arguments_assert } from "./arguments_assert.mjs";
import { reply_property_outputs } from "./reply_property_outputs.mjs";
import { property_get } from "./property_get.mjs";
import { property_set } from "./property_set.mjs";
import { reply_on_match } from "./reply_on_match.mjs";
export function reply_outputs_mapped(rule, mapper) {
  arguments_assert(arguments, 2);
  ("A rule that reads what the given rule reads, and then rewrites the reply lines of each reading with the given function.");
  let name = reply_property_outputs();
  function each_reading(possibilities) {
    for (let possibility of possibilities) {
      let outputs = property_get(possibility, name);
      let mapped_outputs = mapper(outputs);
      property_set(possibility, name, mapped_outputs);
    }
    return possibilities;
  }
  let mapped = reply_on_match(rule, [each_reading]);
  return mapped;
}
