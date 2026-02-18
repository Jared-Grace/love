import { js_object_expression_named_generic } from "../../../love/public/src/js_object_expression_named_generic.mjs";
export function js_array_expression_named(ast, search) {
  let list2 = js_object_expression_named_generic(
    ast,
    "ArrayExpression",
    search,
  );
  return list2;
}
