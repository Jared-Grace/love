import { fn_name } from "./fn_name.mjs";
import { text_split_comma_dot_trim } from "./text_split_comma_dot_trim.mjs";
import { function_dependency_path } from "./function_dependency_path.mjs";
import { catch_null_async } from "./catch_null_async.mjs";
import { property_set } from "./property_set.mjs";
export async function functions_dependency_path(names_comma, f_name_to) {
  "The shortest run of imports from each of several functions down to one other function, asked in one command - one answer per starting name, and nothing against a name that cannot reach it at all.";
  ("The question is almost never asked about one starting point. It is asked about every app at once, or about every function holding a standing approval at once, because what is really being asked is whether anything in a whole family reaches something it must not - and the log shows exactly that, twenty-five apps traced to ",
    fn_name("file_overwrite_buffer"),
    " one command at a time, then the same twenty-five again.");
  ("Each starting point still costs its own walk, because a walk follows the imports out of the one name it started at and two starting points share none of it. What this saves is the twenty-four process starts around the twenty-five walks, which on this repo is the larger half.");
  ("A name nothing answers to is reported as nothing rather than thrown on, so one misspelt word cannot throw away the walks already paid for. That is also why nothing and no-path read the same here: both mean this name does not reach the target, and a starting point that does not exist does not reach anything.");
  let names = text_split_comma_dot_trim(names_comma);
  let found = {};
  for (let f_name of names) {
    async function path_one() {
      let path_found = await function_dependency_path(f_name, f_name_to);
      return path_found;
    }
    let path = await catch_null_async(path_one);
    property_set(found, f_name, path);
  }
  return found;
}
