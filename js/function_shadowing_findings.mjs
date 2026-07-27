import { function_parse_declaration } from "./function_parse_declaration.mjs";
import { property_get } from "./property_get.mjs";
import { js_shadowing_names } from "./js_shadowing_names.mjs";
import { js_binding_names_shadowing } from "./js_binding_names_shadowing.mjs";
export async function function_shadowing_findings(f_name, candidates) {
  "What one function's file hides: names bound inside a scope that a scope around it already binds, and names bound over a repo function so that function stops meaning itself anywhere in the file.";
  "Both are the same bug arriving the same way, so one parse answers both. Pasted-in code brings its own declaration, and every line below it reading that name quietly gets the pasted value instead of the one it was written against.";
  "The names of every function there are have to be handed in rather than looked up here, because looking them up is the expensive half and asking one function about itself is the cheap half. A sweep over the whole repo pays for the list once and asks this many times; a person checking the function they just edited pays for it once and asks once.";
  let parsed = await function_parse_declaration(f_name);
  let ast = property_get(parsed, "ast");
  let shadows_outer = js_shadowing_names(ast);
  let shadows_function = js_binding_names_shadowing(ast, f_name, candidates);
  let finding = {
    name: f_name,
    shadows_outer,
    shadows_function,
  };
  return finding;
}
