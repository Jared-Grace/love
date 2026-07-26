import { list_filter } from "./list_filter.mjs";
import { js_function_marker_call_not_is } from "./js_function_marker_call_not_is.mjs";
import { js_member_key_nodes } from "./js_member_key_nodes.mjs";
import { js_function_declaration_name } from "./js_function_declaration_name.mjs";
import { js_function_declaration_params_names } from "./js_function_declaration_params_names.mjs";
import { js_declared_names } from "./js_declared_names.mjs";
import { js_function_declaration_statements_doing } from "./js_function_declaration_statements_doing.mjs";
import { js_visit_identifiers_nodes } from "./js_visit_identifiers_nodes.mjs";
import { js_unparse } from "./js_unparse.mjs";
import { property_get } from "./property_get.mjs";
import { property_set } from "./property_set.mjs";
import { property_get_name } from "./property_get_name.mjs";
import { list_concat } from "./list_concat.mjs";
import { list_add } from "./list_add.mjs";
import { list_includes } from "./list_includes.mjs";
import { property_exists } from "./property_exists.mjs";
export function js_function_shape(declaration) {
  "What a function does, with everything that only says who wrote it taken away. Two functions doing the same thing land on the same text however differently they were spelled.";
  "Four things are taken away and no more. The name of the function, because that is the very thing being asked about - two names for one job is the answer, not the question. The names it gives its own parameters and workings, because a name a reader never sees from outside carries no meaning to compare. The sentences of prose, because a description differing is not the work differing. And the marks a body carries for a reader, because a mark is something said about the work rather than a part of it.";
  "Leaving the marks in would be worse than useless here. A mark saying two functions are alike on purpose would itself make them unalike, so marking one of a pair would split the pair and the finding would vanish rather than be answered - the one failure worse than a wrong answer, which is no answer where an answer was expected.";
  "Everything else stays, above all the names of the other functions it calls. Those are what it does. Blanking them too would make every function of the same length look alike, and the answer would be noise.";
  "Order of first appearance is what numbers the blanks, so the numbering is a property of the work rather than of the order somebody happened to declare things in.";
  "The word after a dot is left alone even when it reads exactly like a private name, and it often does - a function that asks a list whether it includes something calls the answer includes. Blanking that word too made four separate roundings of a number look like one function, and made asking a list whether it holds something identical to cutting a piece out of some words.";
  let own = js_function_declaration_name(declaration);
  let params = js_function_declaration_params_names(declaration);
  let locals = js_declared_names(declaration);
  let b = list_concat(params, locals);
  let personal = list_concat([own], b);
  let block = property_get(declaration, "body");
  let doing = js_function_declaration_statements_doing(declaration);
  let working = list_filter(doing, js_function_marker_call_not_is);
  property_set(block, "body", working);
  let keys = js_member_key_nodes(declaration);
  let blanks = {};
  let taken = [];
  function blanked(node) {
    let key_is = list_includes(keys, node);
    if (key_is) {
      return;
    }
    let name = property_get_name(node);
    let personal_is = list_includes(personal, name);
    if (personal_is) {
      let known = property_exists(blanks, name);
      if (known) {
        let already = property_get(blanks, name);
        property_set(node, "name", already);
        return;
      }
      let blank = "_" + taken.length;
      list_add(taken, name);
      blanks[name] = blank;
      property_set(node, "name", blank);
    }
  }
  js_visit_identifiers_nodes(declaration, blanked);
  let shape = js_unparse(declaration);
  return shape;
}
