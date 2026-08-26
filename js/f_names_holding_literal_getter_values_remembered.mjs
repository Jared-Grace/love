import { arguments_assert } from "./arguments_assert.mjs";
import { global_function_property_exists } from "./global_function_property_exists.mjs";
import { global_function_property_get } from "./global_function_property_get.mjs";
import { equal } from "./equal.mjs";
import { not } from "./not.mjs";
import { f_names_holding_literal_getter_values } from "./f_names_holding_literal_getter_values.mjs";
import { global_function_property_set } from "./global_function_property_set.mjs";
import { list_map } from "./list_map.mjs";
import { identity } from "./identity.mjs";
export function f_names_holding_literal_getter_values_remembered(codes) {
  arguments_assert(arguments, 1);
  ("The files spelling out some literal getter's value, worked out once for a body of source and then kept, so that the getter loop asking it two hundred and eighty-eight times over pays for the pass once.");
  ("What is kept is filed under the handed-in body of source itself, not under anything read out of it. A body of source is read in whole and then only looked at, so two askings that arrive holding the same one are asking the same question; a second reading of the repo is a different object and so is a different question, and answering it out of the first would be answering about the repo as it used to be. The one way to be wrong here is to write into a body of source between two askings, which nothing does and which no reader of this could be expected to survive anyway.");
  ("Only the newest is kept, because the asking that made this worth building comes in a run of hundreds carrying the same body of source, and a second one in flight would mean two readings of the repo alive at once.");
  ("What comes back is a fresh list, since the kept one is handed out again and again and a caller that sorted or added to it would be editing every later answer.");
  let known = global_function_property_exists(
    f_names_holding_literal_getter_values_remembered,
    "codes",
  );
  let same = false;
  if (known) {
    let kept = global_function_property_get(
      f_names_holding_literal_getter_values_remembered,
      "codes",
    );
    same = equal(kept, codes);
  }
  if (not(same)) {
    let read = f_names_holding_literal_getter_values(codes);
    global_function_property_set(
      f_names_holding_literal_getter_values_remembered,
      "codes",
      codes,
    );
    global_function_property_set(
      f_names_holding_literal_getter_values_remembered,
      "f_names",
      read,
    );
  }
  let held = global_function_property_get(
    f_names_holding_literal_getter_values_remembered,
    "f_names",
  );
  let copy = list_map(held, identity);
  return copy;
}
