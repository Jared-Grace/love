import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_lesson_prose_colon_ast_add } from "./app_code_lesson_prose_colon_ast_add.mjs";
import { function_transform } from "./function_transform.mjs";
export async function app_code_lesson_prose_colon_function_repair(f_name) {
  arguments_assert(arguments, 1);
  ("Put the missing colons on one function's lesson writing, and hand back how many were added there.");
  ("The count is carried out through a name written beside the change rather than returned from inside it, because what does the changing is handed over to be run and only says afterwards what the file looks like. A sweep wanting to report which screens it touched has no other way to learn it, and counting the files that ended up different would not answer the same question - a file may be left different by a peer.");
  let added = 0;
  function lambda$ast(ast) {
    added = app_code_lesson_prose_colon_ast_add(ast);
  }
  await function_transform(f_name, lambda$ast);
  return added;
}
