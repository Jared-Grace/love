import { arguments_assert } from "./arguments_assert.mjs";
import { fn_name } from "./fn_name.mjs";
import { repo_functions_names_code_includes } from "./repo_functions_names_code_includes.mjs";
import { app_code_lesson_prose_colon_function_repair } from "./app_code_lesson_prose_colon_function_repair.mjs";
import { list_add } from "./list_add.mjs";
export async function app_code_lesson_prose_colon_repair() {
  arguments_assert(arguments, 0);
  ("Go over every screen of the code lessons and put a colon on each line of writing that has a block of code drawn under it, then say which screens were changed.");
  ("It finds its own set rather than being handed one. The screens that need it are exactly the screens that write a line and draw code beneath it, and that is a question the code can answer about itself - so there is no list to keep up to date and no way for the list to fall behind the lessons.");
  ("Running it again changes nothing, because a line that has its colon is left alone. That is what lets it be run after writing a new lesson without anyone having to work out whether it is needed.");
  let repo = "love";
  let prose_fn = fn_name("html_div_cycle_code");
  let names = await repo_functions_names_code_includes(repo, prose_fn);
  let repaired = [];
  let added_all = 0;
  for (let f_name of names) {
    let added = await app_code_lesson_prose_colon_function_repair(f_name);
    if (added) {
      list_add(repaired, {
        f_name,
        added,
      });
      added_all = added_all + added;
    }
  }
  let report = {
    walked: names.length,
    added: added_all,
    repaired,
  };
  return report;
}
