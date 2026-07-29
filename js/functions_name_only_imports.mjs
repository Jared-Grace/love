import { list_add } from "./list_add.mjs";
import { list_size } from "./list_size.mjs";
import { list_join_comma } from "./list_join_comma.mjs";
import { equal } from "./equal.mjs";
import { functions_names_to_paths } from "./functions_names_to_paths.mjs";
import { js_code_name_only_imports } from "./js_code_name_only_imports.mjs";
import { file_read } from "./file_read.mjs";
import { list_map_unordered_async } from "./list_map_unordered_async.mjs";
import { property_get } from "./property_get.mjs";
import { list_filter } from "./list_filter.mjs";
import { greater_than } from "./greater_than.mjs";
import { catch_null_async } from "./catch_null_async.mjs";
export async function functions_name_only_imports() {
  "Every function that imports a name only to read the word it is called, with the names it does that to";
  "Each one is a road nothing travels: the import is real, so everything the named function reaches counts as reachable from here, while the code never calls it. One line of prose written this way put an entire download chain inside a game screen's reach and turned a gate red for everybody";
  let paths = await functions_names_to_paths();
  let f_names = Object.keys(paths);
  let unreadable = [];
  async function measure(f_name) {
    let f_path = property_get(paths, f_name);
    async function read() {
      let code = await file_read(f_path);
      let names_inner = js_code_name_only_imports(code);
      return names_inner;
    }
    ("A file that will not parse is not an answer to this question and must not be");
    ("allowed to become one. It is skipped rather than counted, because a torn or");
    ("half-written file says nothing about how anybody wrote their imports");
    ("What is skipped is counted and said out loud, because a swallowed failure and");
    ("a clean sweep leave exactly the same empty list. This reader threw on its very");
    ("first name and every one of the eighteen hundred files was quietly skipped -");
    ("which read as a repo with nothing wrong in it, the most reassuring possible");
    ("shape for a total failure to wear");
    let names = await catch_null_async(read);
    let skipped_is = equal(names, null);
    if (skipped_is) {
      list_add(unreadable, f_name);
    }
    let told = {
      f_name,
      names: names ? names : [],
    };
    return told;
  }
  let measured = await list_map_unordered_async(f_names, measure);
  let unread = list_size(unreadable);
  let any_unread = greater_than(unread, 0);
  if (any_unread) {
    let joined = list_join_comma(unreadable);
    console.log(
      "UNREADABLE  " + unread + " of " + f_names.length + "  " + joined,
    );
  }
  function any_lambda(m) {
    let names = property_get(m, "names");
    let any = greater_than(names.length, 0);
    return any;
  }
  let offenders = list_filter(measured, any_lambda);
  return offenders;
}
