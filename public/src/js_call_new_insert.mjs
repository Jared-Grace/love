import { js_stack_declaration_asyncify } from "../../../love/public/src/js_stack_declaration_asyncify.mjs";
import { js_imports_missing_add_all } from "../../../love/public/src/js_imports_missing_add_all.mjs";
import { list_insert } from "../../../love/public/src/list_insert.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
import { js_call_new } from "../../../love/public/src/js_call_new.mjs";
export async function js_call_new_insert(
  f_name_call,
  ast,
  stack_,
  index,
  stack,
) {
  let v = await js_call_new(f_name_call, ast);
  let parsed = property_get(v, "parsed");
  let declaration = property_get(v, "declaration");
  list_insert(stack_, index, parsed);
  await js_imports_missing_add_all(ast);
  js_stack_declaration_asyncify(stack, declaration);
  return parsed;
}
