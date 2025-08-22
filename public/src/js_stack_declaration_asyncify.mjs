import { js_stack_last } from "./js_stack_last.mjs";
import { js_declaration_asyncify } from "./js_declaration_asyncify.mjs";
import { object_property_get } from "./object_property_get.mjs";
import { object_property_set } from "./object_property_set.mjs";
import { list_last } from "./list_last.mjs";
import { js_node_type_is } from "./js_node_type_is.mjs";
import { js_node_is } from "./js_node_is.mjs";
import { list_filter } from "./list_filter.mjs";
export function js_stack_declaration_asyncify(stack, declaration) {
  let last = js_stack_last(stack, "FunctionDeclaration");
  object_property_set(
    last,
    "async",
    object_property_get(last, "async") ||
      object_property_get(declaration, "async"),
  );
}
