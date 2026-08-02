import { object_property_names } from "./object_property_names.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { functions_names_to_paths } from "./functions_names_to_paths.mjs";
import { file_read } from "./file_read.mjs";
import { catch_null_async } from "./catch_null_async.mjs";
import { list_map_unordered_async } from "./list_map_unordered_async.mjs";
import { list_join_comma } from "./list_join_comma.mjs";
import { list_filter } from "./list_filter.mjs";
import { list_size } from "./list_size.mjs";
import { list_add } from "./list_add.mjs";
import { property_get } from "./property_get.mjs";
import { property_set } from "./property_set.mjs";
import { greater_than } from "./greater_than.mjs";
import { equal } from "./equal.mjs";
export async function functions_code_offenders_generic(reader, found_key) {
  arguments_assert(arguments, 2);
  ("Every function in the repo whose written-out source the given reader finds");
  ("something in, each named beside what was found there under the name asked for.");
  ("Receives the reading rather than doing one, because the sweep around it is the");
  ("part that is the same every time and the hard part to get right: read each file,");
  ("let a torn one be skipped instead of counted, say out loud how many were skipped,");
  ("and hand back only the functions with something to answer for.");
  ("Two sweeps had this written out twice, and copying it is how a third would be");
  ("written. That matters more than the twenty-odd lines, because the piece most");
  ("worth not copying is the skip: a file that will not parse is not an answer to any");
  ("of these questions and must not become one, and a reader that threw on its very");
  ("first name once had all eighteen hundred files quietly skipped - which reads as a");
  ("repo with nothing wrong in it, the most reassuring shape a total failure can");
  ("wear. Counting the skipped ones out loud is the whole defence, and it now exists");
  ("in one place rather than once per sweep.");
  ("The name the finding is filed under is asked for rather than fixed, because each");
  ("sweep's own callers already read it by a word of their own.");
  let paths = await functions_names_to_paths();
  let f_names = object_property_names(paths);
  let unreadable = [];
  async function measure(f_name) {
    let f_path = property_get(paths, f_name);
    async function read() {
      let code = await file_read(f_path);
      let found_inner = reader(code);
      return found_inner;
    }
    let found = await catch_null_async(read);
    let skipped_is = equal(found, null);
    if (skipped_is) {
      list_add(unreadable, f_name);
    }
    let told = {
      f_name,
    };
    let filed = found ? found : [];
    property_set(told, found_key, filed);
    return told;
  }
  let measured = await list_map_unordered_async(f_names, measure);
  ("How many were looked at is said even when nothing was found, because nothing");
  ("found is the answer these sweeps give on a good day and it is also the answer a");
  ("sweep gives when it has stopped visiting anything. One number told beside it");
  ("separates the two, and it costs a line.");
  console.log("looked at " + f_names.length + " functions");
  let unread = list_size(unreadable);
  let any_unread = greater_than(unread, 0);
  if (any_unread) {
    let joined = list_join_comma(unreadable);
    console.log(
      "UNREADABLE  " + unread + " of " + f_names.length + "  " + joined,
    );
  }
  function any_lambda(m) {
    let found = property_get(m, found_key);
    let any = greater_than(found.length, 0);
    return any;
  }
  let offenders = list_filter(measured, any_lambda);
  return offenders;
}
