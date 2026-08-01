import { fn_name } from "./fn_name.mjs";
import { js_call_absence_tested_name } from "./js_call_absence_tested_name.mjs";
import { functions_refusing_finders } from "./functions_refusing_finders.mjs";
import { js_call_of_any_named } from "./js_call_of_any_named.mjs";
import { repo_functions_names } from "./repo_functions_names.mjs";
import { function_parse_declaration } from "./function_parse_declaration.mjs";
import { js_list_type } from "./js_list_type.mjs";
import { property_get } from "./property_get.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
import { list_add } from "./list_add.mjs";
import { list_includes } from "./list_includes.mjs";
import { list_empty_not_is } from "./list_empty_not_is.mjs";
import { not } from "./not.mjs";
export async function functions_unreachable_check_sites() {
  "Every place a function asks whether the find-one helper found nothing. It";
  "never hands back nothing - it throws - so the asking can never be true, and";
  "the kind sentence written inside it is read by nobody it was written for.";
  "The caller is left with the general complaint that a list was not of size";
  "one, which names neither what was looked for nor what to do about it.";
  "Four of these were live at once in the register verbs, the ones a Claude";
  "reaches for most, and each had a careful sentence sitting in it unread. The";
  "twin that carries the caller's words into the finding is what was missing;";
  "with that written, this stays at zero.";
  let checkers = [fn_name("assert_json"), fn_name("null_is"), fn_name("not")];
  let finders = functions_refusing_finders();
  let f_names = await repo_functions_names("love");
  let sites = [];
  for (let f_name of f_names) {
    let parsed = await function_parse_declaration(f_name);
    let ast = property_get(parsed, "ast");
    let bound = [];
    let declarators = js_list_type(ast, "VariableDeclarator");
    for (let v of declarators) {
      let node = property_get(v, "node");
      let init = property_get_or_null(node, "init");
      let called = js_call_of_any_named(init, finders);
      if (called) {
        let id = property_get_or_null(node, "id");
        let name = property_get_or_null(id, "name");
        if (name) {
          list_add(bound, name);
        }
      }
    }
    let any_bound = list_empty_not_is(bound);
    if (not(any_bound)) {
      continue;
    }
    let calls = js_list_type(ast, "CallExpression");
    for (let v of calls) {
      let node = property_get(v, "node");
      let callee = property_get_or_null(node, "callee");
      let callee_name = property_get_or_null(callee, "name");
      let asked = js_call_absence_tested_name(node, checkers);
      let tested = list_includes(bound, asked);
      if (tested) {
        list_add(sites, {
          f_name,
          bound: asked,
          checker: callee_name,
        });
      }
    }
  }
  return sites;
}
