import { literals_frozen_gate_run_arrived } from "./literals_frozen_gate_run_arrived.mjs";
import { literals_frozen_gate_run_lambda2 } from "./literals_frozen_gate_run_lambda2.mjs";
import { fn_name } from "./fn_name.mjs";
import { property_get } from "./property_get.mjs";
import { list_filter } from "./list_filter.mjs";
import { list_remove } from "./list_remove.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { list_add } from "./list_add.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { list_empty_is_assert_json } from "./list_empty_is_assert_json.mjs";
import { list_size } from "./list_size.mjs";
export async function literals_frozen_gate_run() {
  arguments_assert(arguments, 0);
  ("Gate: every constant whose value has escaped this repo still hands back what the record says it did.");
  ("Merging two spellings is safe to do without asking, and splitting them again later is safe too, because the repair adds a second function rather than changing the first. What that repair cannot reach is a value already written into somebody's browser or bookmarked in an address: change it in place and every future read looks for the new word while every past write still holds the old one.");
  ("So the one edit this watches for is the value moving with the name standing still. It is invisible in every other way - the file still loads, every caller still compiles, and the damage is to data nobody here can see.");
  ("A deliberate change is still allowed and takes one command; what it may not do is happen quietly.");
  let r3 = await literals_frozen_gate_run_arrived();
  let arrived = property_get(r3, "arrived");
  let moved = property_get(r3, "moved");
  let gone = property_get(r3, "gone");
  let fresh = property_get(r3, "fresh");
  let names = property_get(r3, "names");
  let recorded = property_get(r3, "recorded");
  function lambda2(f_name) {
    let r2 = literals_frozen_gate_run_lambda2(f_name, recorded, arrived);
    return r2;
  }
  let orphaned = list_filter(gone, lambda2);
  for (let f_name of orphaned) {
    list_remove(gone, f_name);
    list_add(moved, {
      f_name,
      was: property_get(recorded, f_name),
      is: null,
    });
  }
  ("All three still fail, because a record out of step with the code cannot catch the next value that moves - a gate that passed here would be trading a loud complaint for a silent blind spot. What differs is the repair each one names, and only the first of them is a decision.");
  let f_name2 = fn_name("literals_frozen_write");
  list_empty_is_assert_json(moved, {
    hint: text_combine_multiple([
      "a frozen value is not what the record says - if the change was meant, write the record again with ",
      f_name2,
      " so it stands in the commit; if it was not, put the old value back",
    ]),
    moved,
  });
  let f_name3 = fn_name("literals_frozen_record_new");
  list_empty_is_assert_json(fresh, {
    hint: text_combine_multiple([
      "a frozen constant the record has never held - nothing has moved, so record it with ",
      f_name3,
      " which only ever adds a name the record is missing and cannot touch a value it already holds",
    ]),
    fresh,
  });
  let f_name4 = fn_name("literals_frozen_record_new");
  list_empty_is_assert_json(gone, {
    hint: text_combine_multiple([
      "a frozen constant the code no longer has, whose value arrived under another name in the same breath - a rename, so nothing published has changed. Clear the old name with ",
      f_name4,
      " which drops it only because that value is being recorded under its new name",
    ]),
    gone,
  });
  let r = {
    checked: list_size(names),
    moved,
    fresh,
    gone,
  };
  return r;
}
