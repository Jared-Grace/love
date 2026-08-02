import { fn_name } from "./fn_name.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { each } from "./each.mjs";
import { list_add } from "./list_add.mjs";
import { list_add_if_not_includes } from "./list_add_if_not_includes.mjs";
import { list_unique } from "./list_unique.mjs";
import { list_difference } from "./list_difference.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { list_remove_every } from "./list_remove_every.mjs";
import { property_delete } from "./property_delete.mjs";
import { property_get } from "./property_get.mjs";
import { property_initialize } from "./property_initialize.mjs";
import { property_set } from "./property_set.mjs";
export function function_facts_merge(facts, data) {
  arguments_assert(arguments, 2);
  ("Fold what one file says into the index everything is looked up in.");
  ("The cheap half. It touches lists and records and never opens a file, so it");
  ("runs the same whether the facts were read off the disk a moment ago or kept");
  ("from the last time the file was seen unchanged.");
  let f_name = property_get(facts, "f_name");
  let functions = property_initialize(data, "functions", {});
  let f_this = property_initialize(functions, f_name, {});
  let async_is = property_get(facts, "async_is");
  property_set(f_this, "async", async_is);
  function data_add(property_name, items) {
    let items_to_functions = property_initialize(data, property_name, {});
    let items_old = property_initialize(f_this, property_name, []);
    ("What this file said last time is read before anything is added, because whether it said anything at all is what decides how the adding is done.");
    ("Asking each list whether it already names this file is a scan of that whole list, and the lists are as long as the number of files using the name. ",
      fn_name("property_get"),
      " is named in about four thousand files, so folding it alone compared four thousand names against four thousand names. Measured over the whole repo that was 553 ms of the 1.8 s a transform waits, paid by every command that looks anything up.");
    ("A file that has said nothing about this kind of thing before cannot already be in any of these lists - only its own earlier fold could have put it there, and that fold added it to exactly the items it named then, which is the list read just above. So when that list is empty the answer to every one of those scans is known in advance, and the name is simply added. Same index, 94 ms.");
    ("The items are made unique first because a file may say the same string twice, and the scan was silently doing that job too. Without it the shortcut writes the file's name in twice.");
    let first_time = list_empty_is(items_old);
    let items_unique = list_unique(items);
    function identifier_add(i_name) {
      let list = property_initialize(items_to_functions, i_name, []);
      if (first_time) {
        list_add(list, f_name);
        return;
      }
      list_add_if_not_includes(list, f_name);
    }
    each(items_unique, identifier_add);
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
