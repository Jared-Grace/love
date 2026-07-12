import { js_stack_last } from "./js_stack_last.mjs";
import { property_get } from "./property_get.mjs";
import { property_set } from "./property_set.mjs";
export function js_stack_declaration_asyncify(stack, declaration) {
  let last = js_stack_last(stack, "FunctionDeclaration");
  property_set(
    last,
    "async",
    property_get(last, "async") || property_get(declaration, "async"),
  );
}
