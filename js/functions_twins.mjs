import { repo_functions_names } from "./repo_functions_names.mjs";
import { function_parse_declaration } from "./function_parse_declaration.mjs";
import { property_get } from "./property_get.mjs";
import { js_declaration_signature } from "./js_declaration_signature.mjs";
import { text_empty_is } from "./text_empty_is.mjs";
import { text_includes } from "./text_includes.mjs";
import { or } from "./or.mjs";
import { list_map_unordered_async } from "./list_map_unordered_async.mjs";
import { list_filter_null_not_is } from "./list_filter_null_not_is.mjs";
import { list_is } from "./list_is.mjs";
import { list_add } from "./list_add.mjs";
import { each } from "./each.mjs";
import { object_values_map_list } from "./object_values_map_list.mjs";
import { list_size } from "./list_size.mjs";
import { list_filter } from "./list_filter.mjs";
import { greater_than } from "./greater_than.mjs";
export async function functions_twins(repo) {
  "The groups of functions in one repo that do the same work under different names. Several people writing small units at once will each reach for the same small unit, and neither can see that the other already wrote it, so the same thing arrives twice with two names.";
  "A function that only hands back a constant is left out. Two of those hold the same value today and mean two different things, so calling them one function would be wrong, and that duplication is a separate question about where a value should live.";
  "A group here is a question, not an instruction. The same steps can be two ideas on purpose - adding numbers and joining texts are written the same way and must stay apart - so which groups become one function is a judgment nobody should make from this list alone.";
  let names = await repo_functions_names(repo);
  async function signed_of(name) {
    let parsed = await function_parse_declaration(name);
    let ast = property_get(parsed, "ast");
    let signature = js_declaration_signature(ast);
    let empty_is = text_empty_is(signature);
    if (empty_is) {
      return null;
    }
    ("a function taking nothing and calling nothing can only be handing back a constant, whatever spelling it uses to get there");
    let calls_something = text_includes(signature, "free:");
    let declaration = js_flo(ast);
    let params = property_get(declaration, "params");
    let size = list_size(params);
    let takes_something = greater_than(size, 0);
    let does_work = or(calls_something, takes_something);
    if (does_work) {
      let signed = {
        name,
        signature,
      };
      return signed;
    }
    return null;
  }
  let signed_all = await list_map_unordered_async(names, signed_of);
  let signed = list_filter_null_not_is(signed_all);
  let by_signature = {};
  function collect(entry) {
    let signature = property_get(entry, "signature");
    let name = property_get(entry, "name");
    let already = by_signature[signature];
    let started_is = list_is(already);
    if (started_is) {
      list_add(already, name);
      return;
    }
    by_signature[signature] = [name];
  }
  each(signed, collect);
  function group_of(group, signature) {
    return group;
  }
  let groups = object_values_map_list(by_signature, group_of);
  function shared_is(group) {
    let size = list_size(group);
    let shared = greater_than(size, 1);
    return shared;
  }
  let twins = list_filter(groups, shared_is);
  return twins;
}
