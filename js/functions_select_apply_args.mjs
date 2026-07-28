import { function_select_apply_args_auto } from "./function_select_apply_args_auto.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { ai_git_noted } from "./ai_git_noted.mjs";
import { text_split_comma } from "./text_split_comma.mjs";
import { function_call_commit } from "./function_call_commit.mjs";
import { list_add } from "./list_add.mjs";
export async function functions_select_apply_args(
  f_names_comma,
  select_fn_name,
  select_args_comma,
  apply_fn_name,
  apply_args_comma,
) {
  arguments_assert(arguments, 5);
  ("Runs one selector-and-transform pairing over several functions, naming them as");
  ("one comma-joined word. The same edit reaching a list of files is the shape a");
  ("collapse always takes: a constant with a getter is spelled out in four places");
  ("and the repair is the same three names at each of them, so running the single");
  ("command four times leaves the repetition in the history instead of in the");
  ("code.");
  ("Each function is committed as it lands rather than all of them at the end. The");
  ("names being edited are the ones other hands are most likely to be editing too,");
  ("so a run that holds its work back until it finishes is a run whose files a");
  ("sweep can take and file under a bare word. Committing smaller is the only");
  ("thing that shortens that window.");
  ("What is already noted before the first step is committed first, so a step");
  ("cannot file somebody else's uncommitted work under its own name.");
  await ai_git_noted();
  let f_names = text_split_comma(f_names_comma);
  let outputs = [];
  for (let f_name of f_names) {
    let args = [
      f_name,
      select_fn_name,
      select_args_comma,
      apply_fn_name,
      apply_args_comma,
    ];
    let output = await function_call_commit(
      function_select_apply_args_auto,
      args,
    );
    list_add(outputs, output);
  }
  return outputs;
}
