import { js_stack_last } from "../../../love/public/src/js_stack_last.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
import { object_property_set } from "../../../love/public/src/object_property_set.mjs";
export function js_stack_declaration_asyncify(stack, declaration) {
  let last = js_stack_last(stack, "FunctionDeclaration");
  object_property_set(
    last,
    "async",
    property_get(last, "async") ||
      property_get(declaration, "async"),
  );
}
