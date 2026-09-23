import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { fn_name } from "./fn_name.mjs";
import { ai_git_noted } from "./ai_git_noted.mjs";
import { repo_functions_names_code_includes } from "./repo_functions_names_code_includes.mjs";
import { function_call_commit } from "./function_call_commit.mjs";
import { function_fn_name_declarations_inline } from "./function_fn_name_declarations_inline.mjs";
import { list_add } from "./list_add.mjs";
export async function functions_fn_name_declarations_inline_repair() {
  "Put every marked function name that was given a line of its own back where it is read, in exactly the functions that have one.";
  "The set is found by the words such a line is written in, which catches more than it needs - a line the step must leave alone is spelled the same way - so the step itself decides, and a function it leaves unchanged is handed back as left rather than hidden.";
  "Each function is committed the moment it is done, under its own name, because a run over hundreds of files lasts long enough that somebody else's sweep takes them first.";
  await ai_git_noted();
  let names = await repo_functions_names_code_includes(
    text_combine_multiple([" = ", fn_name("fn_name"), '("']),
  );
  let done = [];
  for (let name of names) {
    let args = [name];
    await function_call_commit(function_fn_name_declarations_inline, args);
    list_add(done, name);
  }
  let left = await repo_functions_names_code_includes(
    text_combine_multiple([" = ", fn_name("fn_name"), '("']),
  );
  let r = {
    done,
    left,
  };
  return r;
}
