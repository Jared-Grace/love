import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { js_record_name_entries_try } from "./js_record_name_entries_try.mjs";
import { null_is } from "./null_is.mjs";
import { list_map_property } from "./list_map_property.mjs";
import { list_includes } from "./list_includes.mjs";
import { not } from "./not.mjs";
import { list_add_if_not_includes } from "./list_add_if_not_includes.mjs";
import { equal } from "./equal.mjs";
import { list_size } from "./list_size.mjs";
import { greater_than } from "./greater_than.mjs";
import { list_add } from "./list_add.mjs";
export function js_bag_pass_through_records_add_decl(
  decls,
  unpacked,
  producers,
  found,
) {
  arguments_assert(arguments, 4);
  for (let decl of decls) {
    let init = property_get(decl, "init");
    let entries = js_record_name_entries_try(init);
    if (null_is(entries)) {
      continue;
    }
    let keys = list_map_property(entries, "key");
    let bags = [];
    for (let one of unpacked) {
      let name = property_get(one, "name");
      let inside_is = list_includes(keys, name);
      if (not(inside_is)) {
        continue;
      }
      let bag = property_get(one, "bag");
      list_add_if_not_includes(bags, bag);
    }
    for (let bag of bags) {
      let taken = [];
      for (let one of unpacked) {
        let from = property_get(one, "bag");
        let same_is = equal(from, bag);
        if (not(same_is)) {
          continue;
        }
        let name = property_get(one, "name");
        let inside_is = list_includes(keys, name);
        if (not(inside_is)) {
          continue;
        }
        list_add_if_not_includes(taken, name);
      }
      let carried = list_size(taken);
      let enough_is = greater_than(carried, 2);
      if (not(enough_is)) {
        continue;
      }
      let added = [];
      for (let key of keys) {
        let inside_is = list_includes(taken, key);
        if (inside_is) {
          continue;
        }
        list_add(added, key);
      }
      let producer = null;
      for (let one of producers) {
        let name = property_get(one, "name");
        let same_is = equal(name, bag);
        if (not(same_is)) {
          continue;
        }
        producer = property_get(one, "producer");
      }
      let record = property_get(decl, "name");
      list_add(found, {
        record,
        bag,
        producer,
        keys,
        taken,
        added,
      });
    }
  }
}
