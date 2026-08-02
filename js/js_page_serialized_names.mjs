import { js_page_serializing_members } from "./js_page_serializing_members.mjs";
import { js_call_member_name_try } from "./js_call_member_name_try.mjs";
import { js_visit_type_node } from "./js_visit_type_node.mjs";
import { js_visit_function_nodes_names } from "./js_visit_function_nodes_names.mjs";
import { js_identifier_not_is } from "./js_identifier_not_is.mjs";
import { list_includes } from "./list_includes.mjs";
import { list_includes_not } from "./list_includes_not.mjs";
import { list_adder_unique } from "./list_adder_unique.mjs";
import { property_get } from "./property_get.mjs";
import { property_get_name } from "./property_get_name.mjs";
import { each } from "./each.mjs";
export function js_page_serialized_names(ast) {
  "The functions written in this file whose insides end up running inside a browser, named.";
  "A browser-driver method that runs a function in the page writes that function out as text and sends the text over. So the names the function was written against - everything imported at the top of its file - are gone by the time it runs, and a pass that rewrote one of its lines has broken it somewhere no reading of this repo reaches.";
  "A function is only counted when the file both hands it over and writes it out here. Handing over something the file received, or something a call returned, says nothing about where that thing was written, and a piece of browser code kept as text rather than as a function is not at risk at all - it was never written against this repo's names in the first place.";
  "An unnamed function written straight into the call is not counted, because there is no name to report. Nothing here is written that way today, and the question a pass should ask before rewriting is the wider one - whether the file talks to a page at all - which does count them.";
  let members = js_page_serializing_members();
  let declared = js_visit_function_nodes_names(ast);
  function lambda2(la) {
    function lambda(call) {
      let method = js_call_member_name_try(call);
      let covered_not = list_includes_not(members, method);
      if (covered_not) {
        return;
      }
      let given = property_get(call, "arguments");
      function lambda_argument(argument) {
        let plain_not = js_identifier_not_is(argument);
        if (plain_not) {
          return;
        }
        let handed = property_get_name(argument);
        let ours = list_includes(declared, handed);
        if (ours) {
          la(handed);
        }
      }
      each(given, lambda_argument);
    }
    js_visit_type_node(ast, "CallExpression", lambda);
  }
  let names = list_adder_unique(lambda2);
  return names;
}
