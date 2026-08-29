import { arguments_assert } from "./arguments_assert.mjs";
import { function_parse_declaration } from "./function_parse_declaration.mjs";
import { property_get } from "./property_get.mjs";
import { js_identifiers_names } from "./js_identifiers_names.mjs";
import { list_concat } from "./list_concat.mjs";
import { functions_names } from "./functions_names.mjs";
import { list_remove_all_multiple } from "./list_remove_all_multiple.mjs";
import { js_identifier_unique } from "./js_identifier_unique.mjs";
import { js_identifier_rename } from "./js_identifier_rename.mjs";
import { each } from "./each.mjs";
import { js_function_declaration_params_names } from "./js_function_declaration_params_names.mjs";
import { each_pair } from "./each_pair.mjs";
export async function js_expand_generic_declaration_renamed(
  name,
  a_names,
  ast,
) {
  "The written-out declaration of the function about to be inlined, with every name inside it already made safe to stand in the caller.";
  "TWO RENAMINGS HAPPEN HERE AND THEY ARE OPPOSITE. Every name the caller already uses is moved OUT OF THE WAY inside the child, so a local of the same word in both cannot be read as one. Then every parameter of the child is renamed TO the argument the caller handed it, which is what makes the child's lines say what the call said.";
  "THE NAMES MOVED OUT OF THE WAY ARE PICKED AGAINST BOTH SIDES AT ONCE, because a new word has to be unused in the caller and unused in the child - a word free in one of them and taken in the other would collide the moment the two bodies stood together.";
  "THE DECLARATION IS WHAT COMES BACK RATHER THAN THE WHOLE TREE, because the renaming is done in place: whoever holds the tree already holds the change, and the only piece the caller goes on to read is the body.";
  arguments_assert(arguments, 3);
  let v = await function_parse_declaration(name);
  let ast_call = property_get(v, "ast");
  let declaration = property_get(v, "declaration");
  let identifiers_call = js_identifiers_names(ast_call);
  let identifiers = js_identifiers_names(ast);
  let identifiers_all = list_concat(identifiers, identifiers_call);
  let f_names = await functions_names();
  list_remove_all_multiple(f_names, identifiers_all);
  function lambda2(i) {
    let unique = js_identifier_unique(identifiers_all, i);
    js_identifier_rename(ast_call, i, unique);
  }
  each(identifiers, lambda2);
  let params_names = js_function_declaration_params_names(declaration);
  function lambda3(param_name, a_name) {
    js_identifier_rename(ast_call, param_name, a_name);
  }
  each_pair(params_names, a_names, lambda3);
  return declaration;
}
