import { js_page_serializing_members } from "./js_page_serializing_members.mjs";
import { js_call_member_name_try } from "./js_call_member_name_try.mjs";
import { js_visit_type_node } from "./js_visit_type_node.mjs";
import { list_includes } from "./list_includes.mjs";
export function js_page_serializing_call_is(ast) {
  "Whether this file calls a browser-driver method that runs what it is given inside the page.";
  "Asked before a pass rewrites anything in a file. A function handed to one of those methods is written out as text and run in a browser, where the imports at the top of its file do not exist - so a rewritten line lands there as a call to something undefined, and the only sign of it is a browser test failing for a reason no reading of this repo explains.";
  "The whole file answers yes, not just the function handed over. That is deliberately more than is strictly at risk: a file that talks to a page this way is a handful of lines about a browser, so leaving all of it alone costs almost nothing, while working out exactly which lines end up in the browser is the sort of judgement a pass should not be making on its own.";
  let members = js_page_serializing_members();
  let serializes = false;
  function lambda(call) {
    let method = js_call_member_name_try(call);
    let covered = list_includes(members, method);
    if (covered) {
      serializes = true;
    }
  }
  js_visit_type_node(ast, "CallExpression", lambda);
  return serializes;
}
