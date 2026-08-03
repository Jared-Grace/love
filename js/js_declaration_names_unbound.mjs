import { arguments_assert } from "./arguments_assert.mjs";
import { js_identifiers_naming_nodes } from "./js_identifiers_naming_nodes.mjs";
import { property_get } from "./property_get.mjs";
import { list_includes } from "./list_includes.mjs";
import { js_identifier_defineds_includes } from "./js_identifier_defineds_includes.mjs";
import { not } from "./not.mjs";
import { js_visit_identifiers } from "./js_visit_identifiers.mjs";
import { list_adder_unique } from "./list_adder_unique.mjs";
export function js_declaration_names_unbound(declaration) {
  arguments_assert(arguments, 1);
  ("Every name this function reads that nothing inside it binds - what it reaches out of itself for. Asked mention by mention rather than name by name, so a name bound in one scope and read in another counts as read where nothing supplies it.");
  ("Repo function names are left in. Whether one of those counts as reaching outside is the caller's question and not this one's: a span being lifted wants them subtracted, because an import will supply them, and a reading that wants to know what a body leans on wants them kept.");
  ("A word standing for a property is not a name the span reads from outside it, and asking the shared judgment rather than a reading written here is what keeps the two from disagreeing. The reading written here knew only the key of an object being built and not the word after a dot, so a span holding one mention of a function's own spelling asked its caller for a parameter called name - which is bound nowhere at the call site, and the file it wrote threw the first time it ran.");
  let naming = js_identifiers_naming_nodes(declaration);
  function lambda3(la) {
    function lambda2(v) {
      let node = property_get(v, "node");
      let named_is = list_includes(naming, node);
      if (named_is) {
        return;
      }
      let name = property_get(node, "name");
      let a = js_identifier_defineds_includes(v, name);
      if (not(a)) {
        la(name);
      }
    }
    js_visit_identifiers(declaration, lambda2);
  }
  let missing = list_adder_unique(lambda3);
  return missing;
}
