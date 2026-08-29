import { arguments_assert } from "./arguments_assert.mjs";
import { functions_names_to_paths } from "./functions_names_to_paths.mjs";
import { object_property_names } from "./object_property_names.mjs";
import { property_get } from "./property_get.mjs";
import { file_read } from "./file_read.mjs";
import { catch_null_async } from "./catch_null_async.mjs";
import { equal } from "./equal.mjs";
import { list_add } from "./list_add.mjs";
import { property_set } from "./property_set.mjs";
import { list_map_unordered_async } from "./list_map_unordered_async.mjs";
import { list_size } from "./list_size.mjs";
import { greater_than } from "./greater_than.mjs";
import { list_join_comma } from "./list_join_comma.mjs";
import { list_filter } from "./list_filter.mjs";
export async function functions_code_offenders_walked_generic(
  reader,
  found_key,
) {
  arguments_assert(arguments, 2);
  ("Every function in the repo whose written-out source the given reader finds something in, each named beside what was found there under the name asked for - handed back together with how many functions were walked to find them and which of those could not be read.");
  ("THE COUNT COMES BACK RATHER THAN ONLY BEING PRINTED, which is the whole reason this stands beside the sweep it was lifted out of. A sweep that finds nothing and a sweep that has been pointed at a folder that moved say exactly the same word, and the only thing that has ever separated them is a number of things walked falling to nothing while the verdict stays green. Printing that number tells a person watching a terminal and tells nobody else - in particular it does not reach the gate standing on the sweep, which is the one place the difference decides whether a repo is still being checked.");
  ("The sweep next door keeps its old shape and asks this one, so every reading already standing on it goes on receiving a plain list of offenders. That is deliberate: a count is worth having in about twenty places and worth breaking in none of them, and a caller that wants it says so by name.");
  ("A file the reader cannot read in is passed over and named among the unreadable rather than counted as an answer. A reader that fell over on its very first file once had all eighteen hundred quietly skipped, which reads as a repo with nothing wrong in it - the most reassuring shape a total failure can wear.");
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
  let walked = list_size(f_names);
  console.log("looked at " + walked + " functions");
  let unread = list_size(unreadable);
  let any_unread = greater_than(unread, 0);
  if (any_unread) {
    let joined = list_join_comma(unreadable);
    console.log("UNREADABLE  " + unread + " of " + walked + "  " + joined);
  }
  function any_lambda(m) {
    let found = property_get(m, found_key);
    let any = greater_than(found.length, 0);
    return any;
  }
  let offenders = list_filter(measured, any_lambda);
  let r = {
    walked,
    unreadable,
    offenders,
  };
  return r;
}
