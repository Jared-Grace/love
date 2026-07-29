import { repo_functions_names } from "./repo_functions_names.mjs";
import { function_name_to_path_relative } from "./function_name_to_path_relative.mjs";
import { file_read } from "./file_read.mjs";
import { js_top_level_broken_comments_from_code } from "./js_top_level_broken_comments_from_code.mjs";
import { list_map_unordered_async } from "./list_map_unordered_async.mjs";
import { list_filter_null_not_is } from "./list_filter_null_not_is.mjs";
import { greater_than } from "./greater_than.mjs";
export async function functions_top_level_broken_comments() {
  "Every love function whose file opens with a comment that has been torn into running code. Sweeping for it is what makes the shape a rule rather than a habit, because the one that breaks a load is found the same way as the one that merely reads as fragments.";
  "Every file is opened at once rather than one after another. Waiting for each read in turn made this the slowest check in the suite by a wide margin, and a check nobody wants to wait for is one that gets left out.";
  let names = await repo_functions_names("love");
  async function offender_of(name) {
    let f_path = function_name_to_path_relative(name);
    let code = await file_read(f_path);
    let kinds = js_top_level_broken_comments_from_code(code);
    let any = greater_than(kinds.length, 0);
    if (any) {
      let offender = {
        name,
        kinds,
      };
      return offender;
    }
    return null;
  }
  let offenders = await list_map_unordered_async_filter_null_not_is(
    names,
    offender_of,
  );
  return offenders;
}
