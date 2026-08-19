import { arguments_assert } from "./arguments_assert.mjs";
import { equal } from "./equal.mjs";
import { js_identifier_nodes_bound_by } from "./js_identifier_nodes_bound_by.mjs";
import { js_identifiers_referenced_named_nodes } from "./js_identifiers_referenced_named_nodes.mjs";
import { js_scopes_binding } from "./js_scopes_binding.mjs";
import { list_first } from "./list_first.mjs";
import { list_size } from "./list_size.mjs";
import { list_size_1 } from "./list_size_1.mjs";
import { not } from "./not.mjs";
export function js_name_single_binding_is(ast, name) {
  arguments_assert(arguments, 2);
  ("Whether every mention of this name anywhere in the file reads one and the same thing.");
  ("The question to ask before a name is moved, replaced or handed to another name. A verb that rewrites a word wherever the file spells it is right exactly when the word means one thing throughout, and silently wrong otherwise - it would carry a change made about one binding onto a mention reading a different one.");
  ("Two ways it can be false and both are asked. The file may bind the word in more than one place, side by side scopes each with their own; or it may bind it once and mention it somewhere else besides, where the word reads something the file never bound at all.");
  let scopes = js_scopes_binding(ast, name);
  let one_is = list_size_1(scopes);
  if (not(one_is)) {
    return false;
  }
  let binder = list_first(scopes);
  let mine = js_identifier_nodes_bound_by(ast, name, binder);
  let mentions = js_identifiers_referenced_named_nodes(ast, name);
  let same_is = equal(list_size(mine), list_size(mentions));
  return same_is;
}
