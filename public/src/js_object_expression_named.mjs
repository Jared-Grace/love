import { js_object_expression_named_generic } from "../../../love/public/src/js_object_expression_named_generic.mjs";
export function js_object_expression_named(ast, search) {
  let list = js_object_expression_named_generic(
    ast,
    "ObjectExpression",
    search,
  );
  return list;
}
