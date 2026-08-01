import { property_exists_not } from "./property_exists_not.mjs";
import { list_includes_not } from "./list_includes_not.mjs";
import { fn_name } from "./fn_name.mjs";
import { property_get } from "./property_get.mjs";
import { list_map } from "./list_map.mjs";
import { list_filter } from "./list_filter.mjs";
import { list_remove } from "./list_remove.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { literals_frozen_values } from "./literals_frozen_values.mjs";
import { literals_frozen_path } from "./literals_frozen_path.mjs";
import { file_read_json } from "./file_read_json.mjs";
import { list_concat_unique } from "./list_concat_unique.mjs";
import { property_or_null } from "./property_or_null.mjs";
import { not_equal } from "./not_equal.mjs";
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
  let now = await literals_frozen_values();
  let path = literals_frozen_path();
  let recorded = await file_read_json(path);
  let a = Object.keys(now);
  let b = Object.keys(recorded);
  let names = list_concat_unique(a, b);
  ("A name the record has never held is told apart from one whose value has moved, because only the second is the thing described above. Counting them together made adding a frozen constant fail as though a published value had changed under it - the case this says in its own words it is not watching - and the repair offered was the heavy command, so a rare and deliberate act was being asked for every time somebody named a new one.");
  let fresh = [];
  let gone = [];
  let moved = [];
  for (let f_name of names) {
    let was = property_or_null(recorded, f_name);
    let is = property_or_null(now, f_name);
    let different = not_equal(was, is);
    if (different) {
      let unheard = property_exists_not(recorded, f_name);
      if (unheard) {
        list_add(fresh, f_name);
        continue;
      }
      ("A name the code no longer has is the mirror of the one above and just as harmless on its own: the name moved and the value stood still, where the danger is the value moving and the name standing still. Renaming a frozen constant makes BOTH at once - the old name leaves and the new one arrives carrying the same value - and until this the leaving half was read as a value that had vanished, which is the loud branch. So renaming two of them cost the heavy command twice for a change that published nothing new.");
      let departed = property_exists_not(now, f_name);
      if (departed) {
        list_add(gone, f_name);
        continue;
      }
      list_add(moved, {
        f_name,
        was,
        is,
      });
    }
  }
  ("What keeps that from becoming a hole: a name may only leave quietly if the value it held has ARRIVED somewhere else in the same breath. Renamed and changed at once - the old name gone, the new one carrying a different value - would otherwise be two harmless-looking halves adding up to exactly the edit this exists to catch, so a departure whose value is nowhere among the arrivals stays loud.");
  function lambda(f_name) {
    let value = property_get(now, f_name);
    return value;
  }
  let arrived = list_map(fresh, lambda);
  function lambda2(f_name) {
    let was = property_get(recorded, f_name);
    let n = list_includes_not(arrived, was);
    return n;
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
  list_empty_is_assert_json(moved, {
    hint: text_combine_multiple([
      "a frozen value is not what the record says - if the change was meant, write the record again with ",
      fn_name("literals_frozen_write"),
      " so it stands in the commit; if it was not, put the old value back",
    ]),
    moved,
  });
  list_empty_is_assert_json(fresh, {
    hint: text_combine_multiple([
      "a frozen constant the record has never held - nothing has moved, so record it with ",
      fn_name("literals_frozen_record_new"),
      " which only ever adds a name the record is missing and cannot touch a value it already holds",
    ]),
    fresh,
  });
  list_empty_is_assert_json(gone, {
    hint: text_combine_multiple([
      "a frozen constant the code no longer has, whose value arrived under another name in the same breath - a rename, so nothing published has changed. Clear the old name with ",
      fn_name("literals_frozen_record_new"),
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
