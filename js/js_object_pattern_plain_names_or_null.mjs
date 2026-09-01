import { arguments_assert } from "./arguments_assert.mjs";
import { property_equals_try } from "./property_equals_try.mjs";
import { property_get } from "./property_get.mjs";
import { equal } from "./equal.mjs";
import { list_add } from "./list_add.mjs";
import { each } from "./each.mjs";
import { list_size } from "./list_size.mjs";
import { ternary } from "./ternary.mjs";
export function js_object_pattern_plain_names_or_null(properties) {
  arguments_assert(arguments, 1);
  ("The words a record-taken-apart writes into, when every entry in it is a plain word standing for itself, and nothing at all when any one entry is more than that.");
  ("IT ANSWERS WITH NOTHING RATHER THAN WITH THE PART IT UNDERSTOOD. A caller that took the words it could read and left the rest would write out half of what the line does and drop the other half, which is the one outcome worse than refusing. So the answer is all of them or none.");
  ("AN ENTRY THAT IS MORE THAN A PLAIN WORD MEANS SOMETHING THIS READING CANNOT SAY. An entry can be given a different word to land in, or a value to fall back on when the record has none, or can be a record inside the record, or can gather up whatever is left over. Each of those is a rule about what gets written where, and none of them is carried by the word alone.");
  let names = [];
  function property_each(property) {
    let property_is = property_equals_try(property, "type", "Property");
    if (property_is) {
      let key = property_get(property, "key");
      let value = property_get(property, "value");
      let key_is = property_equals_try(key, "type", "Identifier");
      let value_is = property_equals_try(value, "type", "Identifier");
      if (key_is) {
        if (value_is) {
          let key_name = property_get(key, "name");
          let value_name = property_get(value, "name");
          let same = equal(key_name, value_name);
          if (same) {
            list_add(names, key_name);
          }
        }
      }
    }
  }
  each(properties, property_each);
  let left = list_size(names);
  let right = list_size(properties);
  let all = equal(left, right);
  let answer = ternary(all, names, null);
  return answer;
}
