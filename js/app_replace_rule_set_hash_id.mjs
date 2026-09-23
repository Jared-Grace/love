import { property_get } from "./property_get.mjs";
import { text_replace_space_underscore_lower } from "./text_replace_space_underscore_lower.mjs";
export function app_replace_rule_set_hash_id(rule_set) {
  "The word a link names this rule set by: its name in small letters, spaces turned to underscores - Swap 3 is swap_3.";
  "A word rather than the rule set's place in the list, because a place moves whenever a rule set is put in before it, and every link saved past that point would then open a different exercise without anything saying so. The name moves only when somebody rewords it.";
  "Every name read this way was checked when this was written: all seventy-two come out different from each other, none is made of digits alone, and each is exactly the end of the name of the function that builds its rule set.";
  let name = property_get(rule_set, "name");
  let id = text_replace_space_underscore_lower(name);
  return id;
}
