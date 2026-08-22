import { arguments_assert } from "./arguments_assert.mjs";
import { function_imports } from "./function_imports.mjs";
export async function app_code_lessons_review_since_lesson_imports_of(
  name,
  imports_remembered,
) {
  arguments_assert(arguments, 2);
  ("the same lesson helper is reached from several lessons, and asking the tree what a file imports means reading and parsing that file - so the answer is kept the first time it is worked out. Without this the walk parses a few thousand files instead of a few hundred and takes longer than anybody will wait");
  let remembered = imports_remembered[name];
  if (remembered) {
    return remembered;
  }
  let imported = await function_imports(name);
  imports_remembered[name] = imported;
  return imported;
}
