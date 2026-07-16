import { arguments_assert } from "./arguments_assert.mjs";
import { file_js_parse } from "./file_js_parse.mjs";
import { property_get } from "./property_get.mjs";
import { file_js_unparse } from "./file_js_unparse.mjs";
export async function file_js_transform(f_path, lambda$ast) {
  arguments_assert(arguments, 2);
  let parsed = await file_js_parse(f_path);
  let ast = property_get(parsed, "ast");
  await lambda$ast(ast);
  await file_js_unparse(parsed);
}
