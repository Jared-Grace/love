import { functions_names_to_paths } from "./functions_names_to_paths.mjs";
import { function_prose_lines } from "./function_prose_lines.mjs";
import { file_read_try } from "./file_read_try.mjs";
import { properties_get } from "./properties_get.mjs";
import { property_get } from "./property_get.mjs";
import { property_set } from "./property_set.mjs";
import { list_join_space } from "./list_join_space.mjs";
import { each_async } from "./each_async.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
export async function functions_prose() {
  "What every function in the repo says it is for, gathered into one place - the corpus a search by meaning needs and nothing had yet.";
  "A file that cannot be read is passed over rather than throwing. This runs over every function there is, and ten of these work in the same folder at once, so a file being written at the moment it is read is ordinary rather than exceptional - and losing the whole index to one of them would make the search useless exactly when the repo is busiest.";
  "A function that says nothing about itself is left out entirely, so an empty answer to a search means nobody wrote it down, not that the search was wrong.";
  let paths = await functions_names_to_paths();
  let names = properties_get(paths);
  let prose = {};
  async function each_name(f_name) {
    let path = property_get(paths, f_name);
    let code = await file_read_try(path);
    if (!code) {
      return;
    }
    let lines = function_prose_lines(code);
    let silent = list_empty_is(lines);
    if (silent) {
      return;
    }
    let joined = list_join_space(lines);
    property_set(prose, f_name, joined);
  }
  await each_async(names, each_name);
  return prose;
}
