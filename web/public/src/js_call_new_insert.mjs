import { js_stack_declaration_asyncify } from "../../../love/public/src/js_stack_declaration_asyncify.mjs";
import { js_imports_missing_add } from "../../../love/public/src/js_imports_missing_add.mjs";
import { list_insert } from "../../../love/public/src/list_insert.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
import { js_call_new } from "../../../love/public/src/js_call_new.mjs";
export async function js_call_new_insert(
  f_name_call,
  ast,
  stack2,
  index,
  stack,
) {
  let v2 = await js_call_new(f_name_call, ast);
  let parsed = property_get(v2, "parsed");
  let declaration = property_get(v2, "declaration");
  list_insert(stack2, index, parsed);
  await js_imports_missing_add(ast);
  js_stack_declaration_asyncify(stack, declaration);
  return parsed;
}
