import { fn_name } from "./fn_name.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { global_function_property_exists } from "./global_function_property_exists.mjs";
import { not } from "./not.mjs";
import { global_function_property_set } from "./global_function_property_set.mjs";
import { global_function_property_get } from "./global_function_property_get.mjs";
import { property_exists } from "./property_exists.mjs";
import { object_property_names } from "./object_property_names.mjs";
import { list_size } from "./list_size.mjs";
import { js_codes_remembered_most } from "./js_codes_remembered_most.mjs";
import { greater_than } from "./greater_than.mjs";
import { js_code_literals_site_labels } from "./js_code_literals_site_labels.mjs";
import { property_set } from "./property_set.mjs";
import { property_get } from "./property_get.mjs";
import { json_to } from "./json_to.mjs";
import { list_map } from "./list_map.mjs";
import { identity } from "./identity.mjs";
export function js_code_literal_site_labels_remembered(code, literal) {
  arguments_assert(arguments, 2);
  ("Every job one written value is doing in a file, a word each, taken from a");
  ("reading of the whole file that is worked out once and then kept.");
  (fn_name("js_string_site_labels"),
    " answers the same thing and walks the file afresh every");
  ("time, so a caller that comes back to the same file for one value after");
  ("another pays that walk once per value. The two readings that do this ask");
  ("about four and a half thousand pairings across sixteen hundred files.");
  ("What is kept is filed under the file's own writing, so a file that has been");
  ("edited is a different question and cannot be answered out of the old reading.");
  ("That is what makes keeping it safe in something long-running, where a table");
  ("filed under a file's name would go on answering for weeks with what that file");
  ("used to say.");
  ("Kept readings are dropped altogether once there are more of them than a whole");
  ("repo's worth, rather than one at a time by age. A run that has gone past that");
  ("is not the run this was written for, and starting the table again costs the");
  ("walks over once - where choosing which one to drop costs an ordering on every");
  ("single asking.");
  ("What comes back is a fresh list each time, because the reading it is copied");
  ("from is being kept and a caller handed the kept one could quietly write into");
  ("the answer every later caller gets.");
  let known = global_function_property_exists(
    js_code_literal_site_labels_remembered,
    "tables",
  );
  if (not(known)) {
    global_function_property_set(
      js_code_literal_site_labels_remembered,
      "tables",
      {},
    );
  }
  let tables = global_function_property_get(
    js_code_literal_site_labels_remembered,
    "tables",
  );
  let read_is = property_exists(tables, code);
  if (not(read_is)) {
    let names = object_property_names(tables);
    let count = list_size(names);
    let most = js_codes_remembered_most();
    let full = greater_than(count, most);
    if (full) {
      tables = {};
      global_function_property_set(
        js_code_literal_site_labels_remembered,
        "tables",
        tables,
      );
    }
    let read = js_code_literals_site_labels(code);
    property_set(tables, code, read);
  }
  let labels_by_literal = property_get(tables, code);
  let key = json_to(literal);
  let there = property_exists(labels_by_literal, key);
  if (not(there)) {
    let r = [];
    return r;
  }
  let labels = property_get(labels_by_literal, key);
  let copy = list_map(labels, identity);
  return copy;
}
