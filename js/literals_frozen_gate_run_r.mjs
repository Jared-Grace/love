import { arguments_assert } from "./arguments_assert.mjs";
import { property_in_list_not } from "./property_in_list_not.mjs";
import { list_filter } from "./list_filter.mjs";
import { list_remove } from "./list_remove.mjs";
import { list_add } from "./list_add.mjs";
import { property_get } from "./property_get.mjs";
import { fn_name } from "./fn_name.mjs";
import { list_empty_is_assert_json } from "./list_empty_is_assert_json.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { list_size } from "./list_size.mjs";
export function literals_frozen_gate_run_r(
  recorded,
  arrived,
  gone,
  moved,
  fresh,
  names,
) {
  arguments_assert(arguments, 6);
  function lambda2(f_name) {
    let r2 = property_in_list_not(f_name, recorded, arrived);
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
