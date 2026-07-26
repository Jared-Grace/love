import { js_name_unbound_assert } from "./js_name_unbound_assert.mjs";
import { js_scope_identifier_rename } from "./js_scope_identifier_rename.mjs";
import { js_scopes_shadowing } from "./js_scopes_shadowing.mjs";
import { list_single } from "./list_single.mjs";
export function js_shadowing_rename(ast, name, name_after) {
  "end one hiding: give the inner binding a name of its own, and move only the mentions that were reading it. The outer binding and everything reading it stay exactly as they were, which is what makes this behaviour-preserving even when the hiding was the bug — a line that meant the outer name now gets the outer name.";
  "Refuses when the file hides the name in more than one place, because then there is no one inner binding to move and the choice belongs to whoever is reading the code.";
  js_name_unbound_assert(ast, name_after);
  let scopes = js_scopes_shadowing(ast, name);
  let scope = list_single(scopes);
  let renamed = js_scope_identifier_rename(scope, name, name_after);
  return renamed;
}
