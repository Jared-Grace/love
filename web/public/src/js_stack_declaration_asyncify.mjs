import { js_stack_last } from "./js_stack_last.mjs";
import { object_property_get } from "./object_property_get.mjs";
import { object_property_set } from "./object_property_set.mjs";
export function js_stack_declaration_asyncify(stack, declaration) {
  let last = js_stack_last(stack, "FunctionDeclaration");
  object_property_set(
    last,
    "async",
    object_property_get(last, "async") ||
      object_property_get(declaration, "async"),
  );
}
