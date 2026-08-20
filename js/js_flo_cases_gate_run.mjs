import { cases_gate_run_generic } from "./cases_gate_run_generic.mjs";
import { js_flo } from "./js_flo.mjs";
import { js_flo_cases } from "./js_flo_cases.mjs";
import { js_identifier_name_try } from "./js_identifier_name_try.mjs";
import { js_node_type } from "./js_node_type.mjs";
import { property_exists } from "./property_exists.mjs";
import { property_get } from "./property_get.mjs";
import { property_js_parse } from "./property_js_parse.mjs";
import { text_combine_space_between } from "./text_combine_space_between.mjs";
export function js_flo_cases_gate_run() {
  "QA gate: the export finder answers about each written-out module exactly as the corpus says, and stops on the two modules that do not have one export to answer about.";
  "The finding is a scan of the module's own top line, and it is right to scan rather than walk because an export cannot be anywhere else. What that buys is measured in the reading's own prose - fourteen hundred milliseconds against four, for the same answer - and nearly every reader of a function's shape comes through here, so a wrong answer here is a wrong answer everywhere.";
  "Stopping is caught and written down as one word, because the two modules that stop are being watched for stopping rather than for what they say.";
  "Throws so the dispatcher seam exits nonzero.";
  let cases = js_flo_cases();
  function found_get(declaration) {
    let kind = js_node_type(declaration);
    let named = property_exists(declaration, "id");
    if (named) {
      let id = property_get(declaration, "id");
      let name = js_identifier_name_try(id);
      let both = text_combine_space_between(kind, name);
      return both;
    }
    return kind;
  }
  function answer(c) {
    try {
      let ast = property_js_parse(c, "code");
      let declaration = js_flo(ast);
      let found = found_get(declaration);
      return found;
    } catch (e) {
      let refused = "refused";
      return refused;
    }
  }
  let r = cases_gate_run_generic(cases, answer, "found", "name", "module");
  return r;
}
