import { arguments_assert } from "./arguments_assert.mjs";
import { js_parse } from "./js_parse.mjs";
import { js_name_only_imports } from "./js_name_only_imports.mjs";
export function js_code_name_only_imports(code) {
  arguments_assert(arguments, 1);
  "The names a written file imports and then uses for nothing but their own spelling";
  "The reading itself is asked of the parsed file, so a transform that has to change these can ask the same question without writing the file out and reading it back";
  let ast = js_parse(code);
  let only = js_name_only_imports(ast);
  return only;
}
