import { fn_name } from "./fn_name.mjs";
import { g_gospel_share_parts } from "./g_gospel_share_parts.mjs";
import { list_map_property } from "./list_map_property.mjs";
import { list_last_remaining } from "./list_last_remaining.mjs";
import { property_get } from "./property_get.mjs";
import { list_join_comma_space } from "./list_join_comma_space.mjs";
import { list_join_space } from "./list_join_space.mjs";
import { list_join_empty } from "./list_join_empty.mjs";
export function g_gospel_share_said() {
  "What the player says when they share the gospel, as one plain sentence - the words the arc prompt hands the writer so the person can answer them.";
  ("The words themselves are ",
    fn_name("g_gospel_share_parts"),
    ", which the button the player taps is built from as well. Only the joining is here, and it is different at the two ends: the button sets an emoji after each part and this says the parts alone.");
  let parts = g_gospel_share_parts();
  let words = list_map_property(parts, "said");
  let split = list_last_remaining(words);
  let last = property_get(split, "last");
  let remaining = property_get(split, "remaining");
  let leading = list_join_comma_space(remaining);
  let all = list_join_space([leading, "and", last]);
  let sentence = list_join_space(["The player tells them that", all]);
  let r = list_join_empty([sentence, "."]);
  return r;
}
