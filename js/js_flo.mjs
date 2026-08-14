import { list_adder_single } from "./list_adder_single.mjs";
import { property_get } from "./property_get.mjs";
import { js_node_type_is } from "./js_node_type_is.mjs";
import { each } from "./each.mjs";
export function js_flo(ast) {
  "The one function a module hands out, found by looking along the module's own top line rather than by walking everything under it.";
  "An export is only legal where a module says what it is - directly in its body - so nothing below the top line can ever be one, and a walk that goes down there is a walk looking where the answer cannot be. That is the whole of why this is sound; it is a fact about the language rather than about how this repo happens to write its files.";
  "Measured over this repo's nine thousand files, 2026-08-14: fourteen hundred and eighty-five milliseconds walking against four scanning, for the very same node every single time - not an equal one, the same one. Nearly everything that reads a function's shape comes through here, and three of the readers ask twice over, so the walk was being paid tens of thousands of times a gate.";
  "The counting is left exactly as it was. A module holding no exported function, or two, still stops here rather than being answered about, and it stops with the same words - only what is counted has narrowed.";
  function lambda2(la) {
    function lambda(node) {
      let exported = js_node_type_is(node, "ExportNamedDeclaration");
      if (exported) {
        la(node);
      }
    }
    let body = property_get(ast, "body");
    each(body, lambda);
  }
  let r = list_adder_single(lambda2);
  let declaration = property_get(r, "declaration");
  return declaration;
}
