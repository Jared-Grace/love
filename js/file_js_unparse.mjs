import { equal } from "./equal.mjs";
import { property_get } from "./property_get.mjs";
import { file_overwrite } from "./file_overwrite.mjs";
import { js_unparse } from "./js_unparse.mjs";
import { js_format } from "./js_format.mjs";
import { js_code_comments_none_assert } from "./js_code_comments_none_assert.mjs";
export async function file_js_unparse(parsed) {
  let code = property_get(parsed, "code");
  let ast = property_get(parsed, "ast");
  let f_path = property_get(parsed, "f_path");
  let code_unparsed = await js_unparse(ast);
  let code_new = await js_format(code_unparsed);
  if (equal(code_new, code)) {
    return;
  }
  ("the check sits after the decision to write, not before it. A file holding comments that nothing is changing loses nothing and should not be refused - it is only the write that destroys them, so it is only the write that has to be earned");
  js_code_comments_none_assert(code, f_path);
  await file_overwrite(f_path, code_new);
}
