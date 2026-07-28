import { arguments_assert } from "./arguments_assert.mjs";
import { list_any } from "./list_any.mjs";
import { property_get } from "./property_get.mjs";
import { equal } from "./equal.mjs";
export function literal_getter_peer_is(getters, f_name, literal) {
  arguments_assert(arguments, 3);
  ("Whether a file holding a spelling is itself a constant holding that same");
  ("spelling, rather than a place that spells it out. The two are opposite kinds");
  ("of thing and only one of them is work: a site can be routed through a name, a");
  ("second name for the same value cannot - it is already named.");
  ("Counting the second kind makes the measure climb whenever somebody does the");
  ("right thing. Naming two roles that happen to share a size gives two constants");
  ("holding one spelling, so a report that counted those would read the naming as");
  ("fresh duplication and send the next reader to undo it.");
  function peer_is(getter) {
    let name = property_get(getter, "f_name");
    let held = property_get(getter, "literal");
    let same_name = equal(name, f_name);
    let same_literal = equal(held, literal);
    let both = same_name && same_literal;
    return both;
  }
  let any = list_any(getters, peer_is);
  return any;
}
