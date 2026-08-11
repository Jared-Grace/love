import { arguments_assert } from "./arguments_assert.mjs";
import { function_transform_imports } from "./function_transform_imports.mjs";
import { app_code_lesson_name_id_category_then_rewrite } from "./app_code_lesson_name_id_category_then_rewrite.mjs";
export async function app_code_lesson_name_id_category_then_file(f_name) {
  arguments_assert(arguments, 1);
  ("Puts one named lesson onto the shared unit and leaves its file able to run: the unit it now calls gets its import written, and the one it stopped calling loses hers.");
  ("What the rewrite found is handed back rather than the rewriting, because a run over many of these is read afterwards by what it says it did.");
  let report = null;
  async function lambda(ast) {
    report = app_code_lesson_name_id_category_then_rewrite(ast);
  }
  await function_transform_imports(f_name, lambda);
  return report;
}
