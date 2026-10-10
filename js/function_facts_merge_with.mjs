import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { object_words_new } from "./object_words_new.mjs";
import { property_initialize } from "./property_initialize.mjs";
import { property_set } from "./property_set.mjs";
import { each } from "./each.mjs";
import { list_difference } from "./list_difference.mjs";
import { list_remove_every } from "./list_remove_every.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { property_delete } from "./property_delete.mjs";
export function function_facts_merge_with(facts, data, adder) {
  arguments_assert(arguments, 3);
  ("Fold what one file says into the index everything is looked up in, putting the file's name into each list with add, which is handed the list and the name and leaves the name in the list exactly once.");
  ("Add is handed in because one file folded on its own wants to scan the list, while every file folded in one go wants to remember what each list holds - the lists of the most-used names run to thousands, and scanning one for every file that uses the name measured 2026-10-11 at most of the three seconds the index took to build.");
  let f_name = property_get(facts, "f_name");
  ("The tables keyed by names and words are records with no parent, because a word can be anything a file holds - a string reading __proto__ written into an ordinary record would swap out that record's parent rather than be stored, and constructor would read back as a function nobody stored.");
  let functions_empty = object_words_new();
  let functions = property_initialize(data, "functions", functions_empty);
  let f_this = property_initialize(functions, f_name, {});
  let async_is = property_get(facts, "async_is");
  property_set(f_this, "async", async_is);
  function data_add(property_name, items) {
    let items_empty = object_words_new();
    let items_to_functions = property_initialize(
      data,
      property_name,
      items_empty,
    );
    function identifier_add(i_name) {
      let list = property_initialize(items_to_functions, i_name, []);
      adder(list, f_name);
    }
    each(items, identifier_add);
    let items_old = property_initialize(f_this, property_name, []);
    let removals = list_difference(items_old, items);
    function lambda(item) {
      let list = property_initialize(items_to_functions, item, []);
      list_remove_every(list, f_name);
      let e = list_empty_is(list);
      if (e) {
        property_delete(items_to_functions, item);
      }
      each(removals, lambda);
    }
    property_set(f_this, property_name, items);
  }
  let identifiers = property_get(facts, "identifiers");
  data_add("identifiers", identifiers);
  let strings = property_get(facts, "strings");
  data_add("strings", strings);
  let identifiers_fn_names = property_get(facts, "identifiers_fn_names");
  data_add("identifiers_fn_names", identifiers_fn_names);
}
