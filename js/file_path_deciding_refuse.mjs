import { arguments_assert } from "./arguments_assert.mjs";
import { function_import_relative } from "./function_import_relative.mjs";
import { fn_name } from "./fn_name.mjs";
export async function file_path_deciding_refuse(file_path) {
  "$plain file_path";
  "Throws when this path decides what runs without asking, so every step that changes a file can ask the same question.";
  "The disk half is asked for by name and not imported, so a page that merely mentions a file step carries none of it.";
  arguments_assert(arguments, 1);
  let fn = await function_import_relative(
    fn_name("file_path_deciding_refuse_node"),
  );
  await fn(file_path);
}
