import { arguments_assert } from "./arguments_assert.mjs";
import { repo_functions_names_code_includes } from "./repo_functions_names_code_includes.mjs";
import { fn_name } from "./fn_name.mjs";
import { list_unique } from "./list_unique.mjs";
import { list_concat } from "./list_concat.mjs";
import { app_learn_js_lesson_prose_true_code_function_repair } from "./app_learn_js_lesson_prose_true_code_function_repair.mjs";
import { list_add } from "./list_add.mjs";
export async function app_learn_js_lesson_prose_true_code_repair() {
  arguments_assert(arguments, 0);
  ("Go over every screen of the code lessons and write each true and false in their writing as code, then say which screens were changed.");
  ("It finds its own set: the functions that hand writing to a drawer that alternates plain and code. Running it again changes nothing, so it can be run after writing a new lesson.");
  let repo = "love";
  let cycling = await repo_functions_names_code_includes(
    repo,
    fn_name("app_learn_js_div_cycle_code"),
  );
  let remembering = await repo_functions_names_code_includes(
    repo,
    fn_name("app_learn_js_remember_from_lesson"),
  );
  let list = list_concat(cycling, remembering);
  let names = list_unique(list);
  let repaired = [];
  let split_all = 0;
  for (let f_name of names) {
    let split =
      await app_learn_js_lesson_prose_true_code_function_repair(f_name);
    if (split) {
      list_add(repaired, {
        f_name,
        split,
      });
      split_all = split_all + split;
    }
  }
  let report = {
    walked: names.length,
    split: split_all,
    repaired,
  };
  return report;
}
